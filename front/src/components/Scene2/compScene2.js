import React from 'react';
import "./compScene2.css";
import "./../Gridd.css";

class CompScene2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                <div className="Scene2">
            <a href="/scene3" class="Scene2Button">Commencer</a>
                </div> 
            </div>
        )
    }
}

export default CompScene2;