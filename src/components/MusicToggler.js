import React from "react";
import musicIcon from "../assets/icon/music.png";
import { useDispatch, useSelector } from "react-redux";
import { selectMusicPlaying } from "../store/gameState/selectors";
import { toggleMusic } from "../store/gameState/actions";
// import SoundPlayer from "../components/SoundPlayer";

export default function MusicToggler() {
  const dispatch = useDispatch();
  const musicPlaying = useSelector(selectMusicPlaying);
  console.log(musicPlaying);
  const toggler = () => {
    dispatch(toggleMusic(!musicPlaying));
  };

  return (
    <div>
      <img src={musicIcon} alt="music toggler" onClick={toggler} />
    </div>
  );
}
