import React, { useContext, useEffect } from "react";
import Loading from "./Loading";
import UserDetailsHeader from "./UserDetailsHeader";
import GithubContext from "../context/githubContext";
import ReactMarkdown from "react-markdown";

const FileDetails = ({ match, history, location }) => {
  console.log();
  const { user, getFileDetails, fileDetails, loading } =
    useContext(GithubContext);
  useEffect(() => {
    getFileDetails(location.state.repoDetail.download_url);
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <UserDetailsHeader user={user} history={history} match={match} />
        <div className="container">
          <div className="card overflow-auto" style={{ maxHeight: "500px" }}>
            <pre style={{ whiteSpace: "pre-wrap" }}>
              <ReactMarkdown
                children={
                  typeof fileDetails.data !== "object"
                    ? fileDetails.data
                    : JSON.stringify(fileDetails.data)
                }
              />
            </pre>
          </div>
        </div>
      </>
    );
  }
};
export default FileDetails;
