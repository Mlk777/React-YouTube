import React from 'react';

const Video = ({ video, videoSelect }) => {
  return (
    <>
      {video && (
        <div className='flex h-32 pr-4 mb-6 lg:mb-0'>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt='thumbnail'
            className='lg:w-1/2 cursor-pointer'
            onClick={() => videoSelect(video)}
          />
          <div class='flex flex-col ml-3'>
            <p className='text-sm lg:text-xs text-justify mb-1 font-bold md:font-semibold'>
              {video.snippet.title.length >= 40
                ? `${video.snippet.title.substr(0, 40)}...`
                : video.snippet.title}
            </p>
            <p className='text-sm lg:text-xs text-gray-600'>
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
