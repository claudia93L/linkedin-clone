import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from './common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { setUsers } from '../reducers/usersReducer';

const ConnectionsSection = () => {
  const dispatch = useDispatch();
  const profilesURL = 'http://striveschool-api.herokuapp.com/api/profile/';
  const apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM';
  const [lessUsers, setLessUsers] = useState([]);

  const users = useSelector((state) => state.users.users);

  const fetchUsers = async () => {
    try {
      let res = await fetch(profilesURL, {
        headers: {
          Authorization: apiKey,
        },
      });

      if (res.ok) {
        let data = await res.json();
        dispatch(setUsers(data));
      } else {
        console.error('Errore nella richiesta API:', res.status);
      }
    } catch (err) {
      console.error('Si è verificato un errore:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setLessUsers(reduceUsers(users));
  }, [users]);

  function reduceUsers(users) {
    let lessUsers = users;
    if (users.length > 5) {
      lessUsers = users.slice(0, 5);
    }

    return lessUsers;
  }

  function showAll() {
    setLessUsers(users);
    return lessUsers;
  }

  return (
    <div className='my-3 mx-4'>
      <h2 className='text-md font-semibold'>Persone che potresti conoscere</h2>
      <p className='font-light text-sm text-gray-500'>Dal tuo settore</p>
      <div className='mt-3'>
        {lessUsers.map((user, index) => {
          return (
            <div
              key={user.id}
              className={`flex flex-row gap-3 mb-5 ${
                index !== lessUsers.length - 1
                  ? 'border-b border-gray-300'
                  : null
              } `}
            >
              <div>
                <img
                  src={user.image}
                  alt='User profile image'
                  className='w-10 rounded-full'
                />
              </div>
              <div>
                <h3 className='font-semibold'>
                  {user.name} {user.surname}
                </h3>
                <p className='mt-1 text-sm'>{user.title}</p>
                <Button className='py-1 px-2 font-semibold rounded-full text-gray-500 border border-black hover:bg-gray-200 cursor-pointer w-32 text-center mb-5 mt-2'>
                  <FontAwesomeIcon className='mr-2' icon={faUserPlus} />
                  Collegati
                </Button>
              </div>
            </div>
          );
        })}
        <div
          className=' pt-3 font-semibold cursor-pointer hover:underline text-center border-t border-gray-300'
          onClick={showAll}
        >
          <p>Mostra tutto</p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionsSection;
