import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import QuestionModal from '../../components/QuestionsModal';
import Dashboard from './Dashboard';
import HomePage from './HomePage';
import AuthorizationModal from '../../components/AuthorizationModal';


function App() {
  const [ user, setUser ] = useState({})

  return (
    <main className="App">
   {/* IMPORTANT: all paths lowercas */}
   <Navbar />
   <AuthorizationModal />
        { user ?
        <>
        <Routes>
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/preference/questionaire" element={<QuestionModal />} />
        </Routes>
        </>
        :
        <HomePage />
        // <ListOfUnits> will also be able to be viuewed dif not a user
      }
    </main>
  );
}

export default App;
