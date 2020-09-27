import React, {Component} from 'react';
import {render} from 'react-dom';
import AudioPlayer from './AudioPlayer';

export default class App extends Component {
  render() {
    var songs = [
      {
        artist: "The Weeknd",
        name: "Can t Feel My Face",
        url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3'
      },
      {
        artist: "Cello",
        name: "Haydn Cello Concerto",
        url: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3'
      }
    ]
    return (
      <div id='App'>
        <AudioPlayer songs={songs} />
      </div>
    )
  }
}

render(<App />, document.getElementById('main-container'));
