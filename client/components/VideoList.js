
var VideoList = ({videos, handleVideoListEntryTitleClick}) => {
  var videoListEntries = videos.map((video) =>
    <VideoListEntry
      key={video.etag}
      video={video}
      handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
    />
  );

  return (
    <div className="video-list media">
      {videoListEntries}
    </div>
  );
};

window.VideoList = VideoList;
