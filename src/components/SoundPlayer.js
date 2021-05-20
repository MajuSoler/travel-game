import correctAnswerSound from "../assets/audio/success.wav";
import wrongAnswerSound from "../assets/audio/wrong.wav";
import gameOverSound from "../assets/audio/gameover.wav";
import homePage from "../assets/audio/homepage.mp3";

export default function SoundPlayer(status) {
  switch (status) {
    case "RIGHT_ANSWER": {
      new Audio(correctAnswerSound).play();
      break;
    }
    case "WRONG_ANSWER": {
      new Audio(wrongAnswerSound).play();
      break;
    }
    case "GAME_OVER": {
      new Audio(gameOverSound).play();
      break;
    }
    case "HOMEPAGE": {
      const music = new Audio(homePage);
      if (!music.ended) {
        music.play();
      }
      // music.addEventListener("play", () => music.pause());
      break;
    }
    default: {
      new Audio(correctAnswerSound).play();
    }
  }
}
