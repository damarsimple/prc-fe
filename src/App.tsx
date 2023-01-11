import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

enum CommandMovement {
  Forward = 1,
  Backward = 2,
  Left = 3,
  Right = 4,
  Stop = 5,

}

const movementTranslation: Record<CommandMovement, string> = {
  [CommandMovement.Forward]: 'forward',
  [CommandMovement.Backward]: 'backward',
  [CommandMovement.Left]: 'left',
  [CommandMovement.Right]: 'right',
  [CommandMovement.Stop]: 'stop',
}

enum CommandClaw {
  Open = 1,
  Close = 2,
}

function App() {

  const [movement, setMovement] = useState<CommandMovement>(CommandMovement.Stop);
  

  useEffect(() => {
    // listen w,a,s,d

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'w':
          setMovement(CommandMovement.Forward)
          break
        case 's':
          setMovement(CommandMovement.Backward)
          break
        case 'a':
          setMovement(CommandMovement.Left)
          break
        case 'd':
          setMovement(CommandMovement.Right)
          break
        default:
          setMovement(CommandMovement.Stop)
          break
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      setMovement(CommandMovement.Stop)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])
  

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>PRC 2023 DIRECTION</h1>
      <div className="card">
        movement is {
          movementTranslation[movement]
          }
      
      </div>

        <div className="card">
        movement is {
          movementTranslation[movement]
          }
      
      </div>
      <p className="read-the-docs">
       press w,a,s,d to move
      </p>
        <p className="read-the-docs">
       press t to open claw
      </p>
        <p className="read-the-docs">
      press y to close claw
      </p>
    </div>
  )
}

export default App
