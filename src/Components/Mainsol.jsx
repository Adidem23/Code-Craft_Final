import React, { useState } from 'react';
import '../CSS/Mainsol.css';
import LOGOGPT from '../Helpers/Images/Code.png'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios'
import abi from '../Input.json';
import bytecode from '../Input.json';
import { ethers } from 'ethers';

const Mainsol = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [userInputHistory, setUserInputHistory] = useState([]);
  const [ResData, setResData] = useState("");
  const [ShowHiddenDiv, setShowHiddenDiv] = useState(false);
  const [Contract, setContract] = useState("")
  const [Account, setAccount] = useState(" ")
  const [Deployed, setDeployed] = useState(false);
  const [ContractAddress, setContractAddress] = useState("")

  const handleSendMessage = async () => {

    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setUserInputHistory([...userInputHistory, newMessage]);
      setTimeout(() => {
        setMessages([...messages, { text: 'AI response', sender: 'ai' }]);
      }, 500);
      setNewMessage('');
    }

    const options = {
      method: 'POST',
      url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4b276ea7e4mshb795a824dda31aap142856jsnf6ade5b9dd89',
        'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
      },
      data: {
        question: `${newMessage}`
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setResData(response.data.answer);
    } catch (error) {
      console.error(error);
    }
  };

  const ShowDivision = async () => {
    setShowHiddenDiv(true);
  }

  const GenABI = async () => {
    await axios.post("http://localhost:9000/genABI", { Filesol: Contract }, { withCredentials: true }).then((res) => {
      console.log(res.data);
      alert(res.data);
    }).catch(err => {
      alert(`${err} is Occured`);
    })
  }


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

  // const DeployContract = async () => {
  //   const providers = new ethers.BrowserProvider(window.ethereum);
  //   const signer = providers.getSigner();
  //   console.log(providers, (await signer).getAddress());
  //   const factory = new ethers.ContractFactory(abi.abi, bytecode.bytecode, signer);
  //   console.log(factory);
  //   const contract = await factory.deploy({gasLimit:'2000000'});
  //   setDeployed(true);
  //   const ContractAddressDeployed = await contract.getAddress();
  //   setContractAddress(ContractAddressDeployed);
  //   console.log("Here Is Deployed Contract Address" + await contract.getAddress());
  // }

  return (

    <>
      <div className="mainsol-container">
        <div className="sidebar">
          <div className="logo">
            <img src={LOGOGPT} alt="Logo" />

            <button className="pushable" style={{ marginLeft: "15px" }} onClick={ShowDivision}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Magic Button 🪄
              </span>
            </button>
          </div>
          <div className="user-input-history">
            <strong>Your Chats : </strong>
            <ul>
              {userInputHistory.map((input, index) => (
                <li key={index} style={{ marginTop: '20px', color: "white", fontWeight: "bolder", background: "slateblue", alignItems: "center", height: 'fit-content', alignContent: 'center' }}>{input}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mainsol-main">

          <div className="mainsol-messages">
            <p>
              <SyntaxHighlighter language="solidity" style={dracula}>
                {ResData}
              </SyntaxHighlighter>
            </p>
          </div>

          <div className="input-area">

            <input placeholder="Search Something" className="input" type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />

            <button className="pushable" onClick={handleSendMessage}>
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front">
                Send 🦞
              </span>
            </button>

          </div>
        </div>
      </div>

      {/* The Hidden Div Starts */}

      {ShowHiddenDiv && <> <div className='UnderCoverDiv'>

        <p>Enter Contract Here</p>

        <textarea style={{ width: "600px", height: "200px", resize: "none", marginTop: "30px" }} placeholder='Enter Your contract Here' onChange={(e) => { setContract(e.target.value) }} ></textarea>

        <br />
        <br />

        <button className="pushable" onClick={GenABI}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            Generate ABI 😃
          </span>
        </button>

        {/* <button className="pushable" onClick={DeployContract} style={{ marginLeft: "30px" }}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front">
            Deploy 😈
          </span>
        </button> */}

        <button className="pushable" onClick={ConnectMetamask} style={{ marginLeft: "30px" }}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front" id='munde'>
            Connect Metamask 🦊
          </span>
        </button>

{Deployed && <p style={{color:'white'}}>{ContractAddress} is Contract Address</p>}

      </div></>}

      {/* The Hidden Div Ends */}

    </>

  );
};

export default Mainsol;