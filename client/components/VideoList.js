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
  render() {
    return (
      <div className="video-list media">
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />
        <VideoListEntry />        
      </div>
    );
  }
}

window.VideoList = VideoList;
