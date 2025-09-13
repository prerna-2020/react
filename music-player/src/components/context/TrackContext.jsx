import { useContext } from "react";
import { useId } from "react";
import { createContext } from "react";

export const TrackContext = createContext();

export const TrackContextProvider = TrackContext.Provider;

export default function useTrack() {
  return useContext(TrackContext);
}
