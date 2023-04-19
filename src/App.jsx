import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import React, { useState } from "react";

import APIdata from "./api/api.json";
import templateData from "./api/templates.json"
// import IdeaData from "./api/idea.json";



export default function App() {
  const [mode, setMode] = useState('light');
  const dispArr = [APIdata, templateData];
  const [currentState, setCurrentState] = useState(dispArr[0]);
  const apiHandler = () => {
    setCurrentState(dispArr[0]);
  }
  const templateHandler = () => {
    setCurrentState(dispArr[1]);
  }
  const ideaHandler = () => {
    setCurrentState(dispArr[2]);
  }

  const toggleTheme = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setMode("dark")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
  }
  return (
    <main>
      <Navbar apiFn={apiHandler} tempFn={templateHandler} ideaFn={ideaHandler} mode={mode} tT={toggleTheme} />
      <div class="d-flex justify-content-evenly my-3">
        {
          currentState.map(item => {
            return (
              <span>
                {item.category}
              </span>
            )
          })
        }
      </div>

      <div className="row m-0">
        {
          currentState.map(items => items.cards.map(item => {
            return (
              <div className="col-4 my-2">
                <Cards iT={item.title} iC={items.category} iD={item.detail} iTags={item.tags} iL={item.link} />
              </div>
            )
          }))
        }
      </div>

      <Footer mode={mode}/>
    </main>
  )
}