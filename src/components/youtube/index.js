import { useEffect, useState } from "react";
import {
  Youtube,
  YoutubeText,
  YoutubeVideo,
  YoutubeThumbs,
} from "./index.styles";

const YOUTUBE_PLAYLIST_URL =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const API_KEY = "AIzaSyA0Z264SGj9FZTXDiXDXRLIhwga33v3dIo";

const YoutubeContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getPlaylist = async () => {
      let response = await fetch(
        `${YOUTUBE_PLAYLIST_URL}?part=snippet&playlistId=PLSuyoV5K8abQFWUienY-3_aNTNlLkRvYA&maxResults=2&key=${API_KEY}`
      );
      let data = await response.json();
      if (data) {
        setVideos(data.items);
      }
    };

    getPlaylist();
  }, []);

  return (
    <Youtube>
      <h2>Assista o que já rolou no Youtube</h2>
      <YoutubeText>Confira o que rolou nos últimos cultos</YoutubeText>
      <YoutubeThumbs>
        {videos &&
          videos.map((video, key) => {
            console.log("video", video.snippet.resourceId.videoId);
            return (
              <YoutubeVideo key={`youtube-video-${key}`}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </YoutubeVideo>
            );
          })}
      </YoutubeThumbs>
    </Youtube>
  );
};

export default YoutubeContainer;
