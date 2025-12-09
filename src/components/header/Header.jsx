import React from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";
import LogIn from "./logInForm/LogIn";
import { useState, useEffect } from "react";
import LoggedIn from "./LoggedIn/LoggedIn";

const Header = ({ headers }) => {
  const [loggedIn, setLoggedIn] = useState(false); // Vi starter med ikke at være logget ind
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);

  const logout = () => {
    //facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    if (user == "user" && pass == 123) {
    setLoggedIn(true);
    console.log("Now we are logged in");
    setUsername(user);
    setRoles(roles);
    } else {
      alert("Wrong password or username")
    }
  };

  

  return (
    <div className={styles.header}>
      <nav>
        {headers.map((header, index) => (
          <NavLink
            key={index}
            to={header.url}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            {header.title}
          </NavLink>
        ))}
      </nav>
     <div className="login-section">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div>
                <LoggedIn
                  loggedIn={loggedIn}
                  username={username}
                  roles={roles}
                />
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
    </div>
  );
};

export default Header;
