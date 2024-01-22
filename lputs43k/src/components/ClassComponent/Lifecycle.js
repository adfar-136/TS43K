import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        console.log("Contructor");
        this.state ={
            count:0,
            name:""
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     console.log("staticprops");
    //     return {name:props.namee}
    // }
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(nextProps,nextState);
    //     if(nextState.count >= 15){
    //         return false
    //     }
    //     return true
    // }
    componentDidUpdate(prevProps,prevState){
    //    console.log(prevProps,prevState)
    //    if(prevState.count === 7){
    //     this.setState({name:"Congratulation you have reached level 10"})
    //    }
    clearInterval(this.interval)
    this.interval = setInterval(()=>{
        console.log("Hi")
    },2000)
    }
   
    componentDidMount(){
        console.log("mounting");
    }
  render() {
    console.log("render")
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        <h1>{this.state.name} Adfar</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
      </div>
    )
  }
}
