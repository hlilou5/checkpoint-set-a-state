import React, {Component} from "react";
class Display extends Component{

        state = {
            f0 : 0,
            f1 : 0,
        } 
        push0() {
            this.setState({
                f0 : 0,
                f1 : 0,
            })
          }
          push1() {
            this.setState({
                f0 : 1,
                f1 : 1*1,
            })
          }
          push2() {
            this.setState({
                f0 :2,
                f1 : 2*2,
            })
          }
          push3() {
            this.setState({
                f0 : 3,
                f1 : 3*3,
            })
          }
          push4() {
            this.setState({
                f0 : 4,
                f1 : 4*4,
            })
          }
          push5() {
            this.setState({
                f0 : 5,
                f1 : 5*5,
            })
          }
          push6() {
            this.setState({
                f0 : 6,
                f1 : 6*6,
            })
          }
          push7() {
            this.setState({
                f0 : 7,
                f1 : 7*7,
            })
          }
          push8() {
            this.setState({
                f0 : 8,
                f1 : 8*8,
            })
          }
          push9() {
            this.setState({
                f0 : 9,
                f1 :9*9,
            })
          }
    
    render() {
		return(
			<div className="display">
            <button onClick={()=>this.push0()}>0</button>
            <button onClick={()=>this.push1()}>1</button>
            <button onClick={()=>this.push2()}>2</button>
            <button onClick={()=>this.push3()}>3</button>
            <button onClick={()=>this.push4()}>4</button>
            <button onClick={()=>this.push5()}>5</button>
            <button onClick={()=>this.push6()}>6</button>
            <button onClick={()=>this.push7()}>7</button>
            <button onClick={()=>this.push8()}>8</button>
            <button onClick={()=>this.push9()}>9</button>
            <p>the factorial of {this.state.f0} is {this.state.f1}</p>
			</div>
		);
	}
}

export default Display;