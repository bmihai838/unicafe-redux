import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './redux/store'

const App = () => {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch({ type: 'GOOD' })}>good</button> 
      <button onClick={() => dispatch({ type: 'OK' })}>ok</button> 
      <button onClick={() => dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>reset stats</button>
      <div>good {counter.good} </div>
      <div>ok {counter.ok} </div>
      <div>bad {counter.bad} </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

const renderApp = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

renderApp()
store.subscribe(renderApp)
