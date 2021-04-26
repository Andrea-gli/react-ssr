import React from 'react'; //es2015 module syntax

export default function Home() {
  return (
    <div>
      <div>I'm the best home component</div>
      <button onClick={() => console.log('clicked')}>Press Me! </button>
    </div>
  );
}
