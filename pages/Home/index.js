
import React, { Component } from 'react';
import Collapsibles from '../../components/Collapsibles';
import CZodiacLogo from 'assets/logo.png';
import Umbrella from 'assets/images/umbrella.png';
import Blanket from 'assets/images/blanket.png';
import Sokuswap from 'assets/images/sokuswap.png';
import CzusdLogo from 'assets/images/czusd.svg';
import CzfPump from 'assets/images/pump2.png';
import Partners from 'assets/images/circle.png';
import MotherChild from 'assets/images/mother-child.png';
import CzusdFactory from 'assets/images/factory.png';
import PfpXcrypto from 'assets/team/xcryptoturnip.png';
import PfpDave from 'assets/team/dave.jpg';
import PfpPlastic from 'assets/team/plastic.png';
import PfpSai from 'assets/team/sai.png';
import PfpT4c0 from 'assets/team/t4c0.png';
import PfpIcashy from 'assets/team/icashy.png';
import CZodiacLogoWide from 'assets/images/logo-wide-3x1.png';
import CZRedLogo from 'assets/images/czred.svg';
import CZRedLogoWithBg from 'assets/images/czred-with-bg.svg';
import "./index.scss";
const CZUSD = "0xE68b79e51bf826534Ff37AA9CeE71a3842ee9c70";
const CZR = "0x5cd0c2C744caF04cda258Efc6558A3Ed3defE97b";
const CZR_CZUSD_LP = "0xbF92a0c60a129a56485A3fb891851cF88798602D";
const TWITTER = "https://twitter.com/zodiacs_c";
const TELEGRAM = "https://t.me/CZodiacofficial";
const CZUSD_AUTOFARM_STAKE = "https://autofarm.network/bsc/602/";
const CZUSD_ELLIPSIS_POOL = "https://ellipsis.finance/pool/19";
const CZODIAC_NFT = "0x6Bf5843b39EB6D5d7ee38c0b789CcdE42FE396b4";


class BackToTop extends Component {
    render() {
        return (
            <div class="has-text-right mr-3 mb-3 mt-3 is-size-7">
                <a href="#" class="button is-small is-outlined is-rounded">
                    <span style={{ padding: "0" }}>back to top</span>
                    <span class="icon" style={{ position: 'relative', top: "-0.1em", left: "-0.15em" }}>
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
                    <nav class="breadcrumb is-right pt-4 has-bullet-separator is-small pr-5 mb-0" style={{ maxWidth: "1344px", marginLeft: "auto", marginRight: "auto" }} aria-label="breadcrumbs">
                        <ul>
                            <li><a href="#fairtribe">FAIRTRIBE</a></li>
                            <li><a href="#czr">CZR</a></li>
                            <li ><a href="#czusd" >CZUSD</a></li>
                            <li ><a href="#nft" >NFT</a></li>
                            <li ><a href="#partners" >PARTNERS</a></li>
                        </ul>
                    </nav>
                    <div class="container has-text-right pr-5 ">
                        <a class="button is-rounded m-1 is-small is-secondary" href="https://cz.cash" target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>cz.cash</span>
                        </a>
                        <a class="button is-rounded m-1 is-small is-secondary" href="https://cz.farm" target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-tractor" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>cz.farm</span>
                        </a>
                        <a class="button is-rounded m-1 is-small is-secondary" href="https://numis.cz.cash" target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-coins" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>numis.cz.cash</span>
                        </a>
                        <a class="button is-rounded m-1 is-small is-secondary" href="https://app.czodiac.com" target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-box-archive" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>v1 dapp</span>
                        </a>
                    </div>


                </div>
                <div class="hero-body">
                    <div class="container has-text-centered " style={{ maxWidth: "700px" }}>
                        <figure class="image">
                            <img src={CZRedLogo} />
                        </figure>
                        <p class="title is-size-5 is-cursive" >
                            <br />
                            The Global Defi Investment Bank.
                        </p>
                        <p class="subtitle is-size-6">
                            CZUSD profits buy our partner tokens,<br />which are distributed to CZR Stakers on cz.farm.
                        </p>
                        <a class="mr-2 button is-rounded is-primary" href={"https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=" + CZR} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Trade CZR</span>
                        </a>
                        <a class="mr-2 button is-rounded is-primary" href={"https://dexscreener.com/bsc/" + CZR_CZUSD_LP} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-chart-line" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Chart CZR</span>
                        </a>
                        <a class="button is-rounded is-primary" href={TELEGRAM} target="_blank">
                            <span class="icon">
                                <i class="fa-brands fa-telegram" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Chat CZR</span>
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
                                <span class="title pt-5 is-size-5 mb-0">HARDENED:</span><br />
                                Market dumps, fud campaigns, hacker exploits, malicious bots. Our experience and technology protect against all threats.
                            </li>
                            <li class="mb-3">
                                <span class="title pt-5 is-size-5 mb-0">COMMUNITY: </span><br />
                                Devs abandon their community at the first sign of trouble. Not us. Our battle hardened devs fight for you no matter what.
                            </li>
                            <li>
                                <span class="title pt-5 is-size-5 mb-0">STABILITY: </span><br />
                                Weak projects rent liquidity from VC that disappears. Our treasury earns profits from selling products in CZUSD.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="hero-footer">
                    <BackToTop />
                    <figure class="image">
                        <img src={Umbrella} style={{ marginLeft: "auto", marginRight: "auto" }} />
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
                        <ul class="has-text-left mt-3 pl-4" style={{ maxWidth: "250px", marginLeft: "auto", marginRight: "auto" }}>
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
                            <b>To recommend a launch:</b><br />
                            <a class="is-underlined" href="mailto:team@czodiac.com">team@czodiac.com</a> or <a class="is-underlined" href={TELEGRAM} target="_blank">Telegram</a> </p>
                        <figure class="image">
                            <img src={Blanket} style={{ marginLeft: "auto", marginRight: "auto" }} />
                        </figure>
                        <p class="title is-size-3 mb-2 mt-6 is-cursive">
                            Select Launches.
                        </p>
                        <div style={{ borderTop: "solid 1px #ddd" }} className="p-2 m-0" >
                            <b>DGOD:</b>
                            <a target="_blank" href="https://dogegod.io" className="ml-1" style={{ textDecoration: "underline" }}>site</a>
                            <a target="_blank" href="https://t.me/dogegod_token" className="ml-1" style={{ textDecoration: "underline" }}>telegram</a>
                            <a target="_blank" href="https://dexscreener.com/bsc/0xC0B4dCC1d249D177a43bdAA13649f9b2830744A7" className="ml-1" style={{ textDecoration: "underline" }}>chart</a>
                            <a target="_blank" href="https://cz.cash/#/swap?outputCurrency=0x99F4cc2BAE97F82A823CA80DcAe52EF972B7F270" className="ml-1" style={{ textDecoration: "underline" }}>buy</a><br />
                            Earn Dogecoin every second without a single sell.
                        </div>
                        <div style={{ borderTop: "solid 1px #ddd" }} className="p-2 m-0" >
                            <b>GEM:</b>
                            <a target="_blank" href="https://greenminer.space" className="ml-1" style={{ textDecoration: "underline" }}>site</a>
                            <a target="_blank" href="https://t.me/GreenMinerr" className="ml-1" style={{ textDecoration: "underline" }}>telegram</a>
                            <a target="_blank" href="https://dexscreener.com/bsc/0x9321907037fa062b52b3f564b3350adf935bf698" className="ml-1" style={{ textDecoration: "underline" }}>chart</a>
                            <a target="_blank" href="https://cz.cash/#/swap?outputCurrency=0x701F1ed50Aa5e784B8Fb89d1Ba05cCCd627839a7" className="ml-1" style={{ textDecoration: "underline" }}>buy</a><br />
                            Rising price floor powered by a solar and wind GPU mining operation farm.
                        </div>
                        <div style={{ borderTop: "solid 1px #ddd" }} className="p-2 m-0" >
                            <b>LSDT:</b>
                            <a target="_blank" href="https://rafalovichcoins.com/nfts" className="ml-1" style={{ textDecoration: "underline" }}>site</a>
                            <a target="_blank" href="https://t.me/rafalovichcoins" className="ml-1" style={{ textDecoration: "underline" }}>telegram</a>
                            <a target="_blank" href="https://dexscreener.com/bsc/0x1A067fFcE2aE6Ae395d6508891CAE339639F1c0A" className="ml-1" style={{ textDecoration: "underline" }}>chart</a>
                            <a target="_blank" href="https://cz.cash/#/swap?outputCurrency=0xD9A255F79d7970A3Ed4d81eef82b054B0a21eCF8" className="ml-1" style={{ textDecoration: "underline" }}>buy</a><br />
                            Silver Dollar 1:1 backed NFTs dropped to LSDT holders every $80 locked.
                        </div>
                        <div style={{ borderTop: "solid 1px #ddd" }} className="p-2 m-0" >
                            <b>LRT:</b>
                            <a target="_blank" href="https://rabbitcatch.com" className="ml-1" style={{ textDecoration: "underline" }}>site</a>
                            <a target="_blank" href="https://t.me/rafalovichcoins" className="ml-1" style={{ textDecoration: "underline" }}>telegram</a>
                            <a target="_blank" href="https://dexscreener.com/bsc/0x117C53a2487556bFb1E067B8de35760380342A4B" className="ml-1" style={{ textDecoration: "underline" }}>chart</a>
                            <a target="_blank" href="https://cz.cash/#/swap?outputCurrency=0xE95412D2d374B957ca7f8d96ABe6b6c1148fA438" className="ml-1" style={{ textDecoration: "underline" }}>buy</a><br />
                            Hold LRT to get access to unique cz.farm pools and win NFTs.
                        </div>
                    </div>
                </div>
                <div class="hero-footer">
                    <BackToTop />
                </div>
            </section>
            <section id="czr" class="hero is-fullheight has-text-left">
                <div class="hero-body">
                    <div class="container">
                        <p class="title is-size-5" >
                            <figure class="image is-128x128 is-rounded is-pulled-left mr-3">
                                <img className="is-rounded has-background-dark p-1" src={CZRedLogoWithBg} />
                            </figure>
                            <br />
                            Safe Yield. <br /> Rising Floor. <br /> <span class="is-cursive is-size-4">CZRed.</span>
                        </p>
                        <p class="pt-4">
                            <a class="mr-2 button is-rounded is-primary" href={"https://cz.cash/#/swap?inputCurrency=BNB&outputCurrency=" + CZR} target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                                </span>
                                <span style={{ padding: "0" }}>Trade</span>
                            </a>
                            <a class="mr-2 button is-rounded is-primary" href="https://cz.farm" target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-circle-dollar-to-slot" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                                </span>
                                <span style={{ padding: "0" }}>Stake</span>
                            </a>
                        </p>
                        <hr />
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
                            <img className="is-rounded has-background-dark p-1" src={CzusdLogo} />
                        </figure>
                        <p class="has-text-left title is-cursive">Czusd.</p>
                        <p class="has-text-left subtitle is-size-6">Safely earn high yield.</p>
                        <figure class="image">
                            <img src={CzusdFactory} style={{ marginLeft: "auto", marginRight: "auto" }} />
                        </figure>
                        <br />
                        <p>
                            CZUSD is overcollateralized by a basket of BUSD, Silver Dollars, and other low volatility assets which support its peg to $1.
                            <br />Our dex frontend router, <a class="is-underlined" href="https://cz.cash">cz.cash</a>, provides easy trading of CZUSD and tokens backed by it.
                        </p>
                        <a class="mr-2 mt-2 button is-rounded is-primary" href={CZUSD_AUTOFARM_STAKE} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-circle-dollar-to-slot" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Stake on Autofarm</span>
                        </a><br />
                        <a class="mr-2 mt-2 button is-rounded is-primary" href={CZUSD_ELLIPSIS_POOL} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Trade on Ellipsis</span>
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
                            <br />NFTs can be staked to earn CZRed from the 1% tax.
                        </p>
                        <a class="mr-2 mt-2 button is-rounded is-primary" href={"https://treasureland.market/assets?contract=" + CZODIAC_NFT} target="_blank">
                            <span class="icon">
                                <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                            </span>
                            <span style={{ padding: "0" }}>Trade on Treasureland</span>
                        </a>
                    </div>
                </div>
                <div class="hero-footer">
                    <figure class="image">
                        <img src={MotherChild} style={{ marginLeft: "auto", marginRight: "auto", width: "200px", position: "relative", top: "54px" }} />
                    </figure>
                    <BackToTop />
                </div>
            </section>
            <section id="partners" class="hero is-fullheight has-background-grey-lighter has-text-centered">
                <div class="hero-body">
                    <div class="container">
                        <p class="title mt-2 is-cursive">The Best of Defi.</p>
                        <p>Our partners include your favorite defi projects on BSC. We've built exclusive relationships with Autofarm, Ellipsis, Beefy, 1inch, Donkswap, DotDot and more. </p>
                        <div style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "256px" }}>
                            <figure class="m-1" style={{ marginRight: "auto", maxWidth: "256px", display: "inline-block" }}>
                                <img src={Partners} />
                            </figure>

                        </div>
                    </div>
                </div>
                <div class="hero-footer">
                    <BackToTop />
                </div>
            </section>

            <footer id="footer" class="footer is-dark">
                <div class="content has-text-centered">
                    <p>
                        <a class="m-2 mr-4" href={"https://bscscan.com/token/" + CZR} target="_blank">
                            <figure class="image is-16x16 is-rounded m-0" style={{ display: "inline-block", top: "2px", position: "relative" }}>
                                <img src={CZRedLogoWithBg} />
                            </figure>
                        </a>
                        <a class="m-2 mr-3" href={"https://bscscan.com/token/" + CZUSD} target="_blank">
                            <figure class="image is-16x16 is-rounded m-0" style={{ display: "inline-block", top: "2px", position: "relative" }}>
                                <img src={CzusdLogo} />
                            </figure>
                        </a>
                        <a class="m-2" href={TELEGRAM} target="_blank">
                            <span class="icon"><i class="fa-brands fa-telegram"></i></span>
                        </a>
                        <a class="m-2" href={TWITTER} target="_blank">
                            <span class="icon"><i class="fa-brands fa-twitter"></i></span>
                        </a>
                        <a class="m-2" href="https://czodiac.medium.com/" target="_blank">
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
                                    <i class="fa-solid fa-arrow-right-arrow-left" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                                </span>
                                <span style={{ padding: "0" }}>cz.cash</span>
                            </a>
                            <a class="button is-rounded m-1 is-small" href="https://cz.farm" target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-tractor" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                                </span>
                                <span style={{ padding: "0" }}>cz.farm</span>
                            </a>
                            <a class="button is-rounded m-1 is-small" href="https://app.czodiac.com" target="_blank">
                                <span class="icon">
                                    <i class="fa-solid fa-box-archive" style={{ position: 'relative', top: "-0.1em", left: "0.1em" }}></i>
                                </span>
                                <span style={{ padding: "0" }}>v1 dapp</span>
                            </a>
                        </div>
                    </p>
                    <br />
                    <p>
                        <strong>Legal Disclaimer</strong><br />
                        <span class="is-size-7">
                            Nothing on this site or on related channels should be considered a promise by anyone, including but not limited to the developers and promoters of this site, to perform work to generate profits for anyone including but not limited to the following: the users of this site; FairTribe community members; CZF holders; CZR hoders; CZUSD holders; or anyone using any of the sites, smart contracts, social media channels, and any other media or tech related to CZF, CZR, CZUSD, and CZodiac or any of the community members. CZodiac, CZF, CZR, CZUSD, czodiac.com, cz.cash, cz.farm, and related technologies plus media are all experimental and must be used according to your personal financial situation and risk profile. There are no guarantees of profits, but the smart contracts are guaranteed to perform as written on the BSC blockchain.
                        </span>
                    </p>
                    <p>
                        <strong>Contact</strong><br />
                        team@czodiac.com<br />
                        official@czodiac.com
                    </p>
                    <p>
                        <a href="https://app.czodiac.com/czodiac-pitch-deck-22-07-04.pdf">download pitch deck</a>
                    </p>
                </div>
            </footer>
        </>);
    }
}

export default Home
