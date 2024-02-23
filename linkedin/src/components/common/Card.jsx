const Card = ({ ...props }) => {
  return (
    <div
      className={`text-sm cursor-pointer border border-gray-300 rounded p-3 ${props.color}`}
    >
      <p className='font-semibold'>{props.title}</p>

      <p>{props.ruoli}</p>
      <p className='font-semibold text-blue-600 hover:underline'>
        {props.linkText}
      </p>
    </div>
  );
};

export default Card;
