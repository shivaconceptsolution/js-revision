import React from "react";
import { useRef, useState } from "react"

export default function SIExampleNew()
{
    const p = useRef(null)
    const r = useRef(null)
    const t = useRef(null)
    const[si,setSi] = useState(0)
    
    function calc(event)
    {
     var s = (p.current.value*r.current.value*t.current.value)/100
     setSi(s)
     event.preventDefault()
    }
    return(<div>
  <form onSubmit={calc}>
   <input type="text" ref={p} placeholder="Enter P" />
   <br />
   <input type="text" ref={r} placeholder="Enter R" />
   <br />
   <input type="text" ref={t} placeholder="Enter T" />
   <br />
   <input type="submit"  value="click"/>
   <br />
   <p>{si}</p>
  </form>


    </div>)

}