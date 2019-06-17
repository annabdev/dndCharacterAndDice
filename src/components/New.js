import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.div`
display:flex;
border: 1px solid black;
flex-direction: column;
flex-wrap:wrap;
background: grey;
color: white;
justify-content: space-evenly;
height: 100%;
align-items: stretch;
flex-flow: column-wrap;
align-content: space-evenly;
flex-basis: content;
`

const CreateNew = styled.div`
display: flex;
font-weight: bold;
font-size: 75px;
border: 1px solid black;
height: 100px;
width: 100%`

const Name = styled.input`
margin: 5px;
padding: 5px;
width: 100px;
color: ${props => props.inputColor ||
"grey"};
background:papayawhip;
border: none;
border-radius: 3px;`



const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "lightgrey"};
color: ${props => props.primary ?
"white": "white"};
font-size: 1em;
margin: 1em;
padding: 0.25 em 1em;
border: 2px solid papayawhip;
border-radius: 3px;
width: 80px;
`

const Input = styled.input`
margin: 5px;
padding: 5px;
color: ${props => props.inputColor ||
"grey"};
background: papayawhip;
border: none;
border-radius: 1px;
width: 30px;
height: 20px;
justify-content: space-evenly;`

// const Attributes = styled.div`
// display: flex;
// border: 1 px solid black;
// flex-wrap: wrap;
// width: 300px;
// height: 300px;
// justify-content: space-evenly;
// align-items: stretch;
// `

// const SecondAtt = styled.div`
// display: flex;
// border: 1 px solid black;
// flex-wrap: wrap;
// width: 300px;
// height: 300px;
// justify-content: space-evenly;
// align-items: stretch;
// `

// const Container1 = styled.div`
// display:flex;
// flex-direction: row;
// justify-content: space-evenly;
// align-items: stretch;`

// const Container2 = styled.div`
// display:flex;
// flex-direction:column;
// justify-content: space-evenly;
// align-items: stretch;
// `

// const Container3 = styled.div`
// display: flex;
// flex-direction:column;
// justify-content: space-evenly;
// align-items: stretch;
// `

class New extends Component {
  state = {
    name: "",
    strength: null,
    dexterity: null,
    constitution: null,
    intelligence: null,
    wisdom: null,
    charisma: null
  };

  //Post 
  handleSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    await fetch("http://localhost:4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  myfunction() {
    console.log("CLICKED");
  }

  render() {
    console.log(this)
    console.log(this.state)
    return (
      <Main>
        <h1>
          New Character
        </h1>

        <br />
        <div>
          <form onSubmit={this.handleSubmit}>
          </form>
          <label>
            Character Name:
  <Name placeholder="Character Name" type="text" name="name" onChange={e => this.setState({ name: e.target.value })} />
          </label>
          <br />
        
           
              <label>
                Strength:
  <Input placeholder="0" type="number" name="strength" onChange={e => this.setState({ strength: e.target.value })} />
              </label>
             
              <label>
                Dexterity:
  <Input placeholder="0" type="number" name="dexterity" onChange={e => this.setState({ dexterity: e.target.value })} />
              </label>
             
              <label>
                Constitution:
  <Input placeholder="0" type="number" name="constitution" onChange={e => this.setState({ constitution: e.target.value })} />
              </label>
              
           
              <form>
                <label>
                  Intelligence:
  <Input  placeholder="0" type="number" name="intelligence" onChange={e => this.setState({ intelligence: e.target.value })} />
                </label>
                
                <label>
                  Wisdom:
  <Input placeholder="0" type="number" name="wisdom" onChange={e => this.setState({ wisdom: e.target.value })} />
                </label>

                <label>
                  Charisma:
  <Input placeholder="0" type="number" name="charisma" onChange={e => this.setState({ charisma: e.target.value })} />
                </label>
              </form>

            
          </div>
        

        <Button>Submit</Button>
       
        <br />
        <Link to="/characters">Characters</Link>
        <br />
        <Link to="play">Play D&D</Link>
        
      </Main>



    );
  }
}

export default New;
