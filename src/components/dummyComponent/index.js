import React, { useState } from "react";

export default ({test}) => {
    console.log('rerender Dummy')
    const [y, setY] = useState(2);
    return (
    <div onClick={() => setY(y + 1)}>
        TEST
        {test}
        {y}
    </div>);
};
