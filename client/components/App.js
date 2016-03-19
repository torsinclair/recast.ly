// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allVideos: props.data,
      currentVideo: props.data[0]
    };
  }

  componentDidMount() {
    this.state = {
      allVideos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7"><VideoPlayer video={this.state.currentVideo}/></div>
        <div className="col-md-5"><VideoList videos={this.state.allVideos} func={this.setId.bind(this)}/></div>
      </div>
    );
  }


  setId(video) {
    this.setState({
      currentVideo: video
    });
  }

}

ReactDOM.render(<App data={exampleVideoData}/>, document.getElementById('app'));
window.App = App;