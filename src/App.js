import logo from './logo.svg';
import './App.css';
import './styles/serenity_mint.css';
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
// emailjs includes
import emailjs from '@emailjs/browser';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_a2uwcao";
const TEMPLATE_ID = "template_gubttuf";
const USER_ID = "Da1Xnpg54YA6ACL31";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    GWEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.GWEI_COST * 1000000000;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostGwei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostGwei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostGwei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };

    return (
      <div>
        <title>Serenity Token | CREATIVE DEFI TALENT AGENCY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="We live to turn great ideas, Key Features, What We Do, Our Portfolio" />
        <meta name="description" content="Serenity Token combines knowledge with expertise, design with creativity, and meaning with magic in order to connect talented artists with the crypto market as well as with our unique community of investors." />
        <meta name="page_type" content="np-template-header-footer-from-plugin" />
        <link rel="icon" href="SerenityLogo_32.png" size="32x32" />
        <link rel="icon" href="SerenityLogo_128.png" size="128x128" />
        {/*jQuery 3.6.0*/}
        {/*Google Fonts*/}
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Bai+Jamjuree:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i" />
        <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i" />
        {/*Bootstrap 5.2.0*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <nav id="serenity-navbar" className="navbar navbar-expand-sm fixed-top navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://serenitytoken.art/">
              <img src="SerenityLogo_r.png" style={{height: '70px'}} />
              <span className="heading-text">SERENITY</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse justify-content-right" id="navbarMenu">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#serenityBody">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/Content/files/SerenityWhitepaper.pdf" target="_blank">Whitepaper</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#tokenomics">Tokenomics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#roadmap">Roadmap</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#charity">Charity</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/nft.html">NFTs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://serenitytoken.art/#team">Team</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="collection">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 character-pos">
                <div className="row">
                  <div className="col-12" style={{marginLeft: '-25px'}}>
                    <img className="character" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-12 order-sm-3" style={{display: 'table'}}>
                <div className="row" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                  <div className="col-12 mint-info">
                    {/*this is where the mint info will appear*/}
                    <div className="row">
                      <div className="col-12 title" />
                      <div className="col-12">
                        Make sure you are connected to the right network (Ethereum Mainnet) and the correct address.
                        <br />
                        Please note: Once you make the purchase, you cannot undo this action.
                        <br /><br /><br />
                        We have set the gas limit to 180000 for the contract to successfully mint your NFT.
                        <br />
                        We recommend that you don't lower the gas limit.
                      </div>
                      <div className="col-12" style={{marginTop: '25px'}}>
                        1 <span className="collection-name" /> costs <span className="collection-cost" /> ETH + Gas Fees
                      </div>
                      <div className="col-12" style={{marginTop: '25px'}}>
                        Total <span className="collection-name" /> Minted
                      </div>
                    </div>
                    {/* this is where the mint dApp should go */}
                    <div className="row">
                      <div className="col-3">
                        <span className="total-minted">???</span> / <span className="collection-total" />
                      </div>
                      <div className="col-9">
                        <div className="border">
                          {/* progress bar */}
                          <div className="mint-progress-bar">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop: '15px'}}>
                      <div className="col-12 col-md-6 mint-offset">
                        <div className="row">
                          <div className="col-2"><div className="round-button">-</div></div>
                          <div className="col-8"><input type="text" id="mint-amount" /></div>
                          <div className="col-2"><div className="round-button">+</div></div>
                        </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop: '15px'}}>
                      <div className="col-12 col-md-6 mint-offset">
                        <button type="button" name="mint" id="mint-button">Mint</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
