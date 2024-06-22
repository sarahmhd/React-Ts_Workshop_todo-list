import './index.css'

import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SwitchTabs from './components/SwitchTabs/SwitchTabs.tsx'
import store from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')! as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <SwitchTabs />
    </Provider>
  </React.StrictMode>,
)


