import React from "react";
import LibrarySong from "./LibrarySongs";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'show' : ''}`}>
      <h2>Library</h2>
      <div className="library_songs">
        {songs.map((song) => (
          <LibrarySong
            audioRef={audioRef}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            id={song.id}
            key={song.id}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
