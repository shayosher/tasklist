import React from 'react'
import { useState } from 'react';
import Detail from './Detail';

export default function task(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const [showDetails, setShowDetails] = useState(false);

    const show = () => {
        if (showDetails) {
            return <Detail val={props.val}/>
        }
    }
    return (
        <div id='taskDiv'>
            <h3 id='taskH3'><span style={{marginLeft:'10px',marginRight:'20px'}}> Task name: {props.val.taskName}</span>  Operator: {props.val.operator} <button id='taskbutton' onClick={() => {setShowDetails(!showDetails); toggleExpanded() }}> {isExpanded ? (<span>&#9650;</span> ):( <span>&#9660;</span>)}</button></h3>
            {show()}
        </div>
    )
}
