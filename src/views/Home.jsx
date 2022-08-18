import React from "react";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-view">
      <NavLink to="/products">
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
              stroke="#9ca9b6"
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
              stroke="#9ca9b6"
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
              stroke="#9ca9b6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
        <p>Products</p>
      </NavLink>
      <NavLink to="/orders">
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
    </div>
  );
}

export default Home;
