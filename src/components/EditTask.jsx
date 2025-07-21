import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../features/taskSlice';


export const EditTask = ({ task }) => {
    const [isEdit, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState(task.status)
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(editTask({id: task.id, title, description, status}))
        setIsEditing(false)
    }

    return (
        <div>
            {isEdit ? (
                <div className='absolute bg-white p-4 rounded-md shadow-lg z-10'>
                    <h2 className='text-xl font-semibold mb-3 text-indigo-700'>Edit Task</h2>
                    <div className='mb-4'>
                        <input 
                        type="text"
                        placeholder='Task Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus: outline-none focus: ring-1 focus:ring-indigo-500'
                        required
                        />
                    </div>
                    <div className='mb-4'>
                        <textarea 
                        placeholder='Task Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus:outline-none focus: ring-1 focus:ring-indigo-500'
                        rows="3"></textarea>
                    </div>
                    <div className='mb-4'>
                        <select 
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className='w-full px-3 py-2 border rounded-md focus: outline-none focus: ring-1 focus:ring-indigo-500'>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">On Progres</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                    <div className='flex justify-between'>
                        <button 
                        type="submit"
                        className='px-3 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700'
                        onClick={handleEdit}
                        >
                            Simpan
                        </button>
                        <button
                            className='px-3 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-400'
                            onClick={() => setIsEditing(false)}
                        >Batal</button>
                    </div>
                </div>
            ) : (
            <>
            <button className='px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500'
            onClick={() => setIsEditing(true)}
            >
                Edit
            </button>
            </>
            )}
        </div>
    );
};

export default EditTask