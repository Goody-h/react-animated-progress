import React, { Component } from "react";
import Progress from "../../dist";
import "./index.css";

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state: "load"
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Demo with examples of the Progress</h1>
                <Progress state={this.state.state} width={100}/>
                <br /><br />
                <button onClick={() => {
                    this.setState({state: "load"});
                }} >Toggle Load</button>


                <button onClick={() => {
                    this.setState({state: "fail"});                    
                }} >Toggle Fail</button>


                <button onClick={() => {
                    this.setState({state: "done"});                    
                }} >Toggle Done</button>
            </div>
        );
    }
} 

export default Demo;
