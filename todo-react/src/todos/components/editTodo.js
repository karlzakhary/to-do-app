import React, {Component} from 'react';

import {Button, Icon, Label, Menu, Table} from 'semantic-ui-react'
import {Input} from 'semantic-ui-react'

import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class EditTodo extends Component {

    constructor(props) {
        super(props);
        // If props.todo exists this component is used to  Edit a Todo, 
        // else this is a Create New Todo Component

        if (this.props.todo) {
            this.state = {
                ...this.props.todo
            }
        } else {
            this.state = {
                ...this.emptyTodo()
            }
        }
    }


    emptyTodo = () => {
        return {title: "", priority: "", description: "", date: moment()}
    }



    changeNewTitle = (event) => {
        this.setState({title: event.target.value})
    }

    changeNewDescription = (event) => {
        this.setState({description: event.target.value})
    }

    changeNewDate = (event) => {
        this.setState({date: event})
    }
    
    changeNewPriority = (event) => {
        this.setState({priority: event.target.value})
    }


    createTodo = (event) => {
        this.resetTodo()
        this.props.createTodo(this.state)
    }
    editTodo = (event) => {
        this.props.editTodo(this.state)
    }



    resetTodo = () => {
        this.setState({title: "", priority: "", description: "", date: moment() })
    }
    cancelEditing = () => {
        this.props.cancelEditing();
    }


    getDateForDatePicker() {
        return moment(this.state.date)
    }

    render() {
        return (
            <Table.Row>

                <Table.Cell>

                    {/* The Value flows the data from the state to the control */}
                    {/* The onChange method pass the value from the Control to the State, It takes a method reference */}
                    {/* In this way a controlled two way binding is established */}

                    <Input                        
                        placeholder='Title'
                        value={this.state.title}
                        onChange={this.changeNewTitle}/>
                </Table.Cell>

                <Table.Cell>
                <Input                        
                        placeholder='Priority'
                        value={this.state.priority}
                        onChange={this.changeNewPriority}/>
                </Table.Cell>

                <Table.Cell>
                    <Input
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.changeNewDescription}/>
                </Table.Cell>

                <Table.Cell>

                    {/* React Datepicker gets the moment date from the class method */}

                    <DatePicker
                        selected={this.getDateForDatePicker()}
                        onChange={this.changeNewDate}/>
                </Table.Cell>

                {/* The options component takes the inputs and decide if It's an option for a Edit Todo or Add New Todo */}

                <Options
                    todo={this.props.todo}    
                    editTodo={this.editTodo}
                    createTodo={this.createTodo}
                    resetTodo={this.resetTodo}
                    cancelEdit={this.cancelEditing}
                />

            </Table.Row>
        )
    }
}

export default EditTodo;



const Options = (props) => {
    if (props.todo && props.todo.editing) {
        return EditOptions(props);
    } else {
        return AddOptions(props);
    }
}




const EditOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.editTodo}>
                Edit
            </Button>
            < Button color='blue' onClick={props.cancelEdit}>
                Cancel
            </Button>
        </Table.Cell>
    );
}

const AddOptions = (props) => {
    return (
        <Table.Cell>
            <Button color='green' onClick={props.createTodo}>
                Create
            </Button>
            < Button color='blue' onClick={props.resetTodo}>
                Reset
            </Button>
        </Table.Cell>
    );
}
