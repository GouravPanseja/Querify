import './styles/App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Signup from "./pages/Signup";
import Otp from "./pages/Otp";
import { Toaster } from 'react-hot-toast';
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import TemplateBank from "./pages/TemplateBank";
import Preview from "./pages/Preview";
import ShareForm from "./pages/ShareForm";
import Form from "./pages/Form";
import FormGif from './pages/FormGif';
import FormResults from './pages/FormResults';
import Bot from "./components/Bot"
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import useResponseStore from './stores/ResponsiveStore';

function App() {

  // const setScreenSize =  useResponseStore( (state)=> state.setScreenSize);

  // const handelScroll = ()=>{
  //   setScreenSize(window.scrollY);
  //   console.log(window.scrollY);
  // }
  // useEffect(()=>{
  //   console.log('yes');
  //   window.addEventListener('scroll', handelScroll);

  // },[])
  return (
    <div>

      <Bot/>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
      />
    
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/otpVerification" element={<Otp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/templateBank" element={<TemplateBank/>}/>
        <Route path="/template/:id" element={<Preview/>}/>
        <Route path="/shareForm" element={<ShareForm/>}/>
        <Route path="/form/:id" element={<Form/>}/>
        <Route path="/submissionSucess" element={<FormGif/>} />
        <Route path="/formResults/:id" element={<FormResults/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
   
    
    
    </div>
  );
}

export default App;
