import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="bg-white dark  dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"></span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">
        Writes upside-down
      </h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
  );
}

export default App;
