import React from 'react';
import "./compScene1.css";
import "./../Gridd.css";



class CompScene1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            dialogue: ""
        };
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
                <div className="Scene1">
                    <a href="/scene2" class="Scene1Button">Commencer</a>
                    <div>
                        {!this.state.isToggleOn && <div className={this.state.isToggleOn ? "dialogue" : ""}  >
                            <p className="bubble">{this.state.dialogue[0].text}  </p>

                        </div>}

                        <img onClick={event => {
                            this.state.isToggleOn ? this.setState({ isToggleOn: false }) : this.setState({ isToggleOn: true })
                        }} src="../../asset/baptiste_a.png" alt="Un personnage" />

                    </div>

                </div>
            </div>
        )
    }
}

export default CompScene1;