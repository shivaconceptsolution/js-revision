import React, { useState } from "react";
export default function ReactangeFunction()
{
     var [width,setWidth] = useState(0)
     var [height,setHeight] = useState(0)
     var [res,setRes] = useState(" ")
     function areaCalc(e)
     {
       var area = width*height
       setRes(area)
       e.preventDefault()
     }
     function enterWidth(e)
     {
       setWidth(e.target.value)
     }
     function enterHeight(e)
     {
       setHeight(e.target.value)
     }
    return(<div>
        <form onSubmit={(e)=> areaCalc(e)}>
            <input type="text" onChange={(e)=> enterHeight(e)} placeholder="Enter Width" />
            <br/>
            <input type="text" onChange={(e)=> enterWidth(e)} placeholder="Enter Hight" />
            <br/>
            <input type="submit" value="Calculate"  />
        </form>
        <p>{res}</p>
   </div>)

}