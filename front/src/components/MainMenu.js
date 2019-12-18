import React from 'react';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Titre</h1>
                <a href ="/Scene1"><button type="button">Commencez</button></a>
            </div>
        )
    }
}

export default MainMenu;