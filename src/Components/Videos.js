import React, { useState, useEffect } from 'react';
import Video from './Video';

// import Spinner from './Spinner';

const Videos = ({ mainVideo, videos, videoSelect, loading }) => {
  const [mainVideoSrc, setMainVideoSrc] = useState('');

  useEffect(() => {
    mainVideo &&
      setMainVideoSrc(`https://youtube.com/embed/${mainVideo.id.videoId}`);
  }, [mainVideo]);

  return (
    <div className='grid-container'>
      {mainVideo && (
        <div className='main-video mb-6 md:mb-0'>
          <iframe
            frameBorder='0'
            height='100%'
            width='100%'
            title={mainVideo.snippet.title}
            src={mainVideoSrc}
          ></iframe>
          <div>
            <p className='text-xl my-2 font-semibold'>
              {mainVideo.snippet.title}
            </p>
            <p className='text-sm'>{mainVideo.snippet.description}</p>
          </div>
        </div>
      )}
      <div className={`videos mb-4 ${loading ? '' : 'lg:overflow-y-scroll'}`}>
        {videos &&
          videos.map((video, id) => {
            return <Video key={id} video={video} videoSelect={videoSelect} />;
          })}
      </div>
    </div>
  );
};

export default Videos;
