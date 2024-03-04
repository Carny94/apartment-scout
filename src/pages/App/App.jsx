import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import Vacancies from './Vacancies';
import Navbar from '../../components/Navbar';
import AuthorizationModal from '../../components/AuthorizationModal';
import QuestionModal from '../../components/QuestionsModal';
import Cart from '../../components/Cart';

function App() {
  const [ user, setUser ] = useState(null)

  return (
    <main className="App">
   {/* IMPORTANT: all paths lowercas */}

   <Navbar />
        { user ?
        <>
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/preference/questionaire" element={<QuestionModal />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/availabilities" element={<Vacancies />} />
        </Routes>
        </>
        :
        <Dashboard />
        // <ListOfUnits> will also be able to be viuewed dif not a user
      }
    </main>
  );
}

export default App;
