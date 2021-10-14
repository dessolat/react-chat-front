import { useState } from 'react';

const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    typeof e === 'object' ? setValue(e.target.value) : setValue(e);
  };

  return [value, handleChange];
};

export default useInput;
