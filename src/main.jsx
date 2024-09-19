import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import appStore from './utils/appStore.jsx';
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
      <App />
  </Provider>,
)
