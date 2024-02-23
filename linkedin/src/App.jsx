import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  // token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM

  // SOLID
  // <FontAwesomeIcon icon={faPencil} />
  // <FontAwesomeIcon icon={faUserPlus} />
  // <FontAwesomeIcon icon={faEye} />
  // <FontAwesomeIcon icon={faChartSimple}  />
  // <FontAwesomeIcon icon={faMagnifyingGlass}   />
  // <FontAwesomeIcon icon={faPlus} />
  // <FontAwesomeIcon icon={faGem}  />
  // <FontAwesomeIcon icon={faCheck}  />
  // <FontAwesomeIcon icon={faArrowRight}  />
  // <FontAwesomeIcon icon={faArrowLeft}  />
  // <FontAwesomeIcon icon={faXmark}  />
  // <FontAwesomeIcon icon={faEllipsis}  />
  // <FontAwesomeIcon icon={faBookmark}   />
  // <FontAwesomeIcon icon={faHashtag}   />
  // <FontAwesomeIcon icon={faUsers}    />
  // <FontAwesomeIcon icon={faRetweet} />
  // <FontAwesomeIcon icon={faPaperPlane}  />
  // <FontAwesomeIcon icon={faCaretDown}  />
  // REGULAR
  // <FontAwesomeIcon icon={faThumbsUp} />
  // <FontAwesomeIcon icon={faCommentDots}  />
  // <FontAwesomeIcon icon={faImage}  />
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <div className='px-32 bg-stone-100 py-6 mt-12'>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/profile/:id' element={<Profile></Profile>}></Route>
          </Routes>
        </div>
      </Provider>
    </>
  );
}

export default App;
