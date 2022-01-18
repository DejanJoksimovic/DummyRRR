import React, { useContext } from "react";

const Ctx = React.createContext();

const SideMenu = () => {
  const { setHideSideMenu, hideSideMenu } = useContext(Ctx);
  return (
    <aside>
      <Menu hide={hideSideMenu} />
      <button onClick={() => setHideSideMenu(x => !x)}>toggle</button>
    </aside>
  );
};

const UserDashBoard = () => {
  const { user, setUser } = useContext(Ctx);
  React.useEffect(() => {
    fetchUser().then((data) => setUser(data.user));
  }, []);
  
  return <User username={user} />
};


const App = () => {
  const [user, setUser] = React.useState('');
  const [hideSideMenu, setHideSideMenu] = React.useState(false);
  const [clock, setClock] = React.useState(Date.now());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setClock(Date.now())
    }, 1000)
    return () => {
      clearInterval(interval);
    }
  }, []);
  
  return (
    <Ctx.Provider value={{
      user,
      setUser,
      hideSideMenu,
      setHideSideMenu,
    }}>
      <Clock time={clock} />
      <SideMenu />
      <UserDashBoard />
    </Ctx.Provider>
  );
}