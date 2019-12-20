import React from 'react';
import "./MainMenu.css";
import "./../Gridd.css";


class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.audio = new Audio('../../../asset/walk.mp3');
    }

    play = () => {
        this.audio.play();
    }

    render() {
        return (
            <div className="desk-12 tab-12 mob-12 back">
                <div className="title tab-12 mob-12">
                    <h1 onClick={this.play}>Enquete à la Wild Code School</h1>
                </div>
                
                <div className="start tab-12 mob-12">
                    <a  href="/scene1" class="startButton">Commencer</a>
                </div>
            </div>


        )
    }
}

export default MainMenu;