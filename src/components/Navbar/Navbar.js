import './Navbar.css';
import Logo from '../../assets/logo.png';
import { LogoutIcon } from '@heroicons/react/outline'
import Dropdown from './Dropdown/Dropdown';
import useUser from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <header>
      <nav className='flex justify-between'>
        <img src={Logo} alt='logo' className='w-8 h-8 cursor-pointer'  onClick={()=> {navigate('/home');}}/>
        <div>
          <button>
            <LogoutIcon className='w-8 h-8 text-gray-500' onClick={() => { logout() }} />
          </button>
          <Dropdown />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;