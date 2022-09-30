import React,{ useRef, useState } from "react";

export default function Radiocolor() {
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d = useRef(null);
  const e = useRef(null);
  const f = useRef(null);
  const [a2, setA2] = useState("");

  function changecolor(e1) {
    if(a.current.checked)
    document.body.style.background = a.current.value;
    else if(b.current.checked)
    document.body.style.background = b.current.value;
    else
    document.body.style.background = c.current.value;
    e1.preventDefault();
  }

  function checkbox(e2) {
   
    var c1 = "";
    var c2 = "";
    var c3 = "";
      if (d.current.checked) {
        c1 = d.current.value
      }
      else
      {
        c1 = ""
      }
      if (e.current.checked) {
        c2 = e.current.value
      }
      else
      {
        c2 = ""
      }
      if (f.current.checked) {
        c3 = f.current.value
      }
      else
      {
        c3 = ""
      }
    
    setA2(c1+ " " + c2 + " "+c3);

    e2.preventDefault();
  }
  return (
    <>
      <div className="container">
        <input type="radio" name="radio" value="red" ref={a} />
        Red
        <br />
        <input type="radio" name="radio" value="green" ref={b} />
        Green
        <br />
        <input type="radio" name="radio" value="yellow" ref={c} />
        Yellow
        <br />
        <input type="button" value="click" onClick={changecolor} />
      </div>
      <div className="container">
        <input type="checkbox" value="c++" ref={d} />
        C++
        <br />
        <input type="checkbox" value="java" ref={e} />
        JAVA
        <br />
        <input type="checkbox" value="c" ref={f} />
        C<br />
        <input type="button" value="click" onClick={checkbox} />
      </div>
      <h3>{a2}</h3>
    </>
  );
}