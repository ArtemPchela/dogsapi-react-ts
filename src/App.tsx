import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dogs from './pages/Dogs.tsx';
import Dog from './pages/Dog.tsx';
import SubDog from './pages/SubDog.tsx';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Dogs />} />
            <Route path={'/dogs/:dogId'} element={<Dog />} />
            <Route path={'/dogs/:dogId/:subDogId'} element={<SubDog />} />
        </Routes>
    );
}

export default App;
