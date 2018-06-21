import React, { Component } from 'react';


class TextField extends Component {
    state = {
        data: ""
    }
    onsub(e) {
        e.preventDefault();
        this.props.passDataFromChild(this.state.data);
        this.setState({
            data: ""
        })
    }
    getData(e) {
        this.setState({
            data: e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onsub.bind(this)}>
                    <input type="text" value={this.state.data} onChange={this.getData.bind(this)} />
                </form>
            </div>
        )
    }
}

export default TextField;