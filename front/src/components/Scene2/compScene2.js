import React from 'react';
import "./compScene2.css";
import "./../Gridd.css";

class CompScene2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            dialogue: ""
        }
        this.audio = new Audio('../../../asset/fart.mp3');
        this.audioBis = new Audio('../../../asset/scream.mp3');
    }

    play = () => {
        this.audio.play();
 
    }
    
    playBis = () => {
        this.audioBis.play();
    }
    
    

    componentDidMount() {
        fetch('http://localhost:5000/api/charInfo/text')
        .then((res) => {
            console.log("res: ",res);
            return res.json()
            }
        )
        .then(data => {
            console.log("data: ",data);
            this.setState({dialogue: data});
        })
        .catch(err => {
            console.log("error: ", err)
        });
    }

    getMyDialogue = () => {

    }
    

    render() {
        return (
            <div >
                <div className="start1">
                    <a href="/scene3" class="Scene2Button">Suivant</a>
                </div>
               
                <div>
                    {!this.state.isToggleOn && <div className={this.state.isToggleOn ? "dialogue" : ""}  >
                        <p className="bubble">{this.state.dialogue[0].text}  </p>

                    </div>}
                    <img className="test"  onClick={event => {
                        this.state.isToggleOn ? this.setState({ isToggleOn: false }) : this.setState({ isToggleOn: true }); {this.playBis()}
                         }}  src="../../asset/fabieng.png" alt="Un personnage" />
                    </div>
                    <div className="motherCacaDiv">
                    <div className="cacaDiv" onClick={this.play}>
                        
                    </div>
                    </div>
                </div>
                )
            }
        }
        
export default CompScene2;