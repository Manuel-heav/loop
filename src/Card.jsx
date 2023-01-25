import React from 'react';
import YouTube from 'react-youtube-embed';

const Card = ({username, genre, movieTitle, trailerUrl, rating, description}) => {
 return (
    <div class="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
      <YouTube class="w-full" id={trailerUrl} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Movie: {movieTitle}</div>
        <p class="text-gray-700 text-base">
          <strong>Added By: </strong>{username}
        </p>
        {
          description && <p class="text-gray-700 text-base">
<strong> Description: </strong>{description}
        </p>
        }
        <p class="text-gray-700 text-base">
<strong>Rating</strong>: {rating}
        </p>
        <p class="text-gray-700 text-base">
<strong>Genre</strong>: {genre}
        </p>
      </div>
    </div>
  )
}

export default Card