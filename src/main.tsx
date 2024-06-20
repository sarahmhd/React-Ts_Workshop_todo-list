import './index.css'

import App from './App.tsx'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store/store.ts'

// import ErrorBoundary from './components/ErrorBoundary.tsx'

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(

  <React.StrictMode>
    {/* <ErrorBoundary>
       */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* 
    </ErrorBoundary> */}
  </React.StrictMode>,
)


