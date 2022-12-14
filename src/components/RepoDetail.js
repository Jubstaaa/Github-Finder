import React, { Component } from "react";
import { Link } from "react-router-dom";

const byteCalc = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

export class RepoDetail extends Component {
  render() {
    const { user, repoDetail, params, index } = this.props;
    return (
      <div>
        <li className="list-group-item ">
          {repoDetail.type == "file" ? (
            <i className="fas fa-file mr-2"></i>
          ) : (
            <i className="fas fa-folder mr-2"></i>
          )}
          {repoDetail.type == "file" ? (
            <>
              <Link
                to={{
                  pathname: `/user/${params.login}/${params.repo}/${repoDetail.type}/${repoDetail.name}`,
                  state: { repoDetail: repoDetail },
                }}
              >
                {repoDetail.name}
              </Link>
              <a
                className="mx-2"
                href={repoDetail.download_url}
                target="_blank"
              >
                <i className="fas fa-file-download"></i>
              </a>
            </>
          ) : (
            <Link
              to={{
                pathname: `/user/${params.login}/${params.repo}/${repoDetail.type}/${repoDetail.name}`,
                state: { url: repoDetail.url },
              }}
            >
              {repoDetail.name}
            </Link>
          )}

          <span className="float-right">
            {repoDetail.type != "dir" ? byteCalc(repoDetail.size) : null}
          </span>
        </li>
      </div>
    );
  }
}

export default RepoDetail;
