function History() {
  return (
    <div className="card history-card">
      <h4>History</h4>
      <p>
        you have no attempts press <b>start</b> to begin 🏍
      </p>
      <div className="history-list">
        <div className="card-button-secondary">
          <div>
            <p>started</p>
            <h6>14/02/22</h6>
          </div>
          <div>
            <p>streak 🔥 </p>
            <h6>{4} days</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
