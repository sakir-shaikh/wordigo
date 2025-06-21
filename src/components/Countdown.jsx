import { useState } from "react";
import { convertMilliseconds, countdownIn24Hours } from "../utils";
function Countdown(props) {
  const { dayWords, handleChangePage, datetime, day } = props;
  const targetMillis = datetime || Date.UTC(1944, 2, 17, 12, 0, 0);
  const [remainingMs, setRemainingMs] = useState(
    countdownIn24Hours(targetMillis)
  );
  const timer = convertMilliseconds(remainingMs);

  console.log(timer);

  return (
    <section id="countdown">
      <div className="card countdown-card">
        <h1 className="item-header">Day {16}</h1>
        <div className="today-container">
          <div>
            <p>Time remaining</p>
            <h3>
              {datetime
                ? `${Math.abs(timer.hours)}H 
                ${Math.abs(timer.minutes)}M
                ${Math.abs(timer.seconds)}S`
                : "23H : 59M : 59S"}
            </h3>
          </div>
          <div>
            <p>Words for today</p>
            <h3>{dayWords.length}</h3>
          </div>
        </div>

        <button
          className="start-task"
          onClick={() => {
            handleChangePage(2);
          }}
        >
          <h6>Start</h6>
        </button>
      </div>
    </section>
  );
}

export default Countdown;
