/*eslint-disable */

import { useState, useEffect } from "react";
import Challenge from "./components/layouts/Challenge";
import Dashboard from "./components/layouts/Dashboard";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/layouts/Welcome";
import WORDS from "./data/VOCAB.json";
import { getWordByIndex, PLAN } from "./utils/index.js";

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");
  const [day, setDay] = useState(1);
  const [datetime, setDatetime] = useState(null);
  const [history, setHistory] = useState([]);
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    if (localStorage.getItem("username")) {
      setName(localStorage.getItem("username"));
      setSelectedPage(1);
    }
  }, []);

  const dayWords = PLAN[day].map((_index) => {
    return getWordByIndex(WORDS, _index).word;
  });
  console.log(dayWords);

  const handleChangePage = (pageIndex) => {
    setSelectedPage((prviousValue) => {
      return pageIndex;
    });
  };

  const handleCreateAccount = (name) => {
    if (!name || !name.trim()) {
      return;
    }
    localStorage.setItem("username", name);
    handleChangePage(1);
  };

  const pages = {
    0: (
      <Welcome
        handleCreateAccount={handleCreateAccount}
        name={name}
        setName={setName}
      />
    ),
    1: (
      <Dashboard
        name={name}
        attempts={attempts}
        PLAN={PLAN}
        day={day}
        dayWords={dayWords}
        handleChangePage={handleChangePage}
        datetime={datetime}
        history={history}
      />
    ),
    2: <Challenge />,
  };

  return <Layout>{pages[selectedPage]}</Layout>;
}

export default App;
