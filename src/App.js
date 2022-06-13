import './App.css';
import {Routes, Route} from 'react-router-dom';
import AllMeetupspage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favoritespage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
  <Layout>
      <Routes>
        <Route path='/' element={<AllMeetupspage/>} />

        <Route path='/new-meetup' element={<NewMeetupPage/>} />

        <Route path='/favorites' element={<Favoritespage/>} />
      </Routes>
    </Layout>
    
  );
}

export default App;
