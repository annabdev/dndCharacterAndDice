import React, { Component } from 'react';



class Form extends Component {
  state = {
    name: ""
  };

//Post 
handleSubmit = async e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    //need to enter server endpoint after the fetch
    await fetch("", {
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

  render(){
    console.log(this)
    console.log(this.state)
  return (
      <div>
        
    <br />
          <form onSubmit={this.handleSubmit}>
              <label>
                  Character Name:
  <input placeholder="character name" type="text" name="name" onChange={e => this.setState({ name: e.target.value })} />
              </label>

              <input type="submit" value="Submit" />
              </form>
              <button><img src="https://365psd.com/images/previews/884/six-sided-dice-d6-52128.png" width="50" alt="d6" onClick={this.myfunction} /></button>
              </div>
    );
}
}

export default Form;
