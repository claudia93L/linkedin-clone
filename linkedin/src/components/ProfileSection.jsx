import { useEffect } from 'react';
import { setUser } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Button from './common/Button';
import Card from './common/Card';

const ProfileSection = () => {
  const profileURL = 'http://striveschool-api.herokuapp.com/api/profile/me';
  const apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM';

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.user);

  const fetchUserData = async () => {
    try {
      let res = await fetch(profileURL, {
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

  return (
    <>
      <div className='relative'>
        <div className='px-2 py-1 bg-white rounded-full absolute right-0 m-5 cursor-pointer text-blue-600 hover:text-black'>
          <FontAwesomeIcon icon={faPencil} />
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
        <p className='text-blue-600 font-semibold text-sm'>300 collegamenti</p>
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
