
import React, { Component } from 'react';

class List extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((element, index) => {
                        return (
                            <li>{element.text}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default List;