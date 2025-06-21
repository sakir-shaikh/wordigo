import ProgressBar from "../ProgressBar";

function Challenge() {
  const word = "shakir";
  const defination = "someone who is greatful";

  return (
    <section id="challenge">
      <h1>{word}</h1>
      <p>{defination}</p>
      <div className="helper">
        {/* error correction visual bars */}
        {[...Array(defination.length).keys()].map((item, _index) => {
          // we are going to show the user if it's input vlaue is correct or not with the blue and red boxes for the each word they typed in the input box.
          return <div key={_index}>{item}</div>;
        })}
      </div>
      <input type="text" placeholder="enter the defination..." />
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
