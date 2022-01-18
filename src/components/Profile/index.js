import React from "react"
import { UserContext } from '../UserProvider';
// import { UserContext } from '../UserProviderNotSeparated';

export default () => {
  console.log('rerender Profile')
    const userDetails = React.useContext(UserContext);
    // const {userDetails} = React.useContext(UserContext);
    return <div>
      <h1>{userDetails.userName}</h1>
      </div>
  }
