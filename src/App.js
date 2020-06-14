import React, { useState } from 'react';
import './App.css';

class Footer extends React.Component{
  render(){
    return(
      <footer class="footer">
        <div class="container">
          <span class="text-muted">Created by Thomas Liu</span>
        </div>
      </footer>
    );
  }
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

function Table(){
  return (
    <div class="container text-center container-default-override main-table">
      <div class="row icon-cats">
        <div class="col" > 
          <p>Work</p>
        </div>
        <div class="col"> 
          <p>Social</p>
        </div>
        <div class="col"> 
          <p>Gaming</p>
        </div>
        <div class="col"> 
          <p>Outdoors</p>
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
          target="https://twitter.com/thomasliu"
          imageSource="images/twitter.png"
          label="Twitter">
        </ButtonLink>
        <ButtonLink 
          position="col right"
          target="https://www.quora.com/profile/Thomas-Liu-126"
          imageSource="images/quora.png"
          label="Quora">
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
      </div>
    </div>
  );
}

function Table2(){
  return (
    <div class="main-table container text-center container-default-override">
      <div class="row icon-cats">
        <div class="col" > 
          <p>Game Dev</p>
        </div>
      </div>
      <div class="row" >
        <ButtonLink 
          position= "col"
          target="unitytest/index.html"
          imageSource="images/unity.png"
          label="Playing around in Unity">
        </ButtonLink>
      </div>
    </div>
  );
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <section className="App-body">
          <h4 id="pageHeaders">My Stuff Online</h4>
          <Table />
          <h4 id="pageHeaders">Random Projects</h4>
          <Table2 />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;