import React from 'react';
import "./compScene3.css";
import "./../Gridd.css";

class NicolasF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            dialogue: ""
        };
        this.audio = new Audio('../../../asset/plop.mp3');
    }

    play = () => {
        this.audio.play();
 
    
    }

    componentDidMount() {
        fetch('http://localhost:5000/api/charInfo/text')
            .then((res) => {
                console.log("res: ", res);
                return res.json()
            }
            )
            .then(data => {
                console.log("data: ", data);
                this.setState({ dialogue: data });
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


                <div>
                    {!this.state.isToggleOn &&
                        <div className={this.state.isToggleOn ? "dialogue" : ""}  >
                            <p className="bubbleNico">{this.state.dialogue[6].text}  </p>

                        </div>}
                    <div>

                       

                        <img className="nicolos" onClick={event => {
                            this.state.isToggleOn ? this.setState({ isToggleOn: false }) : this.setState({ isToggleOn: true }); {this.play()}

                        }} src="../../asset/nico.png" alt="Un personnage" />


                    </div>
                </div>



            </div>
        )
    }
}




export default NicolasF;