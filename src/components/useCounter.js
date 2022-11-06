import React, { useState, useCallback } from "react";


export default function useCounter(reducer, initState) {
    const [state, setState] = useState(initState); 

    const dispatch = useCallback((action) => {
        const nextState = reducer(state, action)
        setState(nextState)
      }, [setState, state])
  
    return [state, dispatch]
  }
