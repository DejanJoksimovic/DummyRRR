import React, { createContext, useMemo, useState } from "react";
import DummyComponent from "../dummyComponent";

const Context = createContext();
const { Provider: ContextProvider } = Context;

export default () => {
    const [something, setSomething] = useState('Gandalf');
    const [anoterSomething, setAnotherSomething] = useState('Aragorn');
    console.log('rerender somecomponent')
    const value = useMemo(() => ({
        something,
        setSomething,
        anoterSomething,
        setAnotherSomething,
    }), [something, setSomething, anoterSomething, setAnotherSomething]);

    const x = 1;

    return (
        <ContextProvider value={value}>
            <DummyComponent test={x}/>
        </ContextProvider>
    );
};
