import React, { Component } from 'react'
import Demo from './components/ClassComponent/Demo'

export default class App extends Component {
  constructor(){
    super()
    console.log("adfar")
  }
  render() {
    return (
      <div>
        <h1>Adfar</h1>
        <Demo/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus recusandae voluptate minima in veniam molestias eligendi veritatis nisi obcaecati. Illo, perferendis veritatis libero sed quibusdam accusantium fuga, cupiditate temporibus porro expedita inventore, maxime quisquam ipsam exercitationem odit ad error repudiandae! Perspiciatis alias, suscipit corrupti dolorem architecto facere omnis id minus. Consequatur, nam corrupti laudantium nisi pariatur vitae alias, animi deleniti facere similique totam dicta molestias tempora. Rerum labore dolor eum esse nobis neque aliquid eveniet quia ullam rem, expedita voluptates ratione qui facilis modi aliquam ipsam reprehenderit! Temporibus totam inventore natus facilis repudiandae itaque. Voluptate vitae iste earum excepturi.</p>
      </div>
    )
  }
}
