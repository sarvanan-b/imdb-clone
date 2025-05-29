import React from "react";
import WatchList from "./WatchList";

const MovieCard = ({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchList,
}) => {
  function doesContain(movieObj) {
  return watchList.some((movie) => movie.id === movieObj.id);
}


  return (
    <div
      className="h-[40ch] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div className="m-2 flex justify-end">
          <div
            onClick={() => handleRemoveFromWatchList(movieObj)}
            className="h-8 w-8 bg-white/30 text-white flex items-center justify-center rounded-lg text-xl"
          >
            &#10060;
          </div>
        </div>
      ) : (
        <div className="m-2 flex justify-end">
          <div
            onClick={() => handleAddtoWatchList(movieObj)}
            className="h-8 w-8 bg-white/30 text-white flex items-center justify-center rounded-lg text-xl"
          >
            &#128525;
          </div>
        </div>
      )}
      {/* Top-right icon */}

      {/* Spacer to push title to bottom */}
      <div className="flex-grow"></div>

      {/* Movie name at bottom */}
      <div className="text-white text-xl w-full p-2 text-center  backdrop-blur-sm rounded-b-xl">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
