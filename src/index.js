import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'mobx-react'
import {BrowserRouter} from 'react-router-dom'
import Store from './store'
// import ProLayout from '@ant-design/pro-layout';
// import loggPng from './images/logo.png'
// import registerServiceWorker from './registerServiceWorker'

const Wrap = (
  <Provider {...new Store()}>
    <BrowserRouter basename="/">
      <App/>
    </BrowserRouter>
  </Provider>

)

// const Wrap = (
//   <ProLayout title="Emp" logo={loggPng}>
//     <Provider {...new Store()}>
//       <BrowserRouter basename="/">
//         <App/>
//       </BrowserRouter>
//     </Provider>
//   </ProLayout>
// )

ReactDOM.render(
  Wrap,
  document.getElementById('root')
)
// registerServiceWorker()

