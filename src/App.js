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
import alanBtn from '@alan-ai/alan-sdk-web';
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  useEffect(() => {

    alanBtn({
        key: '39a0ed8f84503f707c20590bc5921e5d2e956eca572e1d8b807a3e2338fdd0dc/stage',

        onCommand: ({command,page}) => {

          if (command === "navigateRequest"){

            page = page.toLowerCase();

            console.log(page);

            if(page === "template") page = "templateBank";
            if(page === "sign up") page = "signup";
            if( page !== 'home'){
              console.log("navigate request recieved")
              navigate(`/${page}`);
            }
            else{
              navigate('/');
            }
          }
          else if( command==="back"){
            console.log("fjksal;")
            navigate(-1);
          }
    }});
    
  }, []);



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
