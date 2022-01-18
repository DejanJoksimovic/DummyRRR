import React, { useState } from "react";
import IterationButtonSeparateContexts from "../IterationButtonSeparateContexts";
import PresentationalComponentSeparateContexts from "../PresentationalComponentSeparateContexts";
import { StateContext, SetStateContext } from "../../Contexts";

export default () => {
    const [state, setState] = useState('test');
    return (
        <StateContext.Provider value={state}>
            <SetStateContext.Provider value={setState}>
                <IterationButtonSeparateContexts />
                <PresentationalComponentSeparateContexts />
            </SetStateContext.Provider>
        </StateContext.Provider>
    );
};
