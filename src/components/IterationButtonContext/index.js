import { Button } from "@material-ui/core";
import React, {useContext} from "react";
import { Context } from '../ContextExample';

export default () => {
    const {setState} = useContext(Context);
    console.log('rerender Button');
    return (
        <Button onClick={() => setState('iterated')}>
            Iterate Me
        </Button>
    );
};
