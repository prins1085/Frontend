// ExampleComponent.jsx
import React from 'react';
import { useTestQuery } from '../../api/auth';

const Test = () => {

  const { data } = useTestQuery();

  console.log(data?.data,"dasadta")

  
  return <div>Data: {data?.data}</div>;
};

export default Test;
