import React, { useContext } from "react";
import GithubContext from "../context/githubContext";

const Alert = () => {
  const { alert } = useContext(GithubContext);
  return (
    alert !== null && (
      <div className="container my-2">
        <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
      </div>
    )
  );
};

export default Alert;
