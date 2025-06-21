import { useState } from "react";
import ProgressBar from "../ProgressBar";
import { isEncountered, shuffle } from "../../utils";
import DEFINITIONS from "../../data/VOCAB.json";
function Challenge(props) {
  const {
    day,
    daysWords,
    // hgandleChangePage,
    // handleIncrementAttempts,
    // handleCompleteDay,
    PLAN,
  } = props;

  const [wordIndex, setWordIndex] = useState(0);

  // const [inputVal, setInputVal] = useState("");
  const [showDefintion, setShowDefintion] = useState(false);
  const [listToLearn, setListToLearn] = useState([
    ...daysWords,
    ...shuffle(daysWords),
  ]);

  const word = listToLearn[wordIndex];
  const isNewWord =
    showDefintion ||
    (!isEncountered(day, word) && wordIndex < daysWords.length);
  console.log("is newword", isNewWord);

  const defination = DEFINATIONS[word];
  console.log(defination);
  return (
    <section id="challenge">
      <h1>{word}</h1>
      {isNewWord && <p>{defination}</p>}
      <div className="helper">
        {/* error correction visual bars */}
        <div>
          {[...Array(defination.length).keys()].map((item, _index) => {
            // we are going to show the user if it's input vlaue is correct or not with the blue and red boxes for the each word they typed in the input box.
            return <div key={_index}></div>;
          })}
        </div>
        <input type="text" placeholder="enter the defination..." />
      </div>

      <div className="challenge-btns">
        <button className="card-button-secondary">
          <h6>I Quit 😞 </h6>
        </button>
        <button className="card-button-primary">
          <h6>I forgot 🤔 </h6>
        </button>
      </div>
      <ProgressBar />
    </section>
  );
}

export default Challenge;
