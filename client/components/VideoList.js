// var VideoList = () => (
//   <div className="video-list media">
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//     <VideoListEntry />
//   </div>
// );

// window.VideoList = VideoList;

class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.videos.map(function(video) {
          return <VideoListEntry video={video} func={this.props.func.bind(this)}/>;
        }.bind(this))}
      </div>
    );
  }
}

window.VideoList = VideoList;
