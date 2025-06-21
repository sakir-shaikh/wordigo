function Countdown() {
  return (
    <section id="countdown">
      <div className="card countdown-card">
        <h1 className="item-header">Day {16}</h1>
        <div className="today-container">
          <div>
            <p>Time remaining</p>
            <h3>{"23H 59M 59S"}</h3>
          </div>
          <div>
            <p>Words for today</p>
            <h3>{16}</h3>
          </div>
        </div>

        <button className="start-task">
          <h6>Start</h6>
        </button>
      </div>
    </section>
  );
}

export default Countdown;
