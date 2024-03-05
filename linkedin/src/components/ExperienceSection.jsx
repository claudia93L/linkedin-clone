import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setExperiences } from '../reducers/userReducer';
import { useEffect, useRef } from 'react';
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

  const jobTitle = useRef();
  const startDate = useRef();
  const endDate = useRef();
  const description = useRef();
  const company = useRef();
  const area = useRef();

  const fetchUserExperiences = async () => {
    try {
      let res = await fetch(
        profileBaseUrl + '/' + userData._id + '/experiences',
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );

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
    if (userData && userData._id) {
      fetchUserExperiences();
    }
  }, [userData]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addJobExperience = async (newJobData) => {
    try {
      let res = await fetch(
        profileBaseUrl + '/' + userData._id + '/experiences',
        {
          method: 'POST',
          headers: {
            Authorization: apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newJobData),
        }
      );
      if (res.ok) {
        let data = await res.json();
        dispatch(setExperiences([...userExperiences, data]));
        closeModal();
      } else {
        console.error('Errore nella richiesta API:', res.status);
      }
    } catch (err) {
      console.error('Si è verificato un errore:', err);
    }
  };

  function addExperience() {
    const newJobData = {
      role: jobTitle.current.value,
      startDate: startDate.current.value,
      endDate: endDate.current.value !== '' ? endDate.current.value : null,
      description: description.current.value,
      company: company.current.value,
      area: area.current.value,
    };

    addJobExperience(newJobData);
  }

  return (
    <div className='my-3 mx-4'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between cursor-pointer items-center text-lg mb-5'>
          <h1 className='font-semibold'>Esperienza</h1>
          <span className='text-xl flex gap-3'>
            <div
              className='hover:bg-gray-200 py-2 px-3 rounded-full text-gray-500'
              onClick={openModal}
            >
              <FontAwesomeIcon className='text-gray-600' icon={faPlus} />
            </div>
            <div className='hover:bg-gray-200 py-2 px-3 rounded-full text-gray-600'>
              <FontAwesomeIcon className='text-gray-600' icon={faPencil} />
            </div>
          </span>
        </div>
        {userExperiences.map((exp) => (
          <div
            className='flex flex-row mb-5 text-gray-600 border-b border-gray-300'
            key={exp._id}
          >
            <div className='mr-3'>
              <img
                className='w-14'
                src='../../src/assets/logo-jobs.png'
                alt={`${exp.company} logo`}
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold text-md'>{exp.role}</h3>
              <h5>{exp.company}</h5>
              <h6 className='font-thin text-sm flex items-center mt-1'>
                {exp.startDate} - {exp.endDate}
              </h6>
              <h6 className='font-thin text-sm flex items-center mt-1'>
                {exp.area}
              </h6>
              <p className='text-sm my-3'>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal
          addExperience={addExperience}
          open={open}
          onClose={() => setIsModalOpen(false)}
          title='Aggiungi Esperienza'
        >
          <p className='mb-5 text-xs text-gray-600'>
            * indica che è obbligatorio
          </p>
          <form className='flex flex-col mx-auto w-full gap-4'>
            <span className='flex flex-col gap-1'>
              <label htmlFor='jobTitle'>Qualifica*</label>
              <input
                ref={jobTitle}
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
                ref={company}
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='text'
                name='company'
                id='company'
              />
            </span>
            <span className='flex flex-col gap-1'>
              <label htmlFor='area'>Località*</label>
              <input
                required
                ref={area}
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
                ref={startDate}
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
                ref={endDate}
                className='rounded bg-slate-100 h-9 text-sm px-2 py-1'
                type='date'
                name='endDate'
                id='endDate'
              />
            </span>
            <span className='flex flex-col'>
              <label htmlFor='description'>Descrizione*</label>
              <textarea
                required
                ref={description}
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
