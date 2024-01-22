import React from "react"
export default class Demo extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0,
            name:"Adfar",
            number:100
        }
        // this.handleIncrement = this.handleIncrement.bind(this)
    }
    handleIncrement=()=>{
      this.setState({count:this.state.count+1})
    }
    render(){
        return (
            <>
            <h1>{this.state.count}</h1>
            <button onClick={this.handleIncrement}>Increment</button>
            <h1>{this.state.name}</h1>
            <h1>{this.state.number}</h1>
            <button onClick={()=>this.setState({number:this.state.number-1})}>Decrement</button>
            <ul>{this.props.skills.map((item,index)=><li key={index}>{item}</li>)}</ul>
             <h1>My first class based component</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aspernatur consequuntur laborum mollitia provident consequatur facere blanditiis aut consectetur libero quisquam rerum, architecto quo velit assumenda? Ullam explicabo tempora magnam labore omnis, quis tenetur consequuntur debitis odit. Ipsam, voluptates natus?</p>
            </>
        )
    }
}