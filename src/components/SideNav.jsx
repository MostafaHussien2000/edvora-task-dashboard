import logo from "../assets/logo.png";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function SideNav({ isOpen, setIsOpen }) {
  return (
    <nav className={`side-nav ${isOpen ? "open" : ""}`} id="side-nav">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Shopieeee logo" />
          <button id="close-nav" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29.698"
              height="29.698"
              viewBox="0 0 29.698 29.698"
            >
              <g
                id="Group_10"
                data-name="Group 10"
                transform="translate(-1288.651 -981.651)"
              >
                <path
                  id="Line_2"
                  data-name="Line 2"
                  d="M34,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H34a2,2,0,0,1,2,2A2,2,0,0,1,34,2Z"
                  transform="translate(1291.479 984.479) rotate(45)"
                  fill="#7d1dbc"
                />
                <path
                  id="Line_3"
                  data-name="Line 3"
                  d="M34,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H34a2,2,0,0,1,2,2A2,2,0,0,1,34,2Z"
                  transform="translate(1315.521 984.479) rotate(135)"
                  fill="#7d1dbc"
                />
              </g>
            </svg>
          </button>
        </div>
        <ul className="navigation">
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/products"
              className={({ isActive }) =>
                `side-nav__link ${isActive ? "active" : ""}`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24.143"
                height="26.657"
                viewBox="0 0 24.143 26.657"
              >
                <g
                  id="Icon_feather-box"
                  data-name="Icon feather-box"
                  transform="translate(1.035 1.036)"
                >
                  <path
                    id="Path_3"
                    data-name="Path 3"
                    d="M26.573,20.168v-9.81a2.453,2.453,0,0,0-1.226-2.121L16.763,3.332a2.453,2.453,0,0,0-2.453,0L5.726,8.237A2.453,2.453,0,0,0,4.5,10.358v9.81A2.453,2.453,0,0,0,5.726,22.29l8.584,4.905a2.452,2.452,0,0,0,2.453,0l8.584-4.905a2.452,2.452,0,0,0,1.226-2.121Z"
                    transform="translate(-4.5 -3.003)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_4"
                    data-name="Path 4"
                    d="M4.905,10.44,15.61,16.633,26.315,10.44"
                    transform="translate(-4.574 -4.36)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_5"
                    data-name="Path 5"
                    d="M18,30.361V18"
                    transform="translate(-6.964 -5.74)"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
              <p>Products</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/orders"
              className={({ isActive }) =>
                `side-nav__link ${isActive ? "active" : ""}`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23.572"
                height="16.715"
                viewBox="0 0 23.572 16.715"
              >
                <g
                  id="Icon_feather-list"
                  data-name="Icon feather-list"
                  transform="translate(-3 -7.5)"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M12,9H26.858"
                    transform="translate(-1.785)"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M12,18H26.858"
                    transform="translate(-1.785 -2.143)"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_14"
                    data-name="Path 14"
                    d="M12,27H26.858"
                    transform="translate(-1.785 -4.285)"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_15"
                    data-name="Path 15"
                    d="M4.5,9h0"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_16"
                    data-name="Path 16"
                    d="M4.5,18h0"
                    transform="translate(0 -2.143)"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                  <path
                    id="Path_17"
                    data-name="Path 17"
                    d="M4.5,27h0"
                    transform="translate(0 -4.285)"
                    fill="none"
                    stroke="#9ca9b6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />
                </g>
              </svg>

              <p>Orders</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
