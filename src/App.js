import './App.css';
import BankDetails from './components/bankDetails/BankDetails';
import BookingDesk from './components/bookingDesk/BookingDesk';
import GoldRate from './components/goldRates/GoldRate';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
   <>
   <Router>
      <Footer/>
      <Switch>
        <Route exact path='/'> <GoldRate/></Route>
        <Route path='/bank-details'> <BankDetails/></Route>
        <Route path='/booking-desk'> <BookingDesk/></Route>
      </Switch>

   </Router>

   </>
  );
}

export default App;
