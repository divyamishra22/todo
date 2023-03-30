import React, { useState } from 'react';
import TaskList from './TaskList';
import './styles/style.css'
import Task from './Task';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);

    const addTask = (title, description) => {
        const newTask = { id: Date.now(), title, description };
        setTasks([...tasks, newTask]);
    };

    const editTask = task => {
        setEditingTask(task);
    };

    const updateTask = (title, description) => {
        const updatedTasks = tasks.map(task =>
            task.id === editingTask.id ? { ...task, title, description } : task
        );
        setTasks(updatedTasks);
        setEditingTask(null);
    };

    const deleteTask = id => {
        const filteredTasks = tasks.filter(task => task.id !== id);
        setTasks(filteredTasks);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        if (title.trim() === '' || description.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        if (editingTask) {
            updateTask(title, description);
        }
         else {
            addTask(title, description);
        }
        e.target.title.value = '';
        e.target.description.value = '';
    };

    return (
        <div className='container flex-col'>
            <h1 className='head'>Todo List</h1>
            <form className='form flex-col' onSubmit={handleSubmit}>
                <div className='title flex-col'>
                    <label>Title:</label>
                    {/* <input type="text" name="title" defaultValue={editingTask ? editingTask.title : ''} /> */}
                    <input type="text" name="title" defaultValue={" "} />
                </div>
                <div className='desc flex-col'>
                    <label>Description:</label>
                    {/* <input type="text" name="description" defaultValue={editingTask ? editingTask.description : ''} /> */}
                    <input type="text" name="description"  defaultValue={" "} />
                </div>
                <button id='btn' type="submit">{editingTask ? 'Update' : 'Add'}</button>
                {editingTask && (
                    <button className='cncl' type="button" onClick={() => setEditingTask(null)}>
                        Cancel
                    </button>
                )}
                <button type="submit" className="btn btn-sm btn-success">Add </button>
            </form>
            <div className='con2 ' style={{ marginTop: '1rem' }}>
                {/* <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} /> */}
                <TaskList tasks={tasks} onDelete={deleteTask}  onEdit={editTask} />
            </div>
        </div>
    );
};

export default TodoList;
