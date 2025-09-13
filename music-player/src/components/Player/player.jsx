import useTrack from "../context/TrackContext";

function Player() {
  const {
    trackCurrentTime,
    currentTrack,
    trackDuration,
    handlePlayPause,
    isPlaying,
    handleProgressBar,
  } = useTrack();

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const pad = (num) => String(num).padStart(2, "0");
    if (hrs > 0) return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    else return `${pad(mins)}:${pad(secs)}`;
  };

  return (
    <>
      <div className="flex justify-center items-center  flex-col py-4">
        <img
          src={currentTrack.thumb}
          className="w-25 h-25 object-cover inline-block mb-4"
        />

        <h3 className="text-md">{currentTrack.title}</h3>
        <p className="text-sm mb-4">{currentTrack.artist}</p>
        <div className="flex justify-center items-center">
          <div className="text-[11px] text-gray-400">
            {formatTime(trackCurrentTime)}
          </div>
          <div className="">
            <input
              className="w-96 h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer mx-5 my-4
             [&::-webkit-slider-thumb]:appearance-none
             [&::-webkit-slider-thumb]:w-5
             [&::-webkit-slider-thumb]:h-2
             [&::-webkit-slider-thumb]:bg-orange-500
             [&::-webkit-slider-thumb]:rounded-full
             [&::-webkit-slider-thumb]:border-none
             [&::-webkit-slider-thumb]:shadow-md
             [&::-moz-range-thumb]:bg-orange-500
             [&::-moz-range-thumb]:border-none
             [&::-moz-range-thumb]:width-4
             [&::-moz-range-thumb]:height-4
             [&::-moz-range-thumb]:rounded-full"
              type="range"
              min="0"
              max={trackDuration ? trackDuration : currentTrack.duration}
              value={trackCurrentTime}
              step="0.01"
              onChange={(e) => handleProgressBar(e)}
            />
          </div>
          <div className="text-[11px] text-gray-400">
            {formatTime(trackDuration)}
          </div>
        </div>

        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 5v14l-7-7 7-7zm-8 0v14l-7-7 7-7zm-8 0v14h-2V5h2z" />
            </svg>
          </button>

          <button
            className="bg-white text-black rounded-full p-1 mx-5"
            onClick={() => handlePlayPause(currentTrack, "fromPlayer")}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 5v14l7-7-7-7zm8 0v14l7-7-7-7zm8 0v14h2V5h-2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Player;
