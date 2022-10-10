import React from "react";
export class Rectangle extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {res1:"",res2:"",res3:""}
        this.handleWidth = this.handleWidth.bind(this)
        this.handleHeight = this.handleHeight.bind(this)
        this.calcArea = this.calcArea.bind(this)
    }
    handleWidth(e)
    {
        this.setState({res1:e.target.value})
    }
    handleHeight(e)
    {
        this.setState({res2:e.target.value})
    }
    calcArea(e)
    {
        var area = parseInt(this.state.res1) * parseInt(this.state.res2)
        alert(area)
        this.setState({res3:area})
        e.preventDefault()
       
    }
    render()
    {
        return(<div>
             <form onSubmit={this.calcArea}>
                 <input type="text" onChange={this.handleWidth} placeholder="Enter Width" />
                 <br/>
                 <input type="text" onChange={this.handleHeight} placeholder="Enter Hight" />
                 <br/>
                 <input type="submit" value="Calculate"  />
             </form>
             <p>{this.state.res3}</p>
        </div>)
    }
}