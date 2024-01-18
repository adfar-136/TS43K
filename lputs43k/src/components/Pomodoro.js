import React, { useEffect, useState } from 'react'

function Pomodoro() {
    const [workDuration,setWorkDuration] = useState(25);
    const [breakDuration,setBreakDuration] = useState(5);
    const [workSecond,setWorkSecond] = useState(1500);
    const [breakSecond,setBreakSecond] = useState(300);
    const [type,setType] = useState("Work");
    const [resetFlag,setResetFlag] = useState(true);
    const [flag,setFlag] = useState(false);
   
    useEffect(()=>{
        if(flag && type === "Work"){
            if(workSecond>0){
                const timer = setTimeout(()=>{setWorkSecond(workSecond-1)},1000);
                return ()=>clearInterval(timer)
            }
            if(workSecond === 0){
                alert('Work Duration is over');
                setType("Break");
                setWorkSecond(workDuration*60)
            }
        }
        
        if(flag && type==="Break"){
            if(breakSecond>0){
                const timer = setTimeout(()=>{setBreakSecond(breakSecond-1)},1000);
                return ()=>clearInterval(timer)
            }
            if(breakSecond === 0){
                alert('Break Duration is over');
                setType("Work");
                setWorkSecond(breakDuration*60)
            }
        }
        
    },[breakSecond,workSecond,flag,breakDuration,workDuration,type])
    const convertToMinutetoSecond=(sec)=>{
      let m = parseInt(sec/60).toString();
      let s = parseInt(sec%60).toString();
      if(m.length === 1) m="0" + m;
      if(s.length === 1) s="0" + s;
      return m+":"+s
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setWorkSecond(workDuration*60);
        setBreakSecond(breakDuration*60);
        setType("Work")
    }
    const reset=()=>{
        setResetFlag(true);
        setFlag(false)
        setType("Work");
        setBreakDuration(5);
        setWorkDuration(25)
        setBreakSecond(300)
        setWorkDuration(1500)
    }
  return (
    <div>
        <div>
            <h1>{type==="Work"?convertToMinutetoSecond(workSecond):convertToMinutetoSecond(breakSecond)}</h1>
            <h1>{type==="Work"?"Work":"Break"} - Time</h1>
        </div>
        <div>
            <button onClick={()=>{setFlag(true);setResetFlag(false)}} disabled={flag}>Start</button>
            <button onClick={()=>{setFlag(false);setResetFlag(false)}}  disabled={!flag}>Stop</button>
            <button disabled={resetFlag} onClick={reset}>Reset</button>
        </div>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="number" value={workDuration} 
                onChange={(e)=>setWorkDuration(e.target.value)} />
                <input type="number" value={breakDuration}
                onChange={(e)=>setBreakDuration(e.target.value)}/>
                <input type="submit" value="Set" />
            </form>
        </div>
    </div>
  )
}

export default Pomodoro