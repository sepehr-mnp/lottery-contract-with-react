import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {
  
const [manager, setManager] = useState('');

useEffect(() => {
  const init = async () => {
    const manager = await lottery.methods.manager().call();
    setManager(manager);
  console.log(manager);  
  }
  init();
}, []);
    if(window.ethereum){
    // Do something 
    console.log("kooone laghe pooya");
    window.ethereum.request({method:'eth_requestAccounts'})
    .then(res=>{
            // Return the address of the wallet
            // console.log(res) 
    })
  }else{
    alert("install metamask extension!!")
  }
  //web3.eth.getAccounts().then(console.log);
  return (
    <div>
            
      
              <p>sepepeprrprp{manager}ss</p>
      
      
    </div>
  );
}

export default App;
