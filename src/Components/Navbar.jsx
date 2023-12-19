import '../CSS/Navbar.css';
import { useState } from 'react';
import LOGO from '../Helpers/Images/CC_1.png'


const Navbar = () => {

  const [Account, setAccount] = useState(" ")

  const ConnectMetamask = async () => {

    const { ethereum } = window;
    const acc = document.getElementById('munde');

    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(account[0]);

    ethereum.on('accountsChanged', async (accountnew) => {
      setAccount(accountnew[0]);
    })

    acc.innerText = "Connected";

  }


  return (

    <nav className="navbar">
      <div className="logo">
        <img src={LOGO} alt="Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        {Account && <li>{Account}</li>}

      </ul>


      {/* <button className="connect-button but2" id='munde'>Connect</button> */}

      <button className="pushable">
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front" id='munde'>
          Star Repo 🤩
        </span>
      </button>


    </nav>
  );

};

export default Navbar;