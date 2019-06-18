import React, {Component} from 'react'
import { Link } from 'react-router-dom'




class Characters extends Component {
    state = {
        characters: [],
        name: "",
        strength: null,
        dexterity: null,
        constitution: null,
        intelligence: null,
        wisdom: null,
        charisma: null

    };

    //Update
    handleUpdate = async (e, _id) => {
        e.preventDefault();
        const update = JSON.stringify(this.state);
        await fetch("http:localhost:4000/" + _id, {
            method: "PUT",
            body: update,
            headers: {
                "Content-Type": "application/json"
            }
        });
        await this.getCharacters();
    };

    //Delete
    handleDelete = async _id => {
        await fetch("http://localhost:4000/" + _id, {
            method: "DELETE"
        });
        await this.getCharacters();
    };

    //Read
    getCharacters = async () => {
        return fetch("http://localhost:4000")
        .then(results => {
            return results.json();
        })
        .then(results => {
            console.log(results)
            this.setState( {characters:results} );
        });
    };

    filterCharacters = e => {
        let character = this.state.characters;
        character = character.filter(character => {
            return (character) !==1
        });
        this.setState({ character: character.character });
    };

    async componentDidMount() {
        await this.getCharacters();
    }

    render(){
    return(
        <div>
            {this.state.characters.map( ( character, index) => (
                <div className="border" key={index}>
                    <h2>{character.name}</h2>
                    <p>Strength:{character.strength}</p>
                    <p>Dexterity:{character.dexterity}</p>
                    <p>Constitution:{character.constitution}</p>
                    <p>Intelligence:{character.intelligence}</p>
                    <p>Wisdom:{character.wisdom}</p>
                    <p>Charisma:{character.charisma}</p>
                    <button
                    type="button"
                    onClick={() => this.handleDelete(character._id)}>
                        Delete
                    </button>

                    <button
                    type="button"
                    onClick={(e)=> this.handleUpdate(e, character._id)}>
                        Update
                    </button>

                    <form>
     <input
     type="text"
     placeholder="Character Name"
     onChange={e =>
     this.setState({ name: e.target.value })}
     />
     </form>

     <br />

     <form>
     <input
     type="number"
     placeholder="strength"
     onChange={e =>
     this.setState({ strength: e.target.value })}
     />
     </form>

     <br />

     <form>
     <input
     type="number"
     placeholder="dexterity"
     onChange={e =>
     this.setState({ dexterity: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="number"
     placeholder="constitution"
     onChange={e =>
     this.setState({ constitution: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="number"
     placeholder="intelligence"
     onChange={e =>
     this.setState({ intelligence: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="number"
     placeholder="wisdom"
     onChange={e =>
     this.setState({ wisdom: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="number"
     placeholder="charisma"
     onChange={e =>
     this.setState({ charisma: e.target.value })}
     />
     </form>
     </div>
            ))}
      <br />
      <Link to="/">Create New</Link>
      <br />
      <Link to="/play">Play D&D</Link>
        
        
        </div>
    )}
}

export default Characters;