import  React  from 'react';
import './style.css'
import Calendar from './class-component'

function App(){
  const divStyle = {
    color: 'blue' , 
    backgroundColor : 'powderblue',
    fontSize: 44,
    padding: "3px"

  }
  return (
    <>
    <div style={divStyle}>Hello world</div>
    <h1 className='title'> hello react nation</h1>
    <h3>1234</h3>
    <p><center><Calendar/></center></p>
    </>

  )
}
export default App;