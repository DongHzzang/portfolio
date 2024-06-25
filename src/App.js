import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>          
          <Route path='/' element={<HomeView />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
