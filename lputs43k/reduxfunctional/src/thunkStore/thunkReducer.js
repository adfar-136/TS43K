const numberReducer =  (state=1000,action)=>{
  if(action.type === "INCREMENT"){
    return state+action.payload
  } else if(action.type==="DECREMENT"){
    return state- action.payload
  } else{
    return state
  }
}
export default numberReducer