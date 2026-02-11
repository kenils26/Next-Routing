"use client";

import { useState } from "react";

export default function Counter({ posts }) {
  const [count, setCount] = useState(5);

  const increment = () => {
    if(count < posts.length){
    setCount(count + 1);
    }
  }
  
  const decrement = () => {
    if(count > 0){
    setCount(count - 1);
    }
  }
  return (
    <div>
      <div>
        <button onClick={decrement}>-</button>
        {count} 
        <button onClick={increment}>+</button>
      </div>

      {posts.slice(0, count).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
