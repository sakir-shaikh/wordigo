import Stats from "../Stats";
import Countdown from "../Countdown";
import History from "../History";
function Dashboard() {
  return (
    <section id="dashboard">
      <Stats />
      <Countdown />
      <History />
    </section>
  );
}

export default Dashboard;
