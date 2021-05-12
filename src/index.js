import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 15},
  {id: 2, message: 'My first post', likesCount: 20}
]

let dialogs = [
  { id: 1, name: 'Artur' },
  { id: 2, name: 'Lana' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Vera' }
]

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
