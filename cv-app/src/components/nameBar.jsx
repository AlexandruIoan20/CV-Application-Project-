import React, { Component } from "react";

class NameBar extends Component { 
    constructor (props) { 
        super(props);
    }

    render () { 
        return ( 
            <article>
                <p> { this.props.name } </p>
            </article>
        )
    }
}

export default NameBar;