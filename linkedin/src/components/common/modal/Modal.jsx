import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const Modal = ({ open, onClose, children, title }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed z-10 inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-gray-400/20' : 'invisble'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow transition-all w-2/4 ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <div className='flex flex-row justify-between items-center border-b border-gray-400 p-2'>
          <h1>{title}</h1>
          <button
            className=' p-1 rounded-lg text-gray-400 hover:bg.gray-50 hover: text-gray-600'
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>
        <div className='flex flex-col p-6'>{children}</div>
        <div className='flex flex-row justify-end border-t border-gray-400 px-6 py-3'>
          <Button className='bg-blue-600 py-1 px-4 text-white font-semibold rounded-full hover:bg-blue-800 cursor-pointer'>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
