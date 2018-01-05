import React, {Component} from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import TodoRow from './todoRow'
import EditTodo from './editTodo'
import CompleteTodoRow from './completeTodo'



const TodoTable = (props) => {
    return (

        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Priority</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Options</Table.HeaderCell>
                    

                </Table.Row>
            </Table.Header>

            <Table.Body>

                {/* This maps the todos recieved as a prop */}

                {props
                    .todos
                    .map(t => {


                        if (t.editing) {
                            return <EditTodo
                                editTodo={props.editTodo}
                                cancelEditing={e => props.cancelEditing(t._id)}
                                key={t._id}
                                todo={t}/>
                        } else {


                            return <TodoRow
                                todo={t}
                                key={t._id}
                                completeTodo={e => props.completeTodo(t)}
                                startEditing={e => props.startEditing(t._id)}
                                deleteTodo={e=> props.deleteTodo(t)}
                            />
                        }
                    })}
                
                {/* This EditTodo component is used as a Create new Todo Component */}
                {/* Thus by using the same component for both use, we can reuse a lot of the codes */}
                
                <EditTodo createTodo={props.createTodo} />
            </Table.Body>

        </Table>
    )
}
export default TodoTable;
