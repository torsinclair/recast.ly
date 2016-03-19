// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div> 
// );

// window.Search = Search;

class Search extends React.Component {
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" onClick={this.handleClick.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }

  handleClick() {
    var options = {
      part: 'snippet',
      query: $('.form-control').val(),
      max: 5,
      key: YOUTUBE_API_KEY
    };
    searchYouTube(options, this.setData.bind(this));
  }

  setData(data) {
    var video;

    exampleVideoData = [];
    data.items.forEach(function(datum) {
      video = {};
      video.kind = datum.kind;
      video.etag = datum.etag;
      video.id = datum.id;
      video.snippet = datum.snippet;
      exampleVideoData.push(video);
    });

    console.log(exampleVideoData);
  }
}

window.Search = Search;