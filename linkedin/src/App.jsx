import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/common/header/Header';

function App() {
  // token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ3NWE3Zjc2YTY0YjAwMTllZjFhZDQiLCJpYXQiOjE3MDg2MTIyMjMsImV4cCI6MTcwOTgyMTgyM30.PO5wrMuUFkxCnf42llGj-y6i4rZwTeeht1nzaqZ_CcM

  // SOLID
  // <FontAwesomeIcon icon={faPencil} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faUserPlus} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faEye} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faChartSimple} style={{color: "#787878",}}  />
  // <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#787878",}}  />
  // <FontAwesomeIcon icon={faPlus} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faGem} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faCheck} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faArrowRight} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faArrowLeft} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faXmark} style={{color: "#787878",}}  />
  // <FontAwesomeIcon icon={faEllipsis} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faBookmark} style={{color: "#787878",}}   />
  // <FontAwesomeIcon icon={faHashtag} style={{color: "#787878",}}   />
  // <FontAwesomeIcon icon={faUsers} style={{color: "#787878",}}   />
  // <FontAwesomeIcon icon={faRetweet} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faPaperPlane} style={{color: "#787878",}}  />
  // <FontAwesomeIcon icon={faCaretDown} style={{color: "#787878",}}  />
  // REGULAR
  // <FontAwesomeIcon icon={faThumbsUp} style={{color: "#787878",}} />
  // <FontAwesomeIcon icon={faCommentDots} style={{color: "#787878",}}  />
  // <FontAwesomeIcon icon={faImage} style={{color: "#787878",}} />
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
