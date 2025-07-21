import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo, deleteTask } from '../features/taskSlice'
import { EditTask } from './EditTask'



const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.tasks)
    const loading = useSelector((state) => state.tasks.loading)
    const error = useSelector((state) => state.tasks.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    if (loading) {
        return <p>Loading....</p>
    } 
    if (error) {
        return <p>Error: {error}</p>
    }

    return (
    <div>
        <div>
        <h2 className='text-lefttext-lg font-semibold mt-6 text-left'>Tasks</h2>
            <ul className='space-y-4'>
                {tasks.map(task => (
                    <li key={task.id} className='bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center'>
                    <div >
                        <h3 className='text-lg font-medium text-gray-800'>{task.title}</h3>
                        {task.description && <p className='text-gray-600'>{task.description}</p>}
                        <p className='mt-1 text-sm font-semibold'>
                        Status: <span className='italic underline text-left'>{task.status}</span>
                        </p>
                    </div>
                    <div className='flex space-x-2'>
                        <EditTask task={task}/>
                        <button 
                        className='px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-400'
                        onClick={() => handleDelete(task.id)}
                        >
                            Hapus
                        </button>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default TaskList