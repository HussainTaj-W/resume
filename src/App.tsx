import { useEffect } from "react";

import data from "@/data/app.yml";

import "./App.css";
import Resume from "./components/Resume";

function App() {
  useEffect(() => {
    document.title = data.title;
    document.getElementById("favicon")?.setAttribute("href", data.faviconUrl);
  }, []);

  return (
    <div className="App">
      <Resume></Resume>
    </div>
  );
}

export default App;
