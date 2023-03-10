
import Form from './components/Form/form.jsx'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<>
      
        <Form />
       
        </>}>
      </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
