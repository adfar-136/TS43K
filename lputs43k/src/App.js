import React, { useState } from 'react'
import Modal from './Modal'

export default function App() {
  const [condition,setCondition] = useState(false)
  return (
    <div>
      <h1>My main file</h1>
      <div id="container"></div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum nesciunt accusamus ducimus ad, autem assumenda ut ratione nihil ex libero, nam laudantium. Voluptatem officiis molestias, ipsa ullam sequi unde.</p>
      <button onClick={()=>setCondition(true)}>Show Modal</button>
      <Modal condition={condition}>
        <div>
          <h1>Modal component</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ratione accusamus aliquam tempora debitis iure saepe pariatur dolores similique cupiditate vero sequi nisi fugit veniam sunt quod at. Maiores autem animi eos sunt iste ducimus minus magnam quod quo hic.</p>
        </div>
      </Modal>

    </div>
  )
}
