import React from "react";
import PhonesLoader from "./PhonesLoader/PhonesLoader";
import TVLoader from "./TVLoader/TVLoader";

class App extends React.Component {    
    render() {
        return (
            <>
                <PhonesLoader />
                <TVLoader />
            </>
        )
    }
}

export default App;