import React, { Component } from "react";

export default class NameBar extends Component { 
    constructor (props) { 
        super(props);

        this.state = { 
            name: this.props.name,
        }
    }

    render () { 
        return ( 
            <article>
                <p> { this.props.name } </p>
            </article>
        )
    }
}
