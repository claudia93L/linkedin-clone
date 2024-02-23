import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ ...props }) => {
  function checkTitle(title) {
    let iconType;

    if (title.toLowerCase() === 'disponibile a lavorare') {
      iconType = faPencil;
    } else {
      iconType = faXmark;
    }

    return iconType;
  }

  return (
    <div
      className={`text-sm cursor-pointer border border-gray-300 rounded px-3 pt-3 w-80 pb-2 ${props.color}`}
    >
      <span className='flex flex-row justify-between items-center'>
        <p className='font-semibold'>{props.title}</p>
        <div className='hover:bg-gray-300 py-1 px-2 rounded-full text-gray-500'>
          <FontAwesomeIcon icon={checkTitle(props.title)} />
        </div>
      </span>

      <p>{props.ruoli}</p>
      <p className='font-semibold text-blue-600 hover:underline'>
        {props.linkText}
      </p>
    </div>
  );
};

export default Card;
