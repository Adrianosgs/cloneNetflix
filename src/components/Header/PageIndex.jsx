import React from "react";
import "./Header.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img
            src="https://avatars.githubusercontent.com/u/69124206?s=400&u=ecd57c02128ff0e6e77f63411f0dacc798acb22a&v=4"
            alt="avatar"
          />
        </a>
      </div>
    </header>
  );
};
