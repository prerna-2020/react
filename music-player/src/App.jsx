import { TrackContextProvider } from "./components/context/TrackContext";
import Home from "./components/Home/home";
import useFetch from "./components/hooks/useFetch";
import { useRef, useState, useEffect } from "react";

function App() {
  const track = useFetch();
  const audioRef = useRef();

  const [currentTrack, setcurrenTrack] = useState(null);
  const [trackList, setTrackList] = useState(null);
  const [trackCurrentTime, setTrackCurrentTime] = useState(0.0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (track) setTrackList(track);
  }, [track]);

  useEffect(() => {
    if (trackCurrentTime === trackDuration) {
      setIsPlaying(false);
      if (currentTrack) setcurrenTrack({ ...currentTrack, isPlaying: false });
    }
  }, [trackCurrentTime]);

  const handleTimeChange = () => {
    if (audioRef.current) {
      setTrackCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleDuration = () => {
    if (audioRef.current) setTrackDuration(audioRef.current.duration);
  };

  const handlePlayPause = (curr, from) => {
    if (audioRef) {
      const isPlayingStatus = curr.isPlaying;

      //track list is updated
      const updateList = trackList.map((item) => {
        return item.id === curr.id
          ? { ...item, isPlaying: !isPlayingStatus }
          : { ...item, isPlaying: false };
      });
      setTrackList(updateList);

      setcurrenTrack({ ...curr, isPlaying: !isPlayingStatus });

      //check to play or pause audio
      if (isPlayingStatus) {
        audioRef.current.pause();
        setTrackCurrentTime(audioRef.current.currentTime);
      } else {
        if (from === "fromList") audioRef.current.src = curr.src;
        audioRef.current.play();
      }
      setIsPlaying(!isPlayingStatus);
    }
  };

  const handleProgressBar = (e) => {
    const newTime = parseInt(e.target.value);
    audioRef.current.currentTime = newTime;

    setTrackCurrentTime(newTime);
  };

  const addToFav = (id) => {
    if (trackList) {
      const updateList = trackList.map((item) => {
        return item.id === id ? { ...item, isLiked: !item.isLiked } : item;
      });
      setTrackList(updateList);
    }
  };

  return (
    <TrackContextProvider
      value={{
        trackList,
        currentTrack,
        isPlaying,
        trackCurrentTime,
        trackDuration,
        handlePlayPause,
        handleTimeChange,
        handleDuration,
        addToFav,
        handleProgressBar,
      }}
    >
      <Home audioRef={audioRef} />
    </TrackContextProvider>
  );
}

export default App;
