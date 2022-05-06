import React, { useState } from "react"
import { Button, TextField } from "@material-ui/core"
import MemoExample from "../MemoExample"

export default () => {
    const [textValue, setTextValue] = useState('');
    const [newTextValue, setNewTextValue] = useState('');
    return (<div>
        <TextField value={textValue} onChange={e => setTextValue(e.target.value)}/>
        <Button onClick={() => setNewTextValue(textValue)} > TEST </Button>
        <MemoExample num={newTextValue} text={textValue}/>
        </div>)
  }
