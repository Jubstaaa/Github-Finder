import React, { useContext, useEffect } from "react";
import RepoDetail from "./RepoDetail";
import Loading from "./Loading";
import UserDetailsHeader from "./UserDetailsHeader";
import GithubContext from "../context/githubContext";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const RepoDetails = ({ match, history, location }) => {
  const {
    getRepoDetails,
    getUser,
    getUserRepos,
    getFileDetails,
    getLanguageDetails,
    loading,
    repoDetails,
    user,
    languages,
    colors,
    readme,
    getReadme,
  } = useContext(GithubContext);

  useEffect(() => {
    getRepoDetails(
      location.state
        ? location.state.url
        : `https://api.github.com/repos/${match.params.login}/${match.params.repo}/contents/`
    );
    getUser(match.params.login);
    getUserRepos(match.params.login);
    getLanguageDetails(match.params.login, match.params.repo);
    getReadme(
      `https://raw.githubusercontent.com/${match.params.login}/${match.params.repo}/main/README.md`,
      `https://raw.githubusercontent.com/${match.params.login}/${match.params.repo}/main/readme.md`,
      `https://raw.githubusercontent.com/${match.params.login}/${match.params.repo}/master/README.md`,
      `https://raw.githubusercontent.com/${match.params.login}/${match.params.repo}/master/readme.md`
    );
  }, []);

  useEffect(() => {
    getRepoDetails(
      location.state
        ? location.state.url
        : `https://api.github.com/repos/${match.params.login}/${match.params.repo}/contents/`
    );
    getUser(match.params.login);
    getUserRepos(match.params.login);
    getLanguageDetails(match.params.login, match.params.repo);
  }, [location]);

  const percentCalc = (val) => {
    let values = Object.values(languages);
    let total = 0;

    for (let i of values) {
      total += i;
    }
    return ((val * 100) / total).toFixed(2);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <UserDetailsHeader user={user} history={history} match={match} />
        <div className="container">
          <ul className="list-group">
            {Object.keys(languages).length > 0 && (
              <li className="list-group-item text-left ">
                <div className="progress">
                  {Object.entries(languages).map(([key, val] = entry) => {
                    return (
                      <div
                        key={key}
                        className="progress-bar"
                        style={{
                          width: `${percentCalc(val)}%`,
                          backgroundColor: `${
                            colors[key] ? colors[key].color : "#000"
                          }`,
                        }}
                      ></div>
                    );
                  })}
                </div>
                <div>
                  {Object.entries(languages).map(([key, val] = entry) => {
                    return (
                      <span key={key}>
                        <svg height="10" width="10">
                          <circle
                            cx="5"
                            cy="5"
                            r="5"
                            fill={`${colors[key] ? colors[key].color : "#000"}`}
                          />
                        </svg>

                        <span className=" badge ">
                          {key}
                          <span className="mx-1  font-weight-light">{`(%${percentCalc(
                            val
                          )})`}</span>
                        </span>
                      </span>
                    );
                  })}
                </div>
              </li>
            )}

            {repoDetails.map((repoDetail, index) => (
              <RepoDetail
                repoDetail={repoDetail}
                key={index}
                params={match.params}
                getFileDetails={getFileDetails}
              />
            ))}
          </ul>
          {readme !== "" ? (
            <div
              className="card readme overflow-auto"
              style={{ maxHeight: "500px" }}
            >
              <div className="p-4" style={{ whiteSpace: "pre-wrap" }}>
                <div className="text-mono text-small mb-3">
                  {user.login}
                  <span className="text-muted d-inline-block px-1">/</span>
                  README<span className="text-muted">.md</span>
                </div>
                <ReactMarkdown children={readme} rehypePlugins={[rehypeRaw]} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
};

export default RepoDetails;
