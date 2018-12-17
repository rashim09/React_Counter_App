import React from 'react';
import './button.css';


const header = (props) => (
    <div className="header"onClick={props.clicked}>
        {props.title}
    </div>
);

export default header;