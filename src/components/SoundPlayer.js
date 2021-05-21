import correctAnswerSound from "../assets/audio/success.wav";
import wrongAnswerSound from "../assets/audio/wrong.wav";
import gameOverSound from "../assets/audio/gameover.wav";

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
    default: {
      new Audio(correctAnswerSound).play();
    }
  }
}
