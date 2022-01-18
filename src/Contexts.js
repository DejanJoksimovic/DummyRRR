import { useContext, createContext } from 'react'

export const StateContext = createContext();
export const SetStateContext = createContext();

export const useStateContext = () => useContext(StateContext);
export const useSetStateContext = () => useContext(SetStateContext);
