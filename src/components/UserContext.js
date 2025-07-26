const { createContext } = require("react");

const UserContext = createContext({
    loggedUser : "Default User",
    setUserName: () => {},
});

export default UserContext;