import React from 'react';
import "./../Gridd.css";

class FabienF extends React.Component {
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
            <div className="desk-2 raw">


                
                    {!this.state.isToggleOn &&
                        <div className={this.state.isToggleOn ? "dialogue" : ""}  >
                            <p className="bubble">{this.state.dialogue[3].text}  </p>

                        </div>}
                    <div>
                        <img className="test" onClick={event => {
                            this.state.isToggleOn ? this.setState({ isToggleOn: false }) : this.setState({ isToggleOn: true })
                        }} src="../../asset/fabien_f.png" alt="Un personnage" />


                    </div>
                


            </div>
        )
    }
}




export default FabienF;