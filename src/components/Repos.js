import React from "react";
import Repo from "./Repo";

const Repos = ({ repos, user }) => {
  return repos.map((repo) => <Repo repo={repo} key={repo.id} user={user} />);
};

export default Repos;
