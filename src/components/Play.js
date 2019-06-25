import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Play extends Component {
    handleOnClick= () =>{console.log("Click")}
    render() {
        
        return (
            <div>
                <button><img src="https://www.awesomedice.com/image/cache/data/Singles/d4/d4-opaque-red-550x550.jpg" width="50" alt="d4" onClick={this.handleOnClick} /></button>
                <button><img src="/assets/d61.jpg" width="50" alt="d6" onClick={this.handleOnClick} /></button>
                <button><img src="https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/535/7430/d8-dice-red__54892.1530283709.jpg?c=2?imbypass=on" width="50" alt="d8" onClick={this.handleOnClick} /></button>
                <button><img src="https://cdn11.bigcommerce.com/s-70184/images/stencil/1280x1280/products/543/7142/d10-red-opaque__26369.1522248361.jpg?c=2?imbypass=on" width="50" alt="d10" onClick={this.handleOnClick} /></button>
                <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUpiIMIbe_9T0wfuj42upI3bcPh3pEb9Y_o0pbTbePxVPLrew0g" width="50" alt="d12" onClick={this.handleOnClick} /></button>
                <button><img src="https://images-na.ssl-images-amazon.com/images/I/71km9I6Cl2L._SX425_.jpg" width="50" alt="d20" onClick={this.handleOnClick} /></button>
                <br />
                <Link to="/">Create New</Link>
                <br />
                <Link to="/characters">Characters</Link>
            </div>
        )
    }
}

export default Play;