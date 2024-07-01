import React from 'react';
import Employee from './Employee';

export default function Student(props) {
    return (
        <div>
            <h1>Welcome to Hassan</h1>
            <input type="text" minLength={20}/>
            <hr/>
            <Employee/>
            <Employee/>
            <Employee/>
        </div>
    )
        
}
