import logo from './logo.svg';
import './App.css';
import Balance from "./bankComponent/Balance";
import Deposit from "./bankComponent/Deposit";
import withdraw from "./bankComponent/Withdraw";
import {useState} from "react";
import Withdraw from './bankComponent/Withdraw';
import Rich from './bankComponent/Rich';
import Broke from './bankComponent/broke';


function App() {

  const[balance,setBalance]=useState(0);
  // setBalance(1000) 
  // setBalance(balance+1000)

  return (
    <div className='containerFluid'>

        
        {/* <button className='btn btn-primary my-4' onClick={()=>{setBalance(balance+10000)}}>Deposit</button>
        <button className='btn btn-primary my-4' onClick={()=>{setBalance(balance-10000)}}>Withdraw</button> */}


       
        <h1>Bannk App</h1>

          {
            balance >1000 ?<Rich/>:<Broke/>
          }

        <Balance bal={balance}/>
        <Withdraw bal={balance}/>
        <Deposit bal={balance}/>
    </div>
  );
}





export default App;
