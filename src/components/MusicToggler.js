import React, { useEffect, useRef } from "react";
import musicIcon from "../assets/icon/music.png";
import { useDispatch, useSelector } from "react-redux";
import { selectMusicPlaying } from "../store/gameState/selectors";
import { toggleMusic } from "../store/gameState/actions";
import musicTrack from "../assets/audio/homepage.mp3";

export default function MusicToggler() {
  const dispatch = useDispatch();
  const musicPlaying = useSelector(selectMusicPlaying);
  const audio = useRef(new Audio(musicTrack));

  const toggler = () => {
    dispatch(toggleMusic(!musicPlaying));
  };

  useEffect(() => {
    if (musicPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [musicPlaying]);

  return (
    <div style={{ zIndex: 5000, position: "absolute", top: 8, right: 16 }}>
      <img
        src={musicIcon}
        alt="music toggler"
        onClick={toggler}
        style={{ height: 96, width: 96 }}
      />
    </div>
  );
}
