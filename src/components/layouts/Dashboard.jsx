import Stats from "../Stats";
import Countdown from "../Countdown";
import History from "../History";
function Dashboard(props) {
  return (
    <section id="dashboard">
      <Stats {...props} />
      <Countdown {...props} />
      <History {...props} />
    </section>
  );
}

export default Dashboard;
