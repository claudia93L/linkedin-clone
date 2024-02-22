import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='bg-white w-full '>
      <div className='flex flex-row items-center justify-between h-16'>
        <span className='flex flex-row items-center'>
          <Link>
            <img
              src='../../../../src/assets/logo.webp'
              alt='Logo Linkedin'
              className='w-16'
            />
          </Link>
          <form>
            <div class='relative'>
              <div class='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{ color: '#787878' }}
                />
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
