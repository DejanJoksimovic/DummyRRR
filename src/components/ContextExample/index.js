import React, {createContext, useState} from "react";
import IterationButton from "../IterationButtonContext";
import PresentationalComponent from "../PresentationalComponentContext";

export const Context = createContext();

const { Provider: ContextProvider } = Context;

export default () => {
    const [state, setState] = useState('test');
    return (
        <ContextProvider value={{state, setState}}>
            <IterationButton />
            <PresentationalComponent />
        </ContextProvider>
    );
};
