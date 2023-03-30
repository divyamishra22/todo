import React from 'react';
import './styles/style.css'

// const Task = ({ task, onEdit, onDelete }) => {
    const Task = ({ task, onDelete, onEdit }) => {
    return (
        <div className='task flex-row'>
            <div className='tasks'>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
            </div>
            <div className='tasks-btn flex-row'>
                <button className='tsk-btn edit' onClick={() => onEdit(task)}>Edit</button>
                <button className='tsk-btn del' onClick={() => onDelete(task.id)}>Delete</button>
            </div>

            
        </div>
    );
};

export default Task;