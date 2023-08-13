import './App.css';
import BankDetails from './components/bankDetails/BankDetails';
import BookingDesk from './components/bookingDesk/BookingDesk';
import GoldRate from './components/goldRates/GoldRate';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Lottie from 'lottie-react';
import { useState, useEffect } from 'react';
import animationData from './lottie.json'


function App() {

  const [isLottie, setIsLottie]= useState(true);

  useEffect(() => {
    setTimeout(()=>{
setIsLottie(false)
    },2000)
  }, [])

 function ishomePage(){
    if(window.location.pathname==='/')return true;
    return false;
  }

  function toShowLottie(){
    if(isLottie && ishomePage())return true;
    return false
  }
  

  return (
   <>
   {toShowLottie() && <Lottie animationData={animationData}/>}
   { !toShowLottie() &&
   <Router>
      <Header/>
      <Switch>
        <Route exact path='/'> <GoldRate/></Route>
        <Route path='/bank-details'> <BankDetails/></Route>
        <Route path='/booking-desk'> <BookingDesk/></Route>
      </Switch>
      <Footer/>
   </Router>
   }
   
   </>
  );
}

export default App;
