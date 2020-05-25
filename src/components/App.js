import React, {Component} from 'react';
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = {videos: [], selectVideo: null}

  onVideoSelectHandler = (selectVideo) => {
    this.setState({selectVideo: selectVideo})
  }

  onTermSubmitHandler = async termInput => {

    const query = await youtube.get(`search`, {
      params: {q: termInput}
    })

    this.setState({videos: query.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <Searchbar onTermSubmit={this.onTermSubmitHandler}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectVideo}/>
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelectHandler}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;