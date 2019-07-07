import React, { Component } from 'react'
import { Button } from "react-bootstrap";
import { inject, observer } from "mobx-react";
class Test extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.insert = this.insert.bind(this);
    }
    state = {
        text: ""
    };

    componentDidMount() {
        console.log(this.props.rootstore);
    }
    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    insert = () => {
        this.props.rootstore.todostore.addTodo(this.state.text)
        console.log(JSON.stringify(this.props.rootstore.todostore.completedTodosCount));
    }
    increment=()=>{
        this.props.rootstore.numstore.increment()
        console.log(JSON.stringify(this.props.rootstore.numstore.mynum));
    }
    decrement=()=>{
        this.props.rootstore.numstore.decrement()
        console.log(JSON.stringify(this.props.rootstore.numstore.mynum));
    }
    render() {
        return (
            <div>
                <br />
                <input onChange={this.handleChange} />
                <Button onClick={this.insert}>PUT</Button>
                <br />
                <Button onClick={this.increment}>+</Button>
                <Button onClick={this.decrement}>-</Button>                
            </div>
        )
    }
}

export default inject('rootstore')(observer(Test));
