
import React, { Component } from 'react';
import Collapsibles from '../../components/Collapsibles';
import CZodiacLogo from 'assets/logo.png';
import Umbrella from 'assets/images/umbrella.png';
import Blanket from 'assets/images/blanket.png';
import CzfLogo from 'assets/images/czflogo.png';
import CzusdLogo from 'assets/images/czusd.png';
import CzfPump from 'assets/images/pump2.png';
import Partners from 'assets/images/circle.png';
import MotherChild from 'assets/images/mother-child.png';
import CzfLift from 'assets/images/grainlift.png';
import CzusdFactory from 'assets/images/factory.png';
import PfpXcrypto from 'assets/team/xcryptoturnip.png';
import PfpDave from 'assets/team/dave.png';
import PfpPlastic from 'assets/team/plastic.png';
import PfpSai from 'assets/team/sai.png';
import PfpT4c0 from 'assets/team/t4c0.png';
import PfpIcashy from 'assets/team/icashy.png';
import CZodiacLogoWide from 'assets/images/logo-wide-3x1.png';
import "./index.scss";
const CZUSD = "0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70";
const CZF = "0x7c1608C004F20c3520f70b924E2BfeF092dA0043";
const CZF_CZUSD_LP = "0x98b5f5e7ec32cda1f3e89936c9972f92296afe47";
const TWITTER = "https://twitter.com/zodiacs_c";
const TELEGRAM = "https://t.me/CZodiacofficial";
const CZUSD_AUTOFARM_STAKE = "https://autofarm.network/bsc/602/";
const CZUSD_ELLIPSIS_POOL = "https://ellipsis.finance/pool/0";
const CZODIAC_NFT = "0x6Bf5843b39EB6D5d7ee38c0b789CcdE42FE396b4";


class BackToTop extends Component {
    render() {
      return(
        <div class="has-text-right mr-3 mb-3 mt-3 is-size-7">
          <a href="#" class="button is-small is-outlined is-rounded">
            <span style={{padding:"0"}}>back to top</span>
            <span class="icon" style={{position:'relative',top:"-0.1em",left:"-0.15em"}}>
              <i class="fas fa-angles-up"></i>
            </span>
          </a>
        </div>
      )
    }
  }

  class Home extends Component {
    render() {
      return (<>
      <section id="home" class="hero is-fullheight has-background-gradient">
        <div class="hero-title">            
            <nav class="breadcrumb is-right pt-4 has-bullet-separator is-small mr-5 ml-5 mb-0" aria-label="breadcrumbs">
                <ul>
                    <li><a href="#fairtribe">FAIRTRIBE</a></li>
                    <li><a href="#czf">CZF</a></li>
                    <li ><a href="#czusd" >CZUSD</a></li>
                    <li ><a href="#nft" >NFT</a></li>
                    <li ><a href="#team" >TEAM</a></li>
                    <li ><a href="#partners" >PARTNERS</a></li>
                </ul>
            </nav>
            <div class="container has-text-right pr-5 ">
                <a class="button is-rounded m-1 is-small is-secondary" href="https://cz.cash" target="_blank">
                    <span class="icon">
                        <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                    </span>
                    <span style={{padding:"0"}}>cz.cash</span>
                </a>
                <a class="button is-rounded m-1 is-small is-secondary" href="https://cz.farm" target="_blank">
                    <span class="icon">
                        <i class="fa-solid fa-tractor" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                    </span>
                    <span style={{padding:"0"}}>cz.farm</span>
                </a>
                <a class="button is-rounded m-1 is-small is-secondary" href="https://app.czodiac.com" target="_blank">
                    <span class="icon">
                        <i class="fa-solid fa-box-archive" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                    </span>
                    <span style={{padding:"0"}}>v1 dapp</span>
                </a>
            </div>
            
            
        </div>
        <div class="hero-body">
          <div class="container has-text-centered " style={{maxWidth:"700px"}}>
            <figure class="image is-3by1">
                <img src={CZodiacLogoWide} />
            </figure>
            <p class="title is-size-5 is-cursive" >
              <br/>
              The Global Defi Investment Bank.
            </p>
            <p class="subtitle is-size-6">
            Yield from assets backing CZUSD burn CZF,<br/>with profits building a rising price floor.
            </p>
            <a class="mr-2 button is-rounded is-primary" href={"https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency="+CZF} target="_blank">
                <span class="icon">
                    <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                </span>
                <span style={{padding:"0"}}>Trade</span>
            </a>
            <a class="mr-2 button is-rounded is-primary" href={"https://dexscreener.com/bsc/"+CZF_CZUSD_LP} target="_blank">
                <span class="icon">
                    <i class="fa-solid fa-chart-line" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                </span>
                <span style={{padding:"0"}}>Chart</span>
            </a>
            <a class="button is-rounded is-primary" href={TELEGRAM} target="_blank">
                <span class="icon">
                    <i class="fa-brands fa-telegram" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                </span>
                <span style={{padding:"0"}}>Chat</span>
            </a>
          </div>
        </div>
        </section>
        <section id="about" class="hero is-fullheight has-background-grey-lighter">
            <div class="hero-body">
                <div class="container">
                    <p class="title is-size-4 is-cursive" >
                        Safety in the storm.
                    </p>
                    <ul>
                        <li class="mb-3">
                            <span class="title pt-5 is-size-5 mb-0">HARDENED:</span><br/>
                            Market dumps, fud campaigns, hacker exploits, Malicious bots. Our experience and technology protects against all threats.
                        </li>
                        <li class="mb-3">
                            <span class="title pt-5 is-size-5 mb-0">COMMUNITY: </span><br/>
                            Devs abandon their community at the first sign of trouble. Not us. Our battle hardened devs fight for you no matter what.
                        </li>
                        <li>
                            <span class="title pt-5 is-size-5 mb-0">STABILITY: </span><br/>
                            Weak projects rent liquidity from VC that disappears. Our treasury invests our assets to earn yield burning CZF for a rising price floor.
                        </li>
                    </ul>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
                <figure class="image">
                    <img src={Umbrella} style={{marginLeft:"auto",marginRight:"auto"}} />
                </figure>
            </div>
        </section>
        <section id="fairtribe" class="hero is-fullheight has-background-white-ter has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <p class="title is-size-3 mb-2 is-cursive">
                        Fair Tribe.
                    </p>
                    <p>FairTribe by CZodiac specializes in using CZUSD to create 100% fair launches.</p>
                    <ul class="has-text-left mt-3 pl-4" style={{maxWidth:"250px",marginLeft:"auto",marginRight:"auto"}}>
                        <li>
                            <span class="icon"><i class="fa-solid fa-building-columns mr-1"></i></span>
                            Full Liquidity Funding
                        </li>
                        <li>
                            <span class="icon"><i class="fa-solid fa-file-invoice-dollar mr-1"></i></span>
                            Minimal Cost
                        </li>
                        <li>
                            <span class="icon"><i class="fa-solid fa-gears mr-1"></i></span>                            
                            Advanced Flexible Tokenomics
                        </li>
                        <li>
                            <span class="icon"><i class="fa-solid fa-people-arrows-left-right mr-"></i></span>                            
                            Community Growth
                        </li>
                    </ul>
                    <p class="mt-3">
                        <b>To recommend a launch:</b><br/>
                        <a class="is-underlined" href="mailto:team@czodiac.com">team@czodiac.com</a> or <a class="is-underlined" href={TELEGRAM} target="_blank">Telegram</a> </p>
                    <figure class="image">
                        <img src={Blanket} style={{marginLeft:"auto",marginRight:"auto"}} />
                    </figure>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
            </div>
        </section>
        <section id="czf" class="hero is-fullheight has-text-left">
            <div class="hero-body">
                <div class="container">
                    <p class="title is-size-5" >
                        <figure class="image is-128x128 is-rounded is-pulled-left mr-3">
                            <img src={CzfLogo} />
                        </figure>
                        <br/>
                        Safe Yield. <br/> Rising Floor. <br/> <span class="is-cursive is-size-4">Czfarm.</span>
                    </p>
                    <p class="pt-4">
                        <a class="mr-2 button is-rounded is-primary" href={"https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency="+CZF} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                            </span>
                            <span style={{padding:"0"}}>Trade</span>
                        </a>
                        <a class="mr-2 button is-rounded is-primary" href="https://cz.farm" target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-circle-dollar-to-slot" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                            </span>
                            <span style={{padding:"0"}}>Stake</span>
                        </a>
                    </p>
                    <hr />
                    <div class="container">
                        <figure class="image is-pulled-right" style={{maxWidth:"20%",width:"90px"}}>
                            <img src={CzfPump}/>
                        </figure>
                        <p class="title pt-5 is-size-5 mb-0">
                            CZF Chrono Pools
                        </p>
                        <p>
                        Burn CZF to earn rewards each block for the vesting period. Rewards can be fast forwarded from the future at a discount.
                        </p>
                        <p class="title pt-5 is-size-5 mb-0">
                            CZF Exotic Farms
                        </p>
                        <p>
                        Deliver liquidity tokens (LP) to earn vesting CZF. The amount of vesting CZF is equal to the value of the LP in CZF plus interest. 
                        </p>
                    </div>
                    <a class="mr-2 button is-rounded is-primary" href="https://cz.farm" target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-circle-dollar-to-slot" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>Stake on CZ.Farm</span>
                    </a>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
            </div>
        </section>
        <section id="czusd" class="hero is-fullheight has-text-centered">
            <div class="hero-body">
                <div class="container">
                        <figure class="image is-64x64 is-rounded is-pulled-left mr-3">
                            <img src={CzusdLogo} />
                        </figure>
                    <p class="has-text-left title is-cursive">Czusd.</p>
                    <p class="has-text-left subtitle is-size-6">Earn high yield safely.</p>
                    <figure class="image">
                        <img src={CzusdFactory} style={{marginLeft:"auto",marginRight:"auto"}} />
                    </figure>
                    <br/>
                    <p>
                    CZUSD is backed by a basket of stable USD assets which support its peg to $1.
                    <br/>Our dex frontend router, <a class="is-underlined" href="https://cz.cash">cz.cash</a>, provides easy trading of CZUSD and tokens backed by it.
                    </p>
                    <a class="mr-2 mt-2 button is-rounded is-primary" href={CZUSD_AUTOFARM_STAKE} target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-circle-dollar-to-slot" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>Stake on Autofarm</span>
                    </a><br/>
                    <a class="mr-2 mt-2 button is-rounded is-primary" href={CZUSD_ELLIPSIS_POOL} target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>Trade on Ellipsis</span>
                    </a>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
            </div>
        </section>
        <section id="nft" class="hero is-fullheight has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <p class="is-size-3 is-cursive"><b>Nfts with yield.</b></p>
                    <p>
                    An NFT series with regular releases of new creatures representing the cycle of Chinese Zodiacs.
                    <br/>All CZodiac NFT holders are airdropped CZF once a week, forever.
                    </p>
                    <a class="mr-2 mt-2 button is-rounded is-primary" href={"https://treasureland.market/assets?contract="+CZODIAC_NFT} target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>Trade on Treasureland</span>
                    </a>
                </div>
            </div>
            <div class="hero-footer">
                <figure class="image">
                    <img src={MotherChild} style={{marginLeft:"auto",marginRight:"auto",width:"200px",position:"relative",top:"54px"}} />
                </figure>
                <BackToTop />
            </div>
        </section>
        <section id="team" class="hero is-fullheight has-background-gradient has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <p class="title mt-2 is-cursive">Who We Are.</p>
                    <p class="mb-4">Our team of professional executives are KYC with backgrounds in blockchain, startups, and new technologies.</p>
                    <div class="columns is-mobile" style={{maxWidth:"450px",marginLeft:"auto",marginRight:"auto"}}>
                        <div class="column">
                            <div class="container mb-3">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpXcrypto}  />
                                </figure>
                                <p>xCrypto
                                <br/>CEO</p>
                            </div>
                            <div class="container mb-3">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpT4c0}  />
                                </figure>
                                <p>T4C0
                                <br/>COO</p>
                            </div>
                            <div class="containe mb-3r">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpIcashy}  />
                                </figure>
                                <p>iCashy
                                <br/>Visual Director</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="container mb-3">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpPlastic}  />
                                </figure>
                                <p>Plastic Digits
                                <br/>CTO</p>
                            </div>
                            <div class="container mb-3">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpSai}  />
                                </figure>
                                <p>Sai
                                <br/>CM Lead</p>
                            </div>
                            <div class="container mb-3">
                                <figure style={{marginLeft:"auto",marginRight:"auto"}} class="image is-128x128">
                                    <img class="is-rounded" src={PfpDave}  />
                                </figure>
                                <p>Dave
                                <br/>Chief Editor</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
            </div>
        </section>
        <section id="partners" class="hero is-fullheight has-background-grey-lighter has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <p class="title mt-2 is-cursive">The Best of Defi.</p>
                    <p>Our partners include your favorite defi projects on BSC. We've built exclusive relationships with Autofarm, Ellipsis, Beefy, 1inch, and more. </p>
                    <figure style={{marginLeft:"auto",marginRight:"auto",maxWidth:"256px"}}>
                        <img src={Partners}  />
                    </figure>
                </div>
            </div>
            <div class="hero-footer">
                <BackToTop />
            </div>
        </section>
        
        <footer id="footer" class="footer is-dark">
          <div class="content has-text-centered">
            <p>
              <a class="m-2 mr-4" href={"https://bscscan.com/token/"+CZF} target="_blank">
                <figure class="image is-16x16 is-rounded m-0" style={{display:"inline-block",top:"2px",position:"relative"}}>
                    <img src={CzfLogo} />
                </figure>
              </a>
              <a class="m-2 mr-3" href={"https://bscscan.com/token/"+CZUSD} target="_blank">
                <figure class="image is-16x16 is-rounded m-0" style={{display:"inline-block",top:"2px",position:"relative"}}>
                    <img src={CzusdLogo} />
                </figure>
              </a>
              <a class="m-2" href={TELEGRAM} target="_blank">
                <span class="icon"><i class="fa-brands fa-telegram"></i></span>
              </a>
              <a class="m-2" href={TWITTER} target="_blank">
                <span class="icon"><i class="fa-brands fa-twitter"></i></span>
              </a>
              <a class="m-2" href="https://czodiacs.medium.com/" target="_blank">
                <span class="icon"><i class="fa-brands fa-medium"></i></span>
              </a>
              <a class="m-2" href="https://github.com/chinese-zodiac" target="_blank">
                <span class="icon"><i class="fa-brands fa-github"></i></span>
              </a>
              <a class="m-2" href="https://discord.gg/nzHjq6Vewd" target="_blank">
                <span class="icon"><i class="fa-brands fa-discord"></i></span>
              </a>
              <a class="m-2" href="https://czodiac.gitbook.io/czodiac-litepapper" target="_blank">
                <span class="icon"><i class="fa-solid fa-book"></i></span>
              </a>
            </p>
            <p>
                <div class="container has-text-centered ">
                    <a class="button is-rounded m-1 is-small" href="https://cz.cash" target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-arrow-right-arrow-left" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>cz.cash</span>
                    </a>
                    <a class="button is-rounded m-1 is-small" href="https://cz.farm" target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-tractor" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>cz.farm</span>
                    </a>
                    <a class="button is-rounded m-1 is-small" href="https://app.czodiac.com" target="_blank">
                        <span class="icon">
                            <i class="fa-solid fa-box-archive" style={{position:'relative',top:"-0.1em",left:"0.1em"}}></i>
                        </span>
                        <span style={{padding:"0"}}>v1 dapp</span>
                    </a>
                </div>              
            </p>
            <br/>
            <p>
              <strong>Legal Disclaimer</strong><br/>
              <span class="is-size-7">
                Nothing on this site or on related channels should be considered a promise by anyone, including but not limited to the developers and promoters of this site, to perform work to generate profits for anyone including but not limited to the following: the users of this site; FairTribe community members; CZF holders; CZUSD holders; or anyone using any of the sites, smart contracts, social media channels, and any other media or tech related to CZF, CZUSD, and CZodiac or any of the community members. CZodiac, CZF, CZUSD, czodiac.com, cz.cash, cz.farm, and related technologies plus media are all experimental and must be used according to your personal financial situation and risk profile. There are no guarantees of profits, but the smart contracts are guaranteed to perform as written on the BSC blockchain.
                </span>
              </p>
            <p>
              <strong>Contact</strong><br/>
              team@czodiac.com
            </p>
          </div>
        </footer>
      </>);
    }
}

export default Home
