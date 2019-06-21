import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
border: 1px solid black;
background: grey;
color: white;
flex-flow: column wrap;
 `

const CreateNew = styled.div`
justify-content: center;
display: flex;
flex-direction: row;
font-weight: bold;
font-size: 75px;
border: 1px solid black;
height: 100px;
width: 100%`

const Name = styled.input`
display: flex;
flex-direction: row;
margin: 5px;
padding: 5px;
width: 100px;
background: #F1B8AF;
border: none;
border-radius: 3px;`



const Button = styled.button`
background: ${props => props.primary ? "palevioletred" : "lightgrey"};
color: ${props => props.primary ?
"white": "white"};
font-size: 1em;
margin: 1em;
padding: 0.25 em 1em;
height: 50px;
width: 80px;
`

const Input = styled.input`
margin: 5px;
padding: 5px;
color: ${props => props.inputColor ||
"grey"};
background: #F1B8AF;
border: none;
border-radius: 1px;
width: 30px;
height: 20px;
justify-content: space-evenly;`

const Attributes = styled.div`
display: flex;
border: 1 px solid black;
flex-wrap: no-wrap;
width: 300px;
height: 300px;
justify-content: center;
align-items: stretch;
flex-direction: column;
`

const SecondAtt = styled.div`
display: flex;
border: 1 px solid black;
flex-wrap: wrap;
width: 300px;
height: 300px;
justify-content: space-evenly;
align-items: stretch;
flex-direction: column;
`

const Container1 = styled.div`
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: stretch;
height:100%;
`

const Container2 = styled.div`
display:flex;
flex-direction:row;
justify-content: space-evenly;
align-items: stretch;
flex-flow: row wrap;
`

const Container3 = styled.div`
display: flex;
flex-direction:row;
justify-content: space-evenly;
align-items: stretch;
`

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
    await fetch("http://localhost:4000/", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  render() {
    console.log(this)
    console.log(this.state)
    return (
      <Main>
         <Container1>
        <CreateNew>
          New Character
        </CreateNew>
        <br />
          <Container2>
          <form>
            <label>
              Character Name:
  <Name placeholder="Character Name" type="text" name="name" onChange={e => this.setState({ name: e.target.value })} />
            </label>
            </form>
            <Attributes>
            <br />
            <form>
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
            </form>
            </Attributes>
            <SecondAtt>
            <form>
            <label>
              Intelligence:
  <Input placeholder="0" type="number" name="intelligence" onChange={e => this.setState({ intelligence: e.target.value })} />
            </label>
            <label>
              Wisdom:
  <Input placeholder="0" type="number" name="wisdom" onChange={e => this.setState({ wisdom: e.target.value })} />
            </label>
            <label>
              Charisma:
  <Input placeholder="0" type="number" name="charisma" onChange={e => this.setState({ charisma: e.target.value })} />
            </label>
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} /> 
          </form>
          </SecondAtt>
          </Container2>
        <br />
        <Container3>
        <Link to="/characters">Characters</Link>
        <br />
        <br />
        <Link to="play">Play D&D</Link>
        </Container3>
        </Container1>
      </Main>
    );
  }
}

export default New;
