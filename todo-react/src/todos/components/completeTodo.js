import React, {Component} from 'react';

import {Button, Table} from 'semantic-ui-react'

// The Todo Row component is a simple stateless component, It simply takes the props 
// and maps the specific events to the methods of parent component 

const CompleteTodoRow = (props) => {
    return (

        // getClass Name assigns the class names of this element 

        <Table.Row className={getClassName(props)}>
            <Table.Cell>{props.todo.title}</Table.Cell>
            <Table.Cell>{props.todo.priority}</Table.Cell>
            <Table.Cell>{props.todo.description}</Table.Cell>
            <Table.Cell>{props.todo.date}</Table.Cell>
           
         
        </Table.Row>
    );
}

// Right now Updating, done and deleting these three states are represented with different Class Name

const getClassName = (props) => {
    return `
    
    ${props.todo.updating
        ? "updating"
        : ""}
    ${props.todo.status == 'done'
            ? "done"
            : ""}
    ${props.todo.deleting
                ? "deleting"
                : ""}
    `
}

export default CompleteTodoRow;