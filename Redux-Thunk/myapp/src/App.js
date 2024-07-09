import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import { store, Store } from './Store'
import './App.css'

function App() {
  return (
    <div>

        <Provider store={store}>
        <Counter/>
        </Provider>

    </div>
  )
}

export default App