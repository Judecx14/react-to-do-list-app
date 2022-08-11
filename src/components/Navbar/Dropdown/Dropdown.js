import { useState } from 'react';
import { Link } from 'react-router-dom';


function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const profilePhoto = "https://yt3.ggpht.com/ytc/AKedOLQKnQTfUZYWrw_e95Xs-_kpz0CztA8o-9XHiTMpVw=s900-c-k-c0x00ffffff-no-rj";
    return (
        <>
            <button className='w-10 h-10 ml-5 rounded-full border-2 hover:border-gray-400 ease-in duration-200' onClick={toggle}>
                <img src={profilePhoto} className='w-full h-full object-cover rounded-full' alt='profile_photo' />
            </button>
            {
                isOpen &&
                <div className='bg-white rounded-md shadow-lg absolute'>
                    <Link to='/profile' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Profile</Link>
                    <Link to='/profile' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>Groups</Link>
                </div>
            }
        </>
    )
}

export default Dropdown;