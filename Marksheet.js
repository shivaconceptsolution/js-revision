import React from "react";
export class Marksheet extends React.Component {
    constructor() {
        super()
        this.state = { p: 55, c: 95, m: 86, h: 97, e: 65,res:''}
    }
    Result() {
        var { p, c, m, h, e } = this.state
        var tot = (p + c + m + h + e);
        var per = tot / 5;
        var g
       
        var c1 = 0;
        for (let i in this.state) {
            if (this.state[i] < 33) {
                c1++
            }
        }

        if (c1 == 1) {
            this.setState({res:"supply"}) 
        }
        else if (c1 == 0) {
            if (per >= 70) {
                g = "first division" 
            }
            else if (per >= 60) {
                g = `secon division `
            }
            else {
                g = `third division `
            }
            
                 this.setState({res:"division:"+g +" percentage "+ per}) 
           
            
        }
        else {
            this.setState({res:"fail"}) 
        }
    }

    render() {
        return (
            <div onLoad={this.Result()}>
               <p>{this.state.res}</p>
            </div>
               
                
          
        )
    }
}