import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>

          <Route path='/' element={<></>}>
          
            <Route index element={<Projeto/>}/>
            <Route path='/sobre' element={<Sobre/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/*' element={<h1>404 Page Not Found</h1>}/>
            
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
