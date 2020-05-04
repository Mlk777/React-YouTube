import React, { useState } from 'react';
import './assets/global.css';
import './assets/main.css';
import youtube from './api/youtube';
import Navbar from './Components/Navbar';
import Videos from './Components/Videos';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState('true');

  const videoSelect = video => {
    setSelectedVideo(video);
  };

  const searchVideos = async searchTerm => {
    try {
      const res = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 11,
          key: 'Your_API_KEY',
          q: searchTerm,
        },
      });
      setVideos(res.data.items);
      setSelectedVideo(res.data.items[0]);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <>
      <Navbar searchVideos={searchVideos} />
      <Videos
        mainVideo={selectedVideo}
        videos={videos}
        videoSelect={videoSelect}
        loading={loading}
      />
    </>
  );
};

export default App;
