import React, { Component } from 'react'

export default class Errorboundary extends Component {
    constructor(){
        super()
        this.state={
            error:null,
            errorInfo:null,
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <div>
                <h1>Oops.... Error</h1>
                <p>Try Reloading the application</p>
            </div>
        )
    }
    return this.props.children;
  }
}
