import React, { useState } from "react";
import "./App.css";
import Bienvenue from "./components/Bienvenue";
import MyButton from "./components/MyButton";
import Compteur from "./components/Compteur";
import Formulaire from "./components/Formulaire";
import ListeCourses from "./components/ListeCourses";

import TodoApp from "./TodoApp";

function App() {
  return (
    <div className="App">
      
      <TodoApp />
    </div>
  );
}


  /*
function App() {
  return (
    <>
      < Bienvenue name="ahmed" />
      <MyButton  />
      <Compteur />
      <Formulaire />
      <ListeCourses />
    </>
  );
}
*/

export default App;
