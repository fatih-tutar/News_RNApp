import React, { useState, useEffect } from "react";

import Screen from './app/components/Screen';
import { Text } from 'react-native';

export default function App() {
  const [num, setNum] = useState(0);

  const useState = (initialValue) => {
    let state = initialValue;

    function functionToResetState (value) {
      state = value
    }

    return [state, functionToResetState]
  }

  useEffect(() => {
    setTimeout(() => {
      setNum(num + 1)
    }, 1000);
  }, [stateone, statetwo]);

  return (
    <Screen>
      <Text>The value of num is {num}</Text>
    </Screen>
  )
}