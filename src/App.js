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

  // componentDidMount() {
  //   this.onTermSubmit("reactjs tutorial");
  // }

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items });
  };
  render() {
    return (
      <>
        <div className="container">
          {/* <div className="row yt"> */}
          {/* <h1 className="text-center col-md-12">
              <i class="fab fa-yutube-square"></i>
              &nbsp; video Search Engine
            </h1> */}
          {/* </div> */}
          <div className="row my-4">
            <div className="col-md-12">
              <SearchBar onFormSubmit={this.onTermSubmit} />
              <VideoDetails video={this.state.selectedVideo} />
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
