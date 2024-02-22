import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUserGroup,
  faBriefcase,
  faCommentDots,
  faBell,
  faMagnifyingGlass,
  faGrip,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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

        <nav className='flex justify-evenly text-gray-500 items-center'>
          <div className='flex flex-col mr-10'>
            <Link>
              <FontAwesomeIcon className='text-xl ' icon={faHouse} />
              <label className='text-xs'>Home</label>
            </Link>
          </div>
          <div className='flex flex-col mr-10'>
            <Link>
              <FontAwesomeIcon className='text-xl' icon={faUserGroup} />
              <label className='text-xs'>Rete</label>
            </Link>
          </div>
          <div className='flex flex-col mr-10'>
            <Link>
              <FontAwesomeIcon className='text-xl' icon={faBriefcase} />
              <label className='text-xs'>Lavoro</label>
            </Link>
          </div>

          <div className='flex flex-col mr-10'>
            <Link>
              <FontAwesomeIcon className='text-xl' icon={faCommentDots} />
              <label className='text-xs'>Messaggistica</label>
            </Link>
          </div>
          <div className='flex flex-col mr-10'>
            <Link>
              <FontAwesomeIcon className='text-xl' icon={faBell} />
              <label className='text-xs'>Notifiche</label>
            </Link>
          </div>
          <div className='flex flex-col mr-10'>
            <img className='w-5 rounded-full' src='' alt='Profile image' />
            <label className='text-xs'>Tu</label>
          </div>

          <div className='flex flex-col border-l border-gray-400 h-full mr-8 pl-5'>
            <FontAwesomeIcon className='text-xl' icon={faGrip} />
            <label className='text-xs'>Per le aziende</label>
          </div>
          <div className='flex flex-col'>
            <Link>
              <FontAwesomeIcon className='text-xl' icon={faBullhorn} />
              <label className='text-xs'>Offerta di lavoro gratuita</label>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
