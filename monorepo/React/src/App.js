import React, { useState } from 'react';
import { Routes ,  Route  } from 'react-router-dom'
import Header from './components/Header/Header';
import SelectPage from './components/Main/SelectPage';
import SinglePage from './pages/SinglePage';
import Footer from './components/Footer/Footer';
function App() {
  const [steps, setSteps] = useState('1/2');

  const updateSteps = (newSteps) => {
    setSteps(newSteps);
  };
  return (
    <div>
      <Header steps={steps}/>
      <Routes>
        <Route path='/' exact element={<SelectPage updateSteps={updateSteps}/>}/>
        <Route path="/select/:id" element={<SinglePage updateSteps={updateSteps} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
