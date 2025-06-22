/*eslint-disable */

import { useState, useEffect } from "react";
import Challenge from "./components/layouts/Challenge";
import Dashboard from "./components/layouts/Dashboard";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/layouts/Welcome";
import WORDS from "./data/VOCAB.json";
import { countdownIn24Hours, getWordByIndex, PLAN } from "./utils/index.js";

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");
  const [day, setDay] = useState(1);
  const [datetime, setDatetime] = useState(null);
  const [history, setHistory] = useState({});
  const [attempts, setAttempts] = useState(0);
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    if (localStorage.getItem("username")) {
      setName(localStorage.getItem("username"));
      setSelectedPage(1);
    }
    //if the user is registered then we are checking if he/she has any previous attempts.
    if (localStorage.getItem("attempts")) {
      setAttempts((prevAttempts) => {
        return parseInt(localStorage.getItem("attempts"));
      });
    }

    //checking for history
    if (localStorage.getItem("history")) {
      setHistory((prevHistory) => {
        return localStorage.getItem("history");
      });
    }

    //cheking day & datetime.

    if (localStorage.getItem("day")) {
      //the consisit of an object that contains the key day and datetime.
      const { day: d, datetime: dt } = JSON.parse(localStorage.getItem("day"));
      setDay((prevDay) => {
        return d;
      });
      setDatetime((prevDatetime) => {
        return dt;
      });
    }

    if (localStorage.getItem("day")) {
      const { day: d, datetime: dt } = JSON.parse(localStorage.getItem("day"));
      setDatetime(dt);
      setDay(d);

      if (d > 1 && dt) {
        const diff = countdownIn24Hours(dt) ;
        if (diff < 0) {
          console.log("Failed challenge");
          let newHistory = { ...history };
          const timestamp = new Date(dt);
          const formattedTimestamp = timestamp
            .toString()
            .split(" ")
            .slice(1, 4)
            .join(" ");
          newHistory[formattedTimestamp] = d;
          setHistory(newHistory);
          setDay(1);
          setDatetime(null);
          setAttempts(0);

          localStorage.setItem("attempts", 0);
          localStorage.setItem("history", JSON.stringify(newHistory));
          localStorage.setItem(
            "day",
            JSON.stringify({ day: 1, datetime: null })
          );
        }
      }
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

  function handleCompleteDay() {
    const newDay = day + 1;
    const newDatetime = Date.now();
    setDay(newDay);
    setDatetime(newDatetime);

    localStorage.setItem(
      "day",
      JSON.stringify({
        day: newDay,
        datetime: newDatetime,
      })
    );
    setSelectedPage(1);
  }

  const handleIncrementAttempts = () => {
    const newAttempt = attempts + 1;
    localStorage.setItem("attempts", newAttempt);
    setAttempts(newAttempt);
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
    2: (
      <Challenge
        PLAN={PLAN}
        handleChangePage={handleChangePage}
        day={day}
        dayWords={dayWords}
        handleCompleteDay={handleCompleteDay}
        handleIncrementAttempts={handleIncrementAttempts}
      />
    ),
  };

  return <Layout>{pages[selectedPage]}</Layout>;
}

export default App;
