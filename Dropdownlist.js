import React,{ useState } from "react"

export default function Dropdownlist()
{
    const [res,setRes] = useState("")
    const [res1,setRes1] = useState("")
    const[res2,setRes2] = useState("")
    function fun(e)
    {
       setRes(e.target.value)
       e.preventDefault()
    }
    function fun1(e)
    {
       var r = ""
       for(var i=0;i<e.target.length;i++)
       {
        if(e.target.options[i].selected)
        {
            r = r + e.target.options[i].value
        }
       }
       setRes1(r)
      
     e.preventDefault()
    }
    function fun2(e)
    {
    if((res=="Basic" && res1=="CC++") || (res=="Basic" && res1=="C++C"))
    {
     setRes2("Matching")
    }
    else if(res=="Advance" && res1=="JAVAPYTHON" || res=="Advance" && res1=="PYTHONJAVA")
    {
     setRes2("Matching")
    }
    else
    {
     setRes2("NOT Matching")
    }
    e.preventDefault()
}
    return(<div>
        <select onChange={fun}>
         <option value="">Select Course1</option>   
        <option value="Basic">Basic</option>
        <option value="Advance">Advance</option>
       </select>
        <br />
        <select onChange={fun1} multiple>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="JAVA">JAVA</option>
        <option value="PYTHON">PYTHON</option>
       </select>
       <input type="button" onClick={fun2} value="Click" />
       <div> {res},{res1},{res2}</div>

    </div>)
}