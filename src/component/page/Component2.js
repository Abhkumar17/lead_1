// Second Component
import React from 'react';


function  Child(props){

     
    props.propertySet('randomText2');
    return (
        <div>
             <button>ssyi {props.property}</button>
        </div>
    )
}

export default Child;