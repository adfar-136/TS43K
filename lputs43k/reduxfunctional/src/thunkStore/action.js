export const increment = (number) =>{
  return (dispatch)=>{
        dispatch({
            type:'INCREMENT',
            payload:number
        })
  }
}
export const decrement = (number)=>{
    return (dispatch)=>{
      dispatch({
        type:"DECREMENT",
        payload:number
      })
    }
}