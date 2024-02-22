import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';

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
    <div className='px-32'>
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
