import React from 'react';

import "./../Gridd.css";

class Louis extends React.Component {
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
            <div >


                <div>
                    {!this.state.isToggleOn &&
                        <div className={this.state.isToggleOn ? "dialogue" : ""}  >
                            <p className="bubble">{this.state.dialogue[3].text}  </p>

                        </div>}
                    <div>
                        <img className="test" onClick={event => {
                            this.state.isToggleOn ? this.setState({ isToggleOn: false }) : this.setState({ isToggleOn: true })
                        }} src="../../asset/louis.png" alt="Un personnage" />


                    </div>
                </div>



            </div>
        )
    }
}




export default Louis;