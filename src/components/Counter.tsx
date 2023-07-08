import { useState } from 'react'
import style from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={style.btn}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}

export default Counter
