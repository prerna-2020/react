import Player from "../Player/player";
import useTrack from "../context/TrackContext";

function Home({ audioRef }) {
  const {
    trackList,
    currentTrack,
    handlePlayPause,
    isPlaying,
    handleTimeChange,
    handleDuration,
    addToFav,
  } = useTrack();
  return (
    <div className="relative flex justify-center items-center h-screen  text-white">
      <div className="relative inset-0 bg-[url(/images/back.jpg)] h-[80vh] w-[650px] mx-auto rounded-2xl bg-cover p-8 shadow-[0_0_20px_#000000] overflow-y-auto">
        <div className="text-center">
          <audio
            controls
            className="bg-transparent hidden"
            ref={audioRef}
            onLoadedMetadata={handleDuration}
            onTimeUpdate={handleTimeChange}
          ></audio>
          {currentTrack && <Player />}
        </div>

        <table className="w-full my-4 text-left">
          <tbody>
            {trackList &&
              trackList.map((item) => {
                return (
                  <tr key={item.title}>
                    <td className="my-2">{item.id}</td>
                    <td className="flex  items-start my-2">
                      <img
                        src={item.thumb}
                        className="w-10 h-10 object-cover mr-5 cursor-pointer"
                        onClick={() => handlePlayPause(item, "fromList")}
                      />
                      <div
                        className={
                          "flex flex-col cursor-pointer" +
                          (currentTrack &&
                            (item.id === currentTrack.id
                              ? " text-orange-500"
                              : "text-white"))
                        }
                        onClick={() => handlePlayPause(item, "fromList")}
                      >
                        <span className="text-md mb-0.5">{item.title}</span>
                        <span className="text-[11px] text-gray-400">
                          {item.artist}
                        </span>
                      </div>
                    </td>
                    <td>
                      {" "}
                      {currentTrack &&
                      item.id === currentTrack.id &&
                      isPlaying ? (
                        <div className="w-10 h-10">
                          <svg
                            width="30"
                            height="30"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <rect
                              x="3"
                              y="10"
                              width="3"
                              height="10"
                              fill="#ff6900"
                            >
                              <animate
                                attributeName="height"
                                values="20;10;20"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                values="10;15;10"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect
                              x="15"
                              y="10"
                              width="3"
                              height="10"
                              fill="#ff6900"
                            >
                              <animate
                                attributeName="height"
                                values="20;5;20"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                values="10;20;10"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                            </rect>
                            <rect
                              x="25"
                              y="10"
                              width="3"
                              height="10"
                              fill="#ff6900"
                            >
                              <animate
                                attributeName="height"
                                values="20;15;20"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                              <animate
                                attributeName="y"
                                values="10;12.5;10"
                                dur="0.6s"
                                repeatCount="indefinite"
                              />
                            </rect>
                          </svg>
                        </div>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="my-2">{item.duration}</td>
                    <td className="my-2">
                      <button
                        onClick={() => addToFav(item.id)}
                        className="cursor-pointer"
                      >
                        {item.isLiked === false ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M16.5 3c-1.74 0-3.41 0.81-4.5 2.09C10.91 3.81 
           9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 
           6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 
           22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 
           15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 
           8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 
           2.36h1.87C13.46 6 14.96 5 16.5 5 18.5 5 
           20 6.5 20 8.5c0 2.89-3.14 5.74-7.9 10.05z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="#ff6900"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
           4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 
           14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 
           6.86-8.55 11.54L12 21.35z"
                            />
                          </svg>
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
