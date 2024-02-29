import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export interface RootObject {
  done: boolean
  id: number
  title: string
}

function App() {
  const [data, setData] = useState<RootObject[]>([])

  useEffect(() => {
    const requestOptions: any = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch('https://clase-8-react-back-dev-qkfz.2.us-1.fl0.io', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData(result)

        console.log(result)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        {data.map((item) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid white',
              gap: '10px',
              borderRadius: '5px',
            }}
            key={item.id}
          >
            <h2>{item.title}</h2>
            <p>{item.done ? 'Done' : 'Not done'}</p>
          </div>
        ))}
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
