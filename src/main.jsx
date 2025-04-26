import React from 'react' // from installed dependencies 
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx' // from app.jsx 
import { store } from './redux/store.js' // from redux store to provide global state access 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
)
