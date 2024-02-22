import { useEffect } from 'react';
import { setUser } from '../reducers/userReducer';
import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      <img src={userData.image} alt='' />
      <h1>
        {userData.name} {userData.surname}
      </h1>
      <p>{userData.bio}</p>
      <p>{userData.title}</p>
    </div>
  );
};

export default ProfileSection;
