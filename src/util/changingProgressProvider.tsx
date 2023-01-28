// import React from "react";

import { useEffect, useState } from "react";

export const ChangingProgressProvider = ({ children, values }: any) => {
  const [valueIndex, setValueIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValueIndex((valueIndex + 1) % values.length);
    }, 1000);
  }, []);
  return children(values[valueIndex]);
};
