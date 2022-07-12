import React, { useEffect, useState } from "react";
import './Home.scss';

function Home() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
     document.title = `Num ${count}`;
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="btnClick" onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Home;
