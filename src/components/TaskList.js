import React from 'react';
import Task from './Task';

// const TaskList = ({ tasks, onEdit, onDelete }) => {
    const TaskList = ({ tasks ,onDelete, onEdit}) => {
    return (
        <div className='con3'>
            {tasks.map(task => (
                // <Task key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
                <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default TaskList;
