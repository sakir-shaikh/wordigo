/*eslint-disable */

import { useState, useEffect } from "react";
import Challenge from "./components/layouts/Challenge";
import Dashboard from "./components/layouts/Dashboard";
import Layout from "./components/layouts/Layout";
import Welcome from "./components/layouts/Welcome";

function App() {
  const [selectedPage, setSelectedPage] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    if (localStorage.getItem("username")) {
      setName(localStorage.getItem("username"));
      setSelectedPage(1);
    }
  }, []);

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
    1: <Dashboard name={name} />,
    2: <Challenge />,
  };

  return <Layout>{pages[selectedPage]}</Layout>;
}

export default App;
