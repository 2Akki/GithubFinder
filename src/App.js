import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Alert from './components/layout/Alert';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { AlertProvider } from './context/alert/AlertContext';
import { GithubProvider } from './context/github/GithubContext';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';

function App() {
  return (
   <GithubProvider>
     <AlertProvider>
      <Router>
    <div className="flex flex-col justify-between h-screen">
      <Navbar/>


      <main className="container mx-auto px-3 pb-12">
        <Alert/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/notfound" element={<NotFound/>}></Route>
          <Route path="/user/:login" element={<User/>}></Route>

          <Route path="/*" element={<NotFound/>}></Route>
          

        </Routes></main>
        

      <Footer/>

    </div>
      
  
    </Router>
    </AlertProvider>
   </GithubProvider>
  );
}

export default App;
