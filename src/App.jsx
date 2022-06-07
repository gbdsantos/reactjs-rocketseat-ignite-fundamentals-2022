import { useState } from 'react';
import { Header } from './components/Header';

import './global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
