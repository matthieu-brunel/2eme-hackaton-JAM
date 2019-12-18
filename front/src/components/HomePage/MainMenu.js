import React from 'react';
import "./MainMenu.css";
import "./../Gridd.css";

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
           <div className="back">
            <div className="title">
                <h1>Enquete à la Wild Code School</h1>
            </div>
            <div className="start">
            <a href="/scene1" class="startButton">Commencer</a>
                </div>    
            </div>
            
        
        )
    }
}

export default MainMenu;