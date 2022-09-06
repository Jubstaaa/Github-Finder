import React from "react";
import { Link } from "react-router-dom";

const Repo = ({ repo, user, colors }) => {
  return (
    <div className="col-md-6 my-2 ">
      <div className="card ">
        <div className="card-header">
          <Link
            to={{
              pathname: `/user/${user.login}/${repo.name}`,
              state: {
                url: `${repo.url}/contents`,
              },
            }}
          >
            {repo.name}
          </Link>
        </div>
        <div className="card-body">
          {repo.description && <p className="repo-desc">{repo.description}</p>}

          {repo.language && (
            <div>
              <svg height="10" width="10">
                <circle
                  cx="5"
                  cy="5"
                  r="5"
                  fill={`${colors[repo.language].color}`}
                />
              </svg>

              <span className="badge ">{repo.language}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repo;
