import { useState } from 'react';
import { ViewGridIcon, ChevronDownIcon, AcademicCapIcon, BriefcaseIcon, HomeIcon, HeartIcon } from '@heroicons/react/outline'
import './DropdownCategories.css';

function DropdownCategories() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <button className='w-12 h-8 button-categories flex justify-around items-center' onClick={toggle}>
                <ViewGridIcon className='w-5 h-5 text-gray-500' />
                <ChevronDownIcon className='w-5 h-5 text-gray-500' />
            </button>
            {
                isOpen &&
                <ul className='bg-white rounded-md shadow-lg absolute z-10'>
                    <li className='flex py-1 px-3 cursor-pointer hover:bg-gray-200'>
                        <BriefcaseIcon className='w-5 h-5 text-gray-500' />
                        &nbsp;Work
                    </li>
                    <li className='flex py-1 px-3 cursor-pointer hover:bg-gray-200'>
                        <HomeIcon className='w-5 h-5 text-gray-500' />
                        &nbsp;Home
                    </li>
                    <li className='flex py-1 px-3 cursor-pointer hover:bg-gray-200'>
                        <HeartIcon className='w-5 h-5 text-gray-500' />
                        &nbsp;Health
                    </li>
                    <li className='flex py-1 px-3 cursor-pointer hover:bg-gray-200'>
                        <AcademicCapIcon className='w-5 h-5 text-gray-500' />
                        &nbsp;School
                    </li>
                </ul>
            }
        </div>
    )
}

export default DropdownCategories;