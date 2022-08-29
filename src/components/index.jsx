var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>Serenity Token | CREATIVE DEFI TALENT AGENCY</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="We live to turn great ideas, Key Features, What We Do, Our Portfolio" />
        <meta name="description" content="Serenity Token combines knowledge with expertise, design with creativity, and meaning with magic in order to connect talented artists with the crypto market as well as with our unique community of investors." />
        <meta name="page_type" content="np-template-header-footer-from-plugin" />
        <link rel="icon" href="./Content/images/SerenityLogo_32.png" size="32x32" />
        <link rel="icon" href="./Content/images/SerenityLogo_128.png" size="128x128" />
        {/*jQuery 3.6.0*/}
        {/*Google Fonts*/}
        <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Bai+Jamjuree:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i" />
        <link id="u-page-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i" />
        {/*Bootstrap 5.2.0*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />
        <link rel="stylesheet" href="Content/css/serenity_mint.css" media="screen" />
        <nav id="serenity-navbar" className="navbar navbar-expand-sm fixed-top navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://serenitytoken.art/">
              <img src="Content/images/SerenityLogo_r.png" style={{height: '70px'}} />
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
});
