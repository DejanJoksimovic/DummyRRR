import React, {useContext} from "react";
import { Context } from '../ContextExample';

export default () => {
    const {state} = useContext(Context);
    console.log('rerender presentational');
    return (
        <div>
            {state}
        </div>
    );
};
