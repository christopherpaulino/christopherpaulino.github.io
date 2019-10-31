
import React, {Component} from 'react'

export class Label extends Component{
    
    constructor(props){
        super(props)

    }
    
    render(){
        return(
            <div>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}

