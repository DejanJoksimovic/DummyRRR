import React from "react"
import TopNav from "../TopNav"
import Page from '../Page';
// import {UserProvider} from '../UserProvider';
import {UserProvider} from '../UserProviderNotSeparated';

export default () => {
    return (
      <div className="main-content">
        <UserProvider>
          <TopNav />
          <Page />
        </UserProvider>
      </div>
    )
  }
