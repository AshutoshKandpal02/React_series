import React from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Hello React!</h1>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {   //props is a object in which properties can be added 
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotheruser="chai"
const reactElement= React.createElement(
  'a',
  {href:'https://google.com' ,target:'_blank'},
  'Click me to visit google ',
  anotheruser
)

createRoot(document.getElementById('root')).render(
  reactElement
);



//<MyApp/>  As it is function so we can also write it as MyApp() but we have to follow the conventions
//so write "ReactElement" as it is object and object can be dirently called
//a function is converted into elements first then it is rendered and it is done by react itself inside it