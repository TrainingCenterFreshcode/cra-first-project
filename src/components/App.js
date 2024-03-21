import React from "react";
import Tree from "./Tree/Tree";
import { UserContext } from '../contexts/userContext'

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                firstName: 'John',
                lastName: 'Doe',
                email: 'johndoe@gmail.com',
                avatar: 'https://cdn.britannica.com/92/212692-050-D53981F5/labradoodle-dog-stick-running-grass.jpg'
            }
        }
    }
    
    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <Tree />
            </UserContext.Provider>
        )
    }
}

export default App;
