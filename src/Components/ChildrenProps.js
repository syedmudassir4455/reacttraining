import React, { Component } from 'react';

const ChildrenProps =(props)=>{

    return ( 
    <div>
         <p> Hi i am {props.name} and i am {props.age}years old</p>
         <p> {props.childern}</p>
   
    </div>
        )
}
export default ChildrenProps