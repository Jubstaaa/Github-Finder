const githubReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ALERT":
      return {
        alert: action.payload,
      };
    case "REMOVE_ALERT":
      return {
        alert: null,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "GET_REPO_DETAILS":
      return {
        ...state,
        repoDetails: action.payload,
        loading: false,
      };
    case "GET_FILE_DETAILS":
      return {
        ...state,
        fileDetails: action.payload,
        loading: false,
      };
    case "CLEAR_FILE_DETAILS":
      return {
        ...state,
        fileDetails: [],
        loading: false,
      };
    case "GET_LANGUAGES_DETAILS":
      return {
        ...state,
        languages: action.payload,
        loading: false,
      };
    case "CLEAR_LANGUAGES_DETAILS":
      return {
        ...state,
        languages: {},
        loading: false,
      };
    case "CLEAR_REPO_DETAILS":
      return {
        ...state,
        repoDetails: [],
        loading: false,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: {},
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };
    case "CLEAR_REPOS":
      return {
        ...state,
        repos: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
