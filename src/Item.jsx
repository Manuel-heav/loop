import React from 'react';

const Item = ({username, genre, title, trailerUrl, desc}) => {
 return (
    <div class="rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
      {/* <YouTube class="w-full" id={trailerUrl} /> */}
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Movie: {title}</div>
        <p class="text-white-700 text-base">
          <strong>Added By: </strong>{username}
        </p>
        {
          desc && <p class="text-white-700 text-base">
<strong> Description: </strong>{desc}
        </p>
        }
        <p class="text-white-700 text-base">
<strong>Genre</strong>: {genre}
        </p>
      </div>
    </div>
  )
}

export default Item