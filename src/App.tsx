import React from 'react'
import './App.css'
import axios from 'axios'

import { 
  BaseCharacter
} from './types'

type AppProps = {}
type AppState = { 
  characters: BaseCharacter[];
  selected?: BaseCharacter;
};

export default class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    characters: []
  };

  async componentDidMount() { 
    const raw = await axios.get('http://proxy.rconjoe.com:12120/https://giantbomb.com/api/characters/?api_key=161a437ab0f7b3a41b3859677505baea6a2e9827&format=json')
    raw.data.results.forEach((character: BaseCharacter): void => {
      this.setState((state) => ({
        characters: [...this.state.characters, character]
      }))
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className='App'>
      </div>
    )
  }
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.tsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App
