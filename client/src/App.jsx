import { useState } from 'react'
import './App.css'
import {browserrouter, routes, route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <browserrouter>
      <routes>
        <route path='/' element={<users />}></route>
        <route path='/create' element={<createusers />}></route>
        <route path='/update' element={<updateusers />}></route>
          </routes>
          </browserrouter>
    </div>
  )
}

export default App
