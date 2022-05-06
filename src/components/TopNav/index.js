import { Button } from "@material-ui/core"
import React from "react"
import { UserContext } from '../UserProviderNotSeparated';
// import { UserDispatchContext } from '../UserProvider';

export default () => {
  console.log('rerender top nav')
  // const setUserDetails = React.useContext(UserDispatchContext);
  const {setUserDetails} = React.useContext(UserContext);
    return (
      <nav className="top-nav">
        <Button onClick={() => setUserDetails({
    username: "John Doe1"
  })}>
          TEST1234
        </Button>
      </nav>
    )
  }
  