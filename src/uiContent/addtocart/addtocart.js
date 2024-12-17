import React,{useEffect,useState} from "react";

export default function AddToCart(){

    const[value,setValue]=useState(0);
    
    const handleValue=()=>{
        setValue(value+1)
    }
    useEffect(()=>{setValue(value+1)},[])
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={handleValue}>click me</button>
        </div>
    )



}
