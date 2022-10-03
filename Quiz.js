import React from "react";
import { useRef, useState } from "react";

export default function Quiz() {
  console.log(0.1 + 0.2)
  document.body.style.backgroundColor = "green";
  document.body.style.color = "white";
  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d1 = useRef(null);
  const d2 = useRef(null);
  const d3 = useRef(null);
  const d4 = useRef(null);
  const e1 = useRef(null);
  const e2 = useRef(null);
  const e3 = useRef(null);
  const e4 = useRef(null);
  const [res1, setRes1] = useState("");
  const [res2, setRes2] = useState("");
  const [res3, setRes3] = useState("");
  const [res4, setRes4] = useState("");
  const [res5, setRes5] = useState("");
  const [res6, setRes6] = useState("");
  function check() {

    var a1 = a.current.checked ? "correct" : "incorrect";
    var b1 = b.current.checked ? "correct" : "incorrect";
    var c1 = c.current.checked ? "correct" : "incorrect";
    var d, e;

    if (
      d1.current.checked &&
      d3.current.checked &&
      d4.current.checked &&
      d2.current.checked === false
    ) {
      d = "correct";
    } else {
      d = "incorrect";
    }
    if (
      e1.current.checked &&
      e3.current.checked === false &&
      e4.current.checked === false &&
      e2.current.checked
    ) {
      e = "correct";
    } else {
      e = "incorrect";
    }
    var q1 = a1 === "correct" ? 2 : 0;
    var q2 = b1 === "correct" ? 2 : 0;
    var q3 = c1 === "correct" ? 2 : 0;
    var q4 = d === "correct" ? 2 : 0;
    var q5 = e === "correct" ? 2 : 0;
    var q6 = q1 + q2 + q3 + q4 + q5;
    setRes1(a1);
    setRes2(b1);
    setRes3(c1);
    setRes4(d);
    setRes5(e);
    setRes6(" Your score is " + q6);
  }
  return (
    <div className="container-fluid  ">
      <div className="text-center">
        <h3>Welcome to Quiz </h3>
        <h4>This quiz is based on javascript interview questions</h4>
        <p>Total no of questions 5 and each question cointain 2 marks</p>
        <p>All questions are mandatory </p>
      </div>
      <div
        className="container
 bg-warning w-50 p-3 pb-4 text-dark"
      >
        <p>
          <b> Question 1 </b> What will console to log <br />
          <b>console.log(0.1 + 0.2) </b> and{" "}
          <b>console.log(0.1 + 0.2 == 0.3)</b>
        </p>
        <input
          type="radio"
          value={true}
          ref={a}
          className="form-check-input"
          name="radio"
        />
        (0.30000000004) and (false) <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio"
        />
        (0.3) and (true) <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio"
        />
        (0.30000000001) and (false) <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio"
        />
        (0.30000000001) and (true) <br />
        <b>{res1}</b>
      </div>
      <div className="container bg-warning w-50 mt-4 p-3 text-dark">
        <p>
          <b>Question 2 </b> In what order will the numbers 1-4 be logged to the
          console when the code below is executed in a function in same sequence
          <br />
          <b>
            console.log(1) <br />
            setTimeout(function(){console.log(2)}, 1000);
            <br />
            setTimeout(function(){console.log(3)}, 0);
            <br /> console.log(4);
          </b>
        </p>
        <input
          type="radio"
          value={false}
          className="form-check-input"
          name="radio1"
        />
        1 3 4 2 <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio1"
        />
        1 2 3 4 <br />
        <input
          className="form-check-input"
          type="radio"
          value={true}
          name="radio1"
          ref={b}
        />
        1 4 3 2 <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio1"
        />
        1 4 2 3<br />
        <b>{res2}</b>
      </div>
      <div className="container bg-warning text-dark w-50 mt-4 p-3">
        <p>
          <b>Question 3 </b>Consider the following code snippet
          <br />
          <b>here is a for loop where i=1 and i is less than 5 i++</b>
          <br />
          var btn = document.createElement('button');
          <br />
          btn.appendChild(document.createTextNode<b>('Button ' + i)</b>) <br />
          btn.addEventListener('click', function()<b> console.log(i) </b>)
          <br />
          document.body.appendChild(btn)
          <br />
          <b>
            What gets logged to the console when the user clicks on “Button 4”
          </b>
        </p>
        <input
          type="radio"
          value={true}
          className="form-check-input"
          name="radio2"
          ref={c}
        />
        5 <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio2"
        />
        4 <br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio2"
        />
        3<br />
        <input
          className="form-check-input"
          type="radio"
          value={false}
          name="radio2"
        />
        2
        <br />
        <b>{res3}</b>
      </div>
      <div className="container bg-warning text-dark w-50 mt-4 p-3">
        <p>
          <b>Question 4 </b>
          Which of the following keywords is used to define a variable in
          Javascript?
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={d1}
          />
          var
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={d2}
          />
          none of these
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={d3}
          />
          let
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={d4}
          />
          const
          <br />
          <b>{res4}</b>
        </p>
      </div>
      <div className="container bg-warning text-dark w-50 mt-4 p-3">
        <p>
          <b>Question 5 </b>
          Which of the following methods is used to access HTML elements using
          Javascript?
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={e1}
          />
          getElementById
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={e2}
          />
          getElementByClassName
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={e3}
          />
          current.value
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value="var"
            ref={e4}
          />
          useRef
          <br />
        </p>
        <b>{res5}</b>
      </div>
      <div className="container bg-warning w-50 mt-4 mb-4 p-3">
        <input
          type="button"
          className="btn btn-primary"
          value="submit"
          onClick={check}
        />

        <h2>
          <b> {res6} </b>
        </h2>
      </div>
      <div className="text-center">
        <h2>Thanks for participating</h2>
      </div>
    </div>
  );
}