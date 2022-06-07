import { useState } from 'react';

import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Bezerra"
            content="Lorem ipsum dolor sit amet ..."
          />
          <Post
            author="Pedro Buzzi"
            content="Lorem ipsum dolor sit amet ..."
          />
        </main>
      </div>
    </>
  )
}

export default App
