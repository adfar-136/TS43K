import React from 'react'
import Header from './components/Header'

function App() {
  var data= [[1,2,3],
[4,5,6],
[7,8,9]]
  return (
    <div>
      {data.map((item,index)=>
      item.map((list,index)=><li>{list}</li>)
      )}
      <Header data={data}/>
    </div>
  )
}

export default App