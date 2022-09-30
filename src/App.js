import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtubeapi";
import VideoList from "./components/VideoList";
import VideoDetails from "./components/VideoDetails";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: "" });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row my-4">
            <div className="col-md-12">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              {this.state.selectedVideo ? (
                <VideoDetails video={this.state.selectedVideo} />
              ) : null}
            </div>
            <div className="col-md-4">
              <VideoList
                video={this.state.selectedVideo}
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
