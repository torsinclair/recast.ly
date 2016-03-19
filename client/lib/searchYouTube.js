var searchYouTube = (options, callback) => { 
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: options,
    success: function(data) {
      console.log('SUCCESS!!');
      callback(data);
    },
    error: function(data) {
      console.log('ERROR!!');
    }
  });

};

window.searchYouTube = searchYouTube;