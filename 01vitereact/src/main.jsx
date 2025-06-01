import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';

import React from 'react'
import './index.css'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1>Custom App ! Chai</h1>
    </>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>visit Google</a>
// )


// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me Google Visit'
// )


createRoot(document.getElementById('root')).render(
  // reactElement
<App/>
)
