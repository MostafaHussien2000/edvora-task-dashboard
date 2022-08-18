import { createContext, useEffect, useState } from "react";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [querriedUsers, setQueriedUsers] = useState(users);

  const fetchData = async () => {
    const response = await fetch("https://assessment.api.vweb.app/users");

    return response.json();
  };

  useEffect(() => {
    fetchData()
      .then((data) => {
        setLoading(false);
        setUsers(data);
        setQueriedUsers(data);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        querriedUsers,
        setQueriedUsers,
        users,
        setUsers,
        error,
        loading,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
