import React from "react";
import Repos from "./Repos";

const Repo = ({ repo }) => {
  return (
    <div className="col-md-6 my-2 ">
      <div className="card ">
        <div className="card-header">
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>
        </div>
        <div className="card-body">
          {repo.description && <p className="repo-desc">{repo.description}</p>}

          <div>
            <i class="fas fa-code mr-2"></i>
            {repo.language}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
