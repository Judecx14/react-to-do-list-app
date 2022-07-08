import './Navbar.css';
import Logo from '../../assets/logo.png';
import { LogoutIcon } from '@heroicons/react/outline'
import Dropdown from './Dropdown/Dropdown';
import useUser from '../../hooks/useUser';

function Navbar() {
  const { logout } = useUser();
  return (
    <header>
      <nav className='flex justify-between'>
        <img src={Logo} alt='logo' className='w-8 h-8' />
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