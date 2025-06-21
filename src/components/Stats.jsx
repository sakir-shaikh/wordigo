import ProgressBar from "./ProgressBar";
function Stats() {
  const name = "sakir";
  const day = 16;
  return (
    <div className="card stats-card">
      <div className="welcome-text">
        <h6>welcome</h6>
        <h4 className="text-large">{name}</h4>
      </div>
      <div className="stats-column">
        <div>
          <p>Streak 🔥</p>
          <h4>{day - 1}</h4>
        </div>
        <div>
          <p>Words seen </p>
          <h4>{187}</h4>
        </div>
        <div>
          <p>Accuracy (%)</p>
          <h4>{(94.95).toFixed(2)}</h4>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default Stats;
