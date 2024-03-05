import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setExperiences } from '../reducers/userReducer';
import { useEffect } from 'react';
import Modal from './common/modal/Modal';
import { useState } from 'react';

const ExperienceSection = () => {
  const profileBaseUrl = 'http://striveschool-api.herokuapp.com/api/profile';
  const apiKey =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM';

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.user);
  const userExperiences = useSelector((state) => state.user.experiences);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUserExperiences = async () => {
    try {
      let res = await fetch(profileBaseUrl + userData._id + '/experiences', {
        headers: {
          Authorization: apiKey,
        },
      });

      if (res.ok) {
        let data = await res.json();
        dispatch(setExperiences(data));
      } else {
        console.error('Errore nella richiesta API: ', res.status);
      }
    } catch (err) {
      console.error('Si è verificato un errore:', err);
    }
  };

  useEffect(() => {
    fetchUserExperiences();
  }, []);

  const openModal = () => {
    console.log('Modal opened');
    setIsModalOpen(true);
  };

  return (
    <div className='my-3 mx-4'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between cursor-pointer items-center text-lg'>
          <h1 className='font-semibold'>Esperienza</h1>
          <span className='text-xl flex gap-3'>
            <div
              className='hover:bg-gray-200 py-2 px-3 rounded-full text-gray-500'
              onClick={openModal}
            >
              <FontAwesomeIcon className='text-gray-500' icon={faPlus} />
            </div>
            <div className='hover:bg-gray-200 py-2 px-3 rounded-full text-gray-500'>
              <FontAwesomeIcon className='text-gray-500' icon={faPencil} />
            </div>
          </span>
        </div>
        <div className='flex flex-row gap-2'>
          <div>
            <img
              className='w-20'
              src={userExperiences.image}
              alt={`${userExperiences.company} logo`}
            />
          </div>
          <div className='flex flex-col'>
            <h3 className='font-semibold text-md'>{userExperiences.role}</h3>
            <h5>{userExperiences.company}</h5>
            <h6 className='font-thin text-sm flex items-center mt-1'>
              {userExperiences.startDate} - {userExperiences.endDate}
            </h6>
            <h6 className='font-thin text-sm flex items-center mt-1'>
              {userExperiences.area}
            </h6>
            <p className='text-sm my-3'>{userExperiences.description}</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          open={open}
          onClose={() => setIsModalOpen(false)}
          title='Aggiungi Esperienza'
        >
          <p className='mb-5 text-xs text-gray-500'>
            * indica che è obbligatorio
          </p>
          <form className='flex flex-col mx-auto w-full gap-4'>
            <span className='flex flex-col gap-1'>
              <label htmlFor='jobTitle'>Qualifica*</label>
              <input
                required
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='text'
                name='jobTitle'
                id='jobTitle'
              />
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor='company'>Nome azienda*</label>
              <input
                required
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='text'
                name='company'
                id='company'
              />
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor='area'>Località</label>
              <input
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='text'
                name='area'
                id='area'
              />
            </span>
            <span className='flex flex-row gap-2'>
              <input type='checkbox' name='currentJob' id='currentJob' />
              <label htmlFor='currentJob'>
                Attualmente ricopro questo ruolo
              </label>
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor='startDate'>Data di inizio*</label>
              <input
                required
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='date'
                name='startDate'
                id='startDate'
              />
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor='endDate'>Data di fine</label>
              <input
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='date'
                name='endDate'
                id='endDate'
              />
            </span>
            <span className='flex flex-col'>
              <label htmlFor='description'>Descrizione</label>
              <textarea
                name='description'
                id='description'
                cols='30'
                rows='10'
                className='resize-none rounded bg-slate-100 h-20 text-sm px-2 py-1'
              ></textarea>
            </span>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ExperienceSection;
