import React from 'react';

function YourTrackRow ( {song} ) {
    return (
        <div className="your-track-row">
            <button>Edit</button>
            <button>Delete</button>
            <img className='row-img' src={`${song.albumArt}`} alt={`Album artwork for ${song.albumName}`} />
            {song.songName} by {song.userName}
        </div>
    )
}



export default YourTrackRow;