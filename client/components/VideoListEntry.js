// var VideoListEntry = () => (
//   <div className="video-list-entry">
//     <div className="media-left media-middle">
//       <img className="media-object" src="//i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
//     </div>
//     <div className="media-body">
//       <div className="video-list-entry-title">Video Title</div>
//       <div className="video-list-entry-detail">Video Description</div>
//     </div>
//   </div>
// );

// window.VideoListEntry = VideoListEntry;

class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.func(this.props.video);
  }

  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={this.handleClick.bind(this)}>Video Title</div>
          <div className="video-list-entry-detail">Video Description</div>
        </div>
      </div>
    );
  }
}

window.VideoListEntry = VideoListEntry;

// {
//     "kind": "youtube#searchResult",
//     "etag": "\"abQHWywil_AkNqdqji7_FqiK-u4/Ykxo_CqKu8F8kcm-iNgL332gQTY\"",
//     "id": {
//       "kind": "youtube#video",
//       "videoId": "4ZAEBxGipoA"
//     },
//     "snippet": {
//       "publishedAt": "2015-08-02T20:52:58.000Z",
//       "channelId": "UCJbPGzawDH1njbqV-D5HqKw",
//       "title": "React JS Tutorial for Beginners - 1 - Introduction",
//       "description": "My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...",
//       "thumbnails": {
//         "default": {
//           "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg",
//           "width": 120,
//           "height": 90
//         },
//         "medium": {
//           "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/mqdefault.jpg",
//           "width": 320,
//           "height": 180
//         },
//         "high": {
//           "url": "https://i.ytimg.com/vi/4ZAEBxGipoA/hqdefault.jpg",
//           "width": 480,
//           "height": 360
//         }
//       },
//       "channelTitle": "thenewboston",
//       "liveBroadcastContent": "none"
//     }
//   },