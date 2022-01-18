import React from "react";
import { useStateContext } from '../../Contexts';

export default () => {
    const state = useStateContext();
    console.log('rerender presentational separate contexts');
    return (
        <div>
            {state}
        </div>
    );
};
