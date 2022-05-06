import React /*, { useMemo } */ from "react"

export default ({ num, test }) => {
    const someFun = (someProp) => console.log('SomeFun has been called ', someProp) ;
    // const result = useMemo(() => someFun(num), [num]); // useMemo
    const result = someFun(num); // no memoization
    return <div>{result}{test}</div>
  }
