import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUserGroup,
  faBriefcase,
  faCommentDots,
  faBell,
  faGrip,
  faBullhorn,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-evenly text-gray-500 items-center'>
      <Link>
        <div className='flex flex-col mr-10 ml-10 text-center hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faHouse} />
          <p className='text-xs'>Home</p>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col mr-10 text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faUserGroup} />
          <p className='text-xs'>Rete</p>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col mr-10 text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faBriefcase} />
          <p className='text-xs'>Lavoro</p>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col mr-10 text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faCommentDots} />
          <p className='text-xs'>Messaggistica</p>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col mr-10 text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faBell} />
          <p className='text-xs'>Notifiche</p>
        </div>
      </Link>
      <div className='flex flex-col mr-10 text-center  hover:text-gray-900 cursor-pointer'>
        <img className='w-5 rounded-full text-sm' src='' alt='Profile image' />
        <p className='text-xs'>
          Tu <FontAwesomeIcon icon={faCaretDown} />
        </p>
      </div>
      <Link>
        <div className='flex flex-col border-l border-gray-400 h-full mr-8 pl-5 text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faGrip} />
          <p className='text-xs'>
            Per le aziende <FontAwesomeIcon icon={faCaretDown} />
          </p>
        </div>
      </Link>
      <Link>
        <div className='flex flex-col text-center  hover:text-gray-900'>
          <FontAwesomeIcon className='text-xl mb-1' icon={faBullhorn} />
          <p className='text-xs'>Offerta di lavoro gratuita</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
