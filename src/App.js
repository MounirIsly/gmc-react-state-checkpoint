import React, { Component } from 'react';
import './App.css'
class App extends Component {
  state = { 
      fullName: "Mounir",
      imgSrc: "https://media-exp1.licdn.com/dms/image/C4D03AQHQkzdx7puGuw/profile-displayphoto-shrink_200_200/0/1548513883827?e=1654732800&v=beta&t=xoKuJVLyvd9S3JlyNV0std9M89tVUo7S5mVla1T7Uc0",
      bio: "I am a web developer",
      profession: "Fullstack JS developer",
      show: false

   } 
   handleShow = () => this.setState({
     show: !this.state.show
   })
   
   componentDidMount() {
     setInterval(() => {
      this.setState({
        show: true
      })
     }, 1000);
   }

  render() { 
    return (
      <div className='App'>
      <input type="checkbox" onChange={this.handleShow} />{this.state.show? "Hide User" : "Show User"}
      {this.state.show ? <div> 
          <h2>My name is: {this.state.fullName}</h2> 
          <p> {this.state.bio} </p>
          <img src={this.state.imgSrc} alt="img" />
        </div> : null }
        
      </div>
    );
  }
}
 
export default App;