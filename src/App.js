/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Orb from "./components/Orb/Orb";
import DashBoard from "./components/DashBoard/DashBoard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expenses";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <DashBoard />;

      case 2:
        return <Income />;

      case 3:
        return <Expenses />;

      default:
        return <DashBoard />;
    }
  };

  return (
    <GlobalProvider>
      <div className="App">
        <Orb />
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </div>
    </GlobalProvider>
  );
}

export default App;
