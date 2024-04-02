import { useEffect, useState } from 'react';

export const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return [count, setCount];
};
