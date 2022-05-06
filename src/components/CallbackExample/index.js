import React, { useCallback, useState } from "react"
import CallbackChild from "../CallbackChild"

export default () => {
    const [num, setNum] = useState(0);
    const [anotherNum, setAnotherNum] = useState(0);    
    const someCallback = useCallback(() => setNum(num + 1), [num]);
    const anotherCallback = useCallback(() => setAnotherNum(anotherNum + 1), [anotherNum]);
    return (<div>
        {num}
        {anotherNum}
       <CallbackChild someCallback={someCallback} anotherCallback={anotherCallback} />
        </div>)
  }
