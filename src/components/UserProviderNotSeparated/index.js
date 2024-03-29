import React, { createContext, useState } from "react";

const UserContext = createContext(undefined);

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: "John Doe"
  });

  return (
    <UserContext.Provider value={{userDetails, setUserDetails}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };