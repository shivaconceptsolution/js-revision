import React, { useSyncExternalStore } from "react";

export class Controlledclass extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {res:" ",res1:" ",res2:""}
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleSubmit1 = this.handleSubmit1.bind(this);   
        this.fun = this.fun.bind(this)  // Event binding
     

    }
    handleSubmit(event)
    {
        this.setState({res:event.target.value});
    }
    handleSubmit1(event)
    {
        this.setState({res1:event.target.value});
    }
    fun(e)
    {
         var a = parseInt(this.state.res)
         var b = parseInt(this.state.res1)
         a = a + b
         b = a - b
         a = a - b
       //  alert("Name is "+n)
          this.setState({res:a})
          this.setState({res1:b})
          this.setState({res2:"a =" + a + "b= "+b})
         e.preventDefault()
    }
    render()
    {
        return(<div>
           <form onSubmit={this.fun}>
            <p>Enter name</p>
            <input type="text" onChange={this.handleSubmit} value={this.state.res} placeholder="Enter first number" />
            <br/>
            <input type="text"  onChange={this.handleSubmit1} value={this.state.res1}  placeholder="Enter second number"  />
            <br />
            <input type="submit" value="Click" />
           </form>
           {this.state.res2}
        </div>)
    }
}