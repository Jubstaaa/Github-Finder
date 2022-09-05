import React from "react";
import Repo from "./Repo";

const Repos = ({ repos, user, colors }) => {
  return repos.map((repo) => (
    <Repo repo={repo} key={repo.id} user={user} colors={colors} />
  ));
};

export default Repos;
