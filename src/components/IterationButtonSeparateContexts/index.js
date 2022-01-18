import React from "react";
import { Button } from "@material-ui/core";
import { useSetStateContext } from '../../Contexts';

export default () => {
    const setState = useSetStateContext();
    console.log('rerender Button separate contexts ');
    return (
        <Button onClick={() => setState('iterated')}>
            Iterate Me
        </Button>
    );
};
