import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { } from './pages/index.js'
// import store from './store/store.js'
import {Provider} from 'react-redux'
import { router } from './routes/routes.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router} />
        {/* <App /> */}
      {/* </Provider> */}
  </React.StrictMode>,
)
