import  React , {useState}from 'react';
import './style.css'
// import Calendar from './class-component'
// import {Header, Content, Footer} from './func-component'  
import {userContext} from './context'
import Header2 from './context-header2'
import Content2 from './context-content2'

function App(){
  let [user,setUser] = useState('')
  return (
    <userContext.Provider value={[user,setUser]} >
        <Header2/>
        <Content2/>

    </userContext.Provider>

  )
}
export default App;