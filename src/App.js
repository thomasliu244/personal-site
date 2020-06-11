import React from 'react';
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
  render(){
    return (
      <a
        className="App-link"
        href={this.props.target}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="Social-media" src={this.props.imageSource}></img>
      </a>     
    );
  }
}

function Table(){
  return (
    <div id="main-table"  class="container text-center container-width-override">
      <div class="row">
        <div class="col"> 
          <p>Work</p>
        </div>
        <div class="col"> 
          <p>Social</p>
        </div>
      </div>
      <div class="row" >
        <div class="col left">
          <ButtonLink 
            target="https://www.linkedin.com/in/thomas-liu-29a74b42/"
            imageSource="images/linkedin.png">
          </ButtonLink>
        </div>
        <div class="col right">
          <ButtonLink 
            target="https://github.com/thomasliu244"
            imageSource="images/GitHub-Mark-Light-64px.png">
          </ButtonLink>
        </div>
        <div class="col left">
          <ButtonLink 
            target="https://twitter.com/thomasliu"
            imageSource="images/twitter.png">
          </ButtonLink>
        </div>
        <div class="col right">
          <ButtonLink 
            target="https://www.quora.com/profile/Thomas-Liu-126"
            imageSource="images/quora.png">
          </ButtonLink>
        </div>
      </div>
      <div class="row">
        <div class="col"> 
          <p>Gaming</p>
        </div>
        <div class="col"> 
          <p>Outdoors</p>
        </div>
      </div>
      <div class="row">
      <div class="col left">
          <ButtonLink 
            target="https://steamcommunity.com/id/tomtomknifez/"
            imageSource="images/steam.png">
          </ButtonLink>
        </div>
        <div class="col right">
          <ButtonLink 
            target="https://www.twitch.tv/daknifez/"
            imageSource="images/twitch.png">
          </ButtonLink>
        </div>
        <div class="col left">
          <ButtonLink 
            target="https://www.alltrails.com/members/thomas-liu-2"
            imageSource="images/alltrails.png">
          </ButtonLink>
        </div>
        <div class="col right">
          <ButtonLink 
            target="https://www.strava.com/athletes/thomas-liu"
            imageSource="images/strava.png">
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <section className="App-body">
          <Table />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
