import React, { useState } from "react";
import { pure } from 'recompose';

export default pure(({test}) => {
    console.log('rerender Dummy')
    const [y, setY] = useState(2);
    return (
    <div onClick={() => setY(y + 1)}>
        TEST
        {test}
        {y}
    </div>);
});
