import React from 'react';
import { useForm } from '../hooks/useForm';
import { MdAdd } from "react-icons/md"; // Ícono de agregar

export const TodoAdd = ({ handleNewTodo }) => {
    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = e => {
        e.preventDefault();

        if(description.length <= 1) return;

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };

        handleNewTodo(newTodo);
        onResetForm();
    }; 

    return (
    <form onSubmit={onFormSubmit}>
        <input
        type='text'
        className='input-add' 
        name='description' 
        value={description}
        onChange={onInputChange} 
        placeholder='Create Task'
        />

        <button className='btn-add' type='submit'>
            <MdAdd /> 
        </button>
    </form>
    
    );
};