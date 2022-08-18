import React, { useEffect, useState } from "react";
import Loading from "./Loading";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchUsers = async () => {
    const response = await fetch("https://assessment.api.vweb.app/users");

    return response.json();
  };

  useEffect(() => {
    setLoading(true);

    fetchUsers()
      .then((data) => {
        setLoading(false);
        setError(false);
        setUsers(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  const genRandomColor = () => {
    const heu = Math.ceil(Math.random() * 360);
    const saturation = Math.ceil(Math.random() * 50) + 50;
    const light = Math.ceil(Math.random() * 50);

    return `hsl(${heu}, ${saturation}%, ${light}%)`;
  };

  return (
    <div className="users-panel">
      <p>All Users</p>
      <div className="search-area">
        <input type="text" />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18.178"
            height="18.178"
            viewBox="0 0 18.178 18.178"
          >
            <g
              id="Icon_feather-search"
              data-name="Icon feather-search"
              transform="translate(-3.5 -3.5)"
            >
              <path
                id="Path_22"
                data-name="Path 22"
                d="M18.512,11.506A7.006,7.006,0,1,1,11.506,4.5,7.006,7.006,0,0,1,18.512,11.506Z"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                id="Path_23"
                data-name="Path 23"
                d="M28.784,28.784l-3.809-3.809"
                transform="translate(-8.521 -8.521)"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </button>
      </div>
      <div className="users-list">
        {loading ? (
          <center>
            <Loading />
          </center>
        ) : error ? (
          <center>
            <p className="server-error-tag">Server error.</p>
          </center>
        ) : users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.user_id}>
                <p
                  className="icon"
                  style={{ backgroundColor: genRandomColor() }}
                >
                  {user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
                </p>
                <p className="name">{user.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Users found.</p>
        )}
      </div>
    </div>
  );
}

export default Users;
