import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='bg-white w-full border-b border-gray-200'>
      <div className='flex flex-row items-center justify-between h-16 px-28'>
        <span className='flex flex-row items-center'>
          <Link to='/'>
            <img
              src='../../../../src/assets/logo.webp'
              alt='Logo Linkedin'
              className='w-16'
            />
          </Link>
          <form>
            <div className='relative text-gray-500 '>
              <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>

              <input
                type='search'
                className='rounded bg-slate-100 w-72 h-9 text-sm pl-10'
                placeholder='Cerca'
              />
            </div>
          </form>
        </span>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
