import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Button from './common/Button';
import { useSelector } from 'react-redux';

const LanguageSection = () => {
  const profile = useSelector((state) => state.user.user);

  return (
    <div className='my-3 mx-4'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between cursor-pointer items-center text-lg'>
          <h1 className='font-semibold'>Lingua del profilo</h1>
          <FontAwesomeIcon className='text-gray-500' icon={faPencil} />
        </div>
        <div className='flex flex-row items-center justify-center text-center gap-3 my-4'>
          <Button className='rounded-full py-1 px-3 font-semibold bg-green-700 text-white hover:bg-green-900 cursor-pointer w-full'>
            English
          </Button>
          <Button className='rounded-full py-1 px-3 font-semibold cursor-pointer border border-gray-400 hover:bg-gray-100 w-full'>
            Italian
          </Button>
        </div>
        <div className='border-t border-gray-300 cursor-pointer'>
          <div className='flex flex-row justify-between cursor-pointer items-center text-lg'>
            <h1 className='font-semibold mt-3'>Public profile & URL</h1>
            <FontAwesomeIcon className='text-gray-500' icon={faPencil} />
          </div>
          <p className='text-sm font-light text-gray-500'>
            www.linkedin.com/in/{profile.name.toLowerCase()}-
            {profile.surname.toLowerCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSection;
