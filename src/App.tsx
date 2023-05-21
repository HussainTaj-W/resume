import { useEffect } from "react";

import data from "@/data/data.yml";

import "./App.css";
import Resume from "./components/Resume";

function App() {
  useEffect(() => {
    document.title = data.app.title;
    document
      .getElementById("favicon")
      ?.setAttribute("href", data.app.faviconUrl);
  }, []);

  return (
    <div className="App">
      <Resume></Resume>
    </div>
  );
}

export default App;
