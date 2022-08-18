import { useState } from "react";
import Dashboard from "./components/Dashboard";
import SideNav from "./components/SideNav";
import Users from "./components/Users";

function App() {
  const [navState, setNavState] = useState(false);
  return (
    <div className="App">
      <div className="app-heading">
        <h1>Welcome to the Dashboard</h1>
        <button
          onClick={(e) => {
            setNavState((s) => !s);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="15.75"
            viewBox="0 0 27 15.75"
          >
            <g
              id="Icon_ionic-ios-menu"
              data-name="Icon ionic-ios-menu"
              transform="translate(-4.5 -10.125)"
            >
              <path
                id="Path_25"
                data-name="Path 25"
                d="M30.375,12.375H5.625A1.128,1.128,0,0,1,4.5,11.25h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,11.25h0A1.128,1.128,0,0,1,30.375,12.375Z"
              />
              <path
                id="Path_26"
                data-name="Path 26"
                d="M30.375,19.125H5.625A1.128,1.128,0,0,1,4.5,18h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,18h0A1.128,1.128,0,0,1,30.375,19.125Z"
              />
              <path
                id="Path_27"
                data-name="Path 27"
                d="M30.375,25.875H5.625A1.128,1.128,0,0,1,4.5,24.75h0a1.128,1.128,0,0,1,1.125-1.125h24.75A1.128,1.128,0,0,1,31.5,24.75h0A1.128,1.128,0,0,1,30.375,25.875Z"
              />
            </g>
          </svg>
        </button>
      </div>
      <SideNav isOpen={navState} setIsOpen={setNavState} />
      <Dashboard />
      <Users />
    </div>
  );
}

export default App;
