import { useEffect, useState, useRef } from 'react';
import { setUser } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from './common/Button';
import Card from './common/Card';

const ProfileSection = () => {
  const profileBaseUrl = 'http://striveschool-api.herokuapp.com/api/profile';
  const apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM';

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.user);
  const userConnections = useSelector((state) => state.user.connections);

  const [editMode, setEditMode] = useState(false);
  const firstName = useRef();
  const lastName = useRef();
  const location = useRef();
  const jobTitle = useRef();

  const fetchUserData = async () => {
    try {
      let res = await fetch(profileBaseUrl + '/me', {
        headers: {
          Authorization: apiKey,
        },
      });

      if (res.ok) {
        let data = await res.json();
        dispatch(setUser(data));
      } else {
        console.error('Errore nella richiesta API:', res.status);
      }
    } catch (err) {
      console.error('Si è verificato un errore:', err);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  function editProfile() {
    setEditMode(true);
  }

  const updateUserData = async (updatedUserData) => {
    try {
      let res = await fetch(profileBaseUrl, {
        method: 'PUT',
        headers: {
          Authorization: apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });
      if (res.ok) {
        let data = await res.json();
        dispatch(setUser(data));
      } else {
        console.error('Errore nella richiesta API:', res.status);
      }
    } catch (err) {
      console.error('Si è verificato un errore:', err);
    }
  };

  function saveEdits() {
    const updatedUserData = {
      name: firstName.current.value,
      surname: lastName.current.value,
      title: jobTitle.current.value,
      area: location.current.value,
    };

    updateUserData(updatedUserData);

    setEditMode(false);
  }

  return (
    <>
      <div className='relative'>
        <div
          className='px-2 py-1 bg-white rounded-full absolute right-0 m-5 cursor-pointer text-blue-600 hover:text-black'
          onClick={editMode ? saveEdits : editProfile}
        >
          <FontAwesomeIcon icon={editMode ? faCheck : faPencil} />
        </div>

        <img
          src='../../src/assets/banner.jpg'
          alt='Banner Linkedin profile'
          className='cursor-pointer'
        />
        <img
          src={userData.image}
          alt='Profile Image'
          className='rounded-full w-40 mx-5 absolute top-28 border-4 border-white cursor-pointer'
        />
      </div>

      <div className='mx-5 mt-16 mb-5'>
        {!editMode ? (
          <>
            <h1 className='text-2xl font-bold'>
              {userData.name} {userData.surname}
              <span className='font-thin text-sm mx-2'>(Lui)</span>
            </h1>
            <p>{userData.title}</p>
            <p className='font-thin text-sm flex items-center mt-1'>
              {userData.area}
              <span className='mx-1' style={{ fontSize: '3px' }}>
                &#9679;
              </span>
              <span className='text-blue-600 font-semibold'>
                Informazioni di contatto
              </span>
            </p>
          </>
        ) : (
          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <input
                className='text-2xl font-bold w-24 border-b border-gray-300'
                type='text'
                ref={firstName}
                defaultValue={userData.name}
              />
              <input
                className='text-2xl font-bold w-24 border-b border-gray-300'
                type='text'
                ref={lastName}
                defaultValue={userData.surname}
              />
            </div>
            <div>
              <input
                type='text'
                ref={jobTitle}
                defaultValue={userData.title}
                className='w-full'
              />
              <input
                className='font-thin text-sm flex items-center mt-1 w-full border-b border-gray-300'
                type='text'
                ref={location}
                defaultValue={userData.area}
              />
            </div>
          </div>
        )}

        <p className='text-blue-600 font-semibold text-sm'>
          {userConnections} collegamenti
        </p>
        <div className='flex flex-row gap-2 my-3'>
          <Button className='bg-blue-600 py-1 px-3 text-white font-semibold rounded-full hover:bg-blue-800 cursor-pointer'>
            Disponibile per
          </Button>
          <Button className='py-1 px-3 font-semibold rounded-full text-blue-600 border border-blue-600 hover:bg-blue-200 cursor-pointer'>
            Aggiungi sezione del profilo
          </Button>
          <Button className='py-1 px-3 font-semibold rounded-full text-gray-500 border border-black hover:bg-gray-200 cursor-pointer'>
            Altro
          </Button>
        </div>
        <div className='flex flex-row gap-2 mt-6'>
          <Card
            color='bg-blue-100'
            title='Disponibile a lavorare'
            ruoli='Junior Front End Developer'
            linkText='Mostra dettagli'
          ></Card>
          <Card
            title='Metti in risalto i servizi che offri...'
            ruoli='...così tu e la tua azienda potrete apparire nei risultati di ricerca.'
            linkText='Inizia'
          ></Card>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
