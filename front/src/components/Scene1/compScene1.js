import React from 'react';
import "./compScene1.css";
import "./../Gridd.css";
class CompScene1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                <div className="Scene1">
            <a href="/scene2" class="Scene1Button">Commencer</a>
                </div> 
            </div>
        )
    }
}

export default CompScene1;