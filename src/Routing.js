import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Characters from './components/Characters'
import New from './components/New'
import Play from './components/Play'

function Routing() {
    return(
        <Router>
            <div>
                <Route path="/" exact component={New} />
                <Route path="/characters" component={Characters} />
                <Route path="/play" component={Play} />
            </div>
        </Router>
    );
}

export default Routing;