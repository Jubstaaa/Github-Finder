import React from "react";
import { Link } from "react-router-dom";

const Repo = ({ repo, user }) => {
  return (
    <div className="col-md-6 my-2 ">
      <div className="card ">
        <div className="card-header">
          <Link to={`/user/${user.login}/${repo.name}`}>{repo.name}</Link>
        </div>
        <div className="card-body">
          {repo.description && <p className="repo-desc">{repo.description}</p>}

          <div>
            <i className="fas fa-code mr-2"></i>
            <span className="badge badge-info">{repo.language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
