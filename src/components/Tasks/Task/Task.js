import './Task.css';
import { useState } from 'react';
import { AcademicCapIcon, BriefcaseIcon, HomeIcon, HeartIcon, PencilIcon, CheckIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline';
import useTask from '../../../hooks/useTask';

function Task({ id = 0, body = "Ninguna", category = 0 }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newBody, setNewBody] = useState(body);

  const handlerInput = (e) => {
    setNewBody(e.target.value);
  }

  const { dropTask, upTask } = useTask();

  return (
    <section className='flex items-center justify-between bg-white rounded-lg my-4 drop-shadow-xl py-5'>
      <div className='flex items-center pl-8'>
        <button className='w-5 h-5 bg-gray-400 rounded' onClick={() => { dropTask(id) }}></button>
        <input className='ml-5 list-task' value={newBody} onChange={handlerInput} disabled={isEditing ? '' : 'disabled'} />
      </div>
      <div className='flex items-center pr-8'>
        <small className='mr-5'>
          {
            category === 0 && <QuestionMarkCircleIcon className='w-5 h-5 text-gray-500' />
          }
          {
            category === 1 && <BriefcaseIcon className='w-5 h-5 text-gray-500' />
          }
          {
            category === 2 && <HomeIcon className='w-5 h-5 text-gray-500' />
          }
          {
            category === 3 && <HeartIcon className='w-5 h-5 text-gray-500' />
          }
          {
            category === 4 && <AcademicCapIcon className='w-5 h-5 text-gray-500' />
          }
        </small>
        {
          isEditing &&
          <button className='edit-button p-2 mr-3' onClick={() => { setIsEditing(!isEditing); upTask(id, newBody, category) }}>
            <CheckIcon className='w-5 h-5 text-gray-500' />
          </button>
        }
        <button className='edit-button p-2' onClick={() => { setIsEditing(!isEditing) }}>
          <PencilIcon className='w-5 h-5 text-gray-500' />
        </button>
      </div>
    </section>
  );
}

export default Task;