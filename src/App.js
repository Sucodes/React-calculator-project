import { React } from 'react';
import Display from './components/display/Display';
import Context from './contexts/Context'; // import context to be used globally

function App() {
  return (
    <Context> {/* Wrap the context that is created to provide a global state for all components/children */}
      <div className='container'>
        <h1>Mini Calculator Project</h1>
        <Display />
      </div>
    </Context>
  )
}

export default App;