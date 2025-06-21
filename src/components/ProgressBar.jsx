function ProgressBar(props) {
  const { text, remainder } = props;
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>

      {arr.map((item, _index) => {
        return <div className="level-bar" key={_index}></div>;
      })}

      <div className="xp" style={{ width: `${remainder}%` }}></div>
    </div>
  );
}

export default ProgressBar;
