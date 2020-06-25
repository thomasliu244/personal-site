import React, { useState } from 'react';
import './App.css';

function Header(){
  return(
    <div class="container text-center container-default-override">
      <div class="row">
        <div class="col" >
          <h1 id="page-header">Thomas Liu's Personal Site</h1>
          <p id="page-body">Hi there! Welcome to my website. 
          <br></br><br></br>Below you will find a collection of my projects and hobbies.
          </p>
        </div>
      </div>
    </div>
  )
}

function SocialMedia(){
  return (
    <div class="container text-center container-default-override main-table">
      <div class="row icon-cats">
        <div class="col-3" > 
          <p>Work</p>
        </div>
        <div class="col-3"> 
          <p>Gaming</p>
        </div>
        <div class="col-3"> 
          <p>Outdoors</p>
        </div>
        <div class="col-3"> 
          <p>Game Dev</p>
        </div>
      </div>
      <div class="row" >
        <ButtonLink
          position="col left"
          target="https://www.linkedin.com/in/thomas-liu-29a74b42/"
          imageSource="images/linkedin.png"
          label="LinkedIn">
        </ButtonLink>
        <ButtonLink
          position="col right"
          target="https://github.com/thomasliu244"
          imageSource="images/GitHub-Mark-Light-64px.png"
          label="GitHub">
        </ButtonLink>
        <ButtonLink 
          position="col left"
          target="https://steamcommunity.com/id/tomtomknifez/"
          imageSource="images/steam.png"
          label="Steam">
        </ButtonLink>
        <ButtonLink 
          position="col right"
          target="https://www.twitch.tv/daknifez/"
          imageSource="images/twitch.png"
          label="Twitch">
        </ButtonLink>
        <ButtonLink 
          position="col left"
          target="https://www.alltrails.com/members/thomas-liu-2"
          imageSource="images/alltrails.png"
          label="AllTrails">
        </ButtonLink>
        <ButtonLink 
          position="col right"
          target="https://www.strava.com/athletes/thomas-liu"
          imageSource="images/strava.png"
          label="Strava">
        </ButtonLink>
        <ButtonLink 
          position= "col-3"
          target="unitytest/index.html"
          imageSource="images/unity.png"
          label="Unity Testing">
        </ButtonLink>
      </div>
    </div>
  );
}

class ButtonLink extends React.Component{
  state = {
    onHover: false
  };

  toggleState = () => this.setState({ onHover: !this.state.onHover });

  render(){
    return (
      <div class={this.props.position}>  
        <a
          className="App-link"
          href={this.props.target}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
          onMouseEnter={this.toggleState}
          onMouseLeave={this.toggleState}
          className={this.state.onHover ? "icon-big" : "icon-small"}
          src={this.props.imageSource}>         
          </img>
        </a>
        <p className="iconLabel">{this.state.onHover ? this.props.label : ""}</p>
      </div>     
    );
  }
}

function AboutMe(){
  return(
    <div class="container text-center container-default-override">
      <div class="row">
        <div class="col"><h1 id="aboutme-header">About Me</h1></div>
      </div>
      <div class="row">
        <div class="col-3" >
          <img id="self-portrait" src="images/self-portrait.jpg"></img>
        </div>
        <div class="col" >
          <p id="aboutme-body">          
          I am a technology product manager and entrepreneur passionate about building products for humans.
          <br></br><br></br>In my spare time, you will most likely find me on my bicycle exploring NYC or playing video games on my PC. You can occasionally catch me streaming on Twitch.          
          </p>
        </div>
      </div>
    </div>
  )
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <section className="App-body">
          <Header />
          <SocialMedia />
          <AboutMe />
        </section>
      </div>
    );
  }
}

export default App;