import Head from "next/head";
import Script from "next/Script";

export default function Home() {
  return (
    <>
      <Head>
        <>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"> */}
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="css/main.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </>
      </Head>
      <div id="wrapper">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand p-0" href="#">
              <img className="d-xl-none" src="images/logo.png" alt="logo" />
              <img
                className="d-xl-block d-none"
                src="images/TP-Logo-footer.png"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#utilities-services">
                    Utilities &amp; Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tokenomics">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#partners">
                    Partners
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.goodysimprints.net/shop/encircled/39"
                    target="_blank"
                  >
                    Buy Apparel
                  </a>
                </li>
              </ul>
              <div className="navbar-social d-flex flex-wrap align-items-center">
                <a
                  target="_blank"
                  href="https://twitter.com/encircled_ofcl?s=11&t=leb3fPTwicjyBGzbHrrCDw"
                >
                  <img src="images/twitter.png" alt="twitter" />
                </a>
                <a target="_blank" href="https://t.me/+jzSiMgOm-V84ZDc5">
                  <img src="images/telegram.png" alt="telegram" />
                </a>
                <a
                  target="_blank"
                  href="https://www.reddit.com/r/Encircled_Official/"
                >
                  <img src="images/redit.png" alt="redit" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/encircled_ofcl/?igshid=YmMyMTA2M2Y="
                >
                  <img src="images/instragram.png" alt="instragram" />
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Encircled.OFCL "
                >
                  <img src="images/facebook.png" alt="facebook" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/encircled-official/"
                >
                  <img src="images/linkedin.png" alt="linkedin" />
                </a>
                <a target="_blank" href="https://discord.gg/F3TmcVfD4W">
                  <img src="images/discord.png" alt="discord" />
                </a>
                <a target="_blank" href="https://www.tiktok.com/t/ZTRDDdb8h/">
                  <img src="images/tiktok.png" alt="tiktok" />
                </a>
                <a
                  target="_blank"
                  href="https://youtube.com/channel/UCRTlmIB_vVi14NwjZW_wjbA"
                >
                  <img src="images/youtube.png" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="hero position-relative text-center">
            <div className="container position-relative" data-aos="fade-up">
              <img
                src="images/circle-1.png"
                alt="circle 1"
                className="d-none d-md-block shape-circle-1"
              />
              <h3>
                <span className="text-grad">Welcome to</span>
              </h3>
              <h1>
                <span className="text-grad">Encircled</span>
              </h1>
              <div className="mb-30 d-flex align-items-center flex-md-row justify-content-center flex-column">
                <a
                  href="https://forms.gle/sqwKisEndNpbiayQ7"
                  target="_blank"
                  className="btn mb-20 btn-white"
                >
                  Whitelisting
                </a>
                <a
                  href="https://drive.google.com/file/d/1VfzHremNNZJUeCYSrLNBid3IWl6hORyb/view?usp=sharing"
                  target="_blank"
                  className="btn mb-20 btn-outline-white"
                >
                  Download Our Whitepaper
                  <svg
                    width={15}
                    height={17}
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.09 6H10.5V1C10.5 0.45 10.05 0 9.5 0H5.5C4.95 0 4.5 0.45 4.5 1V6H2.91C2.02 6 1.57 7.08 2.2 7.71L6.79 12.3C7.18 12.69 7.81 12.69 8.2 12.3L12.79 7.71C13.42 7.08 12.98 6 12.09 6ZM0.5 16C0.5 16.55 0.95 17 1.5 17H13.5C14.05 17 14.5 16.55 14.5 16C14.5 15.45 14.05 15 13.5 15H1.5C0.95 15 0.5 15.45 0.5 16Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 text-muted">
                  <h4>
                    The innovative one-stop solution for eliminating scams,
                    risks and bad investments.
                  </h4>
                  <h4>
                    <strong>Connect, Create, Learn, and Earn</strong>
                  </h4>
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <img
              src="images/shape-1.svg"
              alt="shape 1"
              className="shape-1"
              data-aos="zoom-out"
              data-aos-delay={300}
            />
            <img
              src="images/shape-3.svg"
              alt="shape 3"
              className="shape-3 d-none d-lg-block"
            />
            <img
              src="images/3d-logocdv.png"
              alt="shape 3"
              className="shape-coin js-tilt d-none d-lg-block"
            />
          </div>
          {/* /.hero */}
          <div className="intigration position-relative">
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-6 col-lg-7 md-8" data-aos="fade-up">
                  <div className="mb-50 text-muted">
                    <h4>
                      Encircled will be a one-stop integration for launching new
                      projects and connecting with the entire crypto community,
                      including investors, developers, and project creators.
                    </h4>
                  </div>
                  <div className="row">
                    <div className="col-sm-6 mb-md-4 mb-3">
                      <div className="encircle-item d-flex align-items-center">
                        <span className="mr-15">
                          <img src="images/icon-BI.svg" alt="icon" />
                        </span>
                        Brainstorm Ideas
                      </div>
                    </div>
                    {/* /.col-sm-6 mb-md-4 mb-3 */}
                    <div className="col-sm-6 mb-md-4 mb-3">
                      <div className="encircle-item d-flex align-items-center">
                        <span className="mr-15">
                          <img src="images/icon-BT.svg" alt="icon" />
                        </span>
                        Build teams
                      </div>
                    </div>
                    {/* /.col-sm-6 mb-md-4 mb-3 */}
                    <div className="col-sm-6 mb-md-4 mb-3">
                      <div className="encircle-item d-flex align-items-center">
                        <span className="mr-15">
                          <img src="images/icon-CI.svg" alt="icon" />
                        </span>
                        Connect with Investors
                      </div>
                    </div>
                    {/* /.col-sm-6 mb-md-4 mb-3 */}
                    <div className="col-sm-6 mb-md-4 mb-3">
                      <div className="encircle-item d-flex align-items-center">
                        <span className="mr-15">
                          <img src="images/icon-IEA.svg" alt="icon" />
                        </span>
                        Invite and Evaluate Advisors
                      </div>
                    </div>
                    {/* /.col-sm-6 mb-md-4 mb-3 */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.col-lg-6 md-8 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <img src="images/shape-2.svg" alt="shape 2" className="shape-2" />
          </div>
          {/* /.intigration */}
          <div className="benefits position-relative">
            <img src="images/shape-4.png" alt="shape 4" className="shape-4" />
            <div className="container">
              <h2 className="mb-60" data-aos="fade-up">
                Benefits
              </h2>
              <div className="row text-muted">
                <div
                  className="col-md-4 mb-md-0 mb-5"
                  data-aos="fade-up"
                  dat-aos-delay={100}
                >
                  <h3 className="benefit-heading text-white mb-20 d-flex align-items-center">
                    <span className="mr-15">
                      <img src="images/icon-EL.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Launch
                  </h3>
                  <p>
                    Encircled Launch will offer services for launches,
                    verification of new project teams and projects, provide
                    launch tiers, and have specific standard practices. The
                    Encircled platform will have strict requirements and our
                    team will vet all projects before they are launched. Our
                    mission will be to ensure we have a very high success rate
                    with every project launched.
                  </p>
                </div>
                {/* /.col-md-4 mb-md-0 mb-5 */}
                <div
                  className="col-md-4 mb-md-0 mb-5"
                  data-aos="fade-up"
                  dat-aos-delay={200}
                >
                  <h3 className="benefit-heading text-white mb-20 d-flex align-items-center">
                    <span className="mr-15">
                      <img src="images/icon-EC.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Connect
                  </h3>
                  <p>
                    Encircled Connect will provide a social networking platform
                    where the entire Encircled Community can connect and grow
                    their network. Connect will be a service provided to all our
                    investors and developers.
                  </p>
                </div>
                {/* /.col-md-4 mb-md-0 mb-5 */}
                <div
                  className="col-md-4 mb-md-0 mb-5"
                  data-aos="fade-up"
                  dat-aos-delay={300}
                >
                  <h3 className="benefit-heading text-white mb-20 d-flex align-items-center">
                    <span className="mr-15">
                      <img src="images/icon-ELB.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Learn
                  </h3>
                  <p>
                    Encircled Learn will be a fully integrated educational
                    platform for investors and developers to become educated in
                    all aspects of the crypto space. This will have educators,
                    research tools, resources, and information to help everyone
                    achieve their goals.
                  </p>
                </div>
                {/* /.col-md-4 mb-md-0 mb-5 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.benefits */}
          <div
            className="roadmap position-relative"
            style={{ paddingTop: 85 }}
            id="roadmap"
          >
            <div className="container container-md">
              <h2 className="text-md-center mb-60" data-aos="fade-up">
                Roadmap
              </h2>
              <div className="roadmap-list">
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    Happening now
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">Happening now</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-BSC.svg" alt=" icon" />
                      </span>
                      Building A Safe Community
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    June 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">June 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-ETL.svg" alt=" icon" />
                      </span>
                      Encircled Launch
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    June 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">June 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-EM.svg" alt=" icon" />
                      </span>
                      Encircled Marketing
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    July 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">July 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-EA.svg" alt=" icon" />
                      </span>
                      Encircled Apparel
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    August 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">August 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-ESP.svg" alt=" icon" />
                      </span>
                      Encircled Staking Pool
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    September 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">September 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-ECT.svg" alt=" icon" />
                      </span>
                      Encircled Connect
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    October 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">October 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-ELH.svg" alt=" icon" />
                      </span>
                      Encircled Launch Pad
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    October 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">October 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-EPVC.svg" alt=" icon" />
                      </span>
                      Encircled Vetting &amp; Consulting
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    November 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">November 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-ELN.svg" alt=" icon" />
                      </span>
                      Encircled Learn
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
                <div className="roadmap-item d-flex align-items-center justify-content-between">
                  <div
                    className="roadmap-date d-md-block d-none"
                    data-aos="fade-left"
                  >
                    December 2023
                  </div>
                  <h4
                    className="roadmap-card text-ex-bold"
                    data-aos="fade-right"
                  >
                    <div className="roadmap-date d-md-none">December 2023</div>
                    <div className="d-flex align-items-center">
                      <span className="mr-15">
                        <img src="images/icon-EIP.svg" alt=" icon" />
                      </span>
                      Encircled Investment Pool
                    </div>
                  </h4>
                </div>
                {/* /.roadmap-item */}
              </div>
              {/* /.roadmap-list */}
            </div>
            {/* /.container */}
            <img src="images/shape-5.svg" alt="shape 5" className="shape-5" />
          </div>
          {/* /.roadmap */}
          <div
            className="utilities"
            style={{ paddingTop: 85 }}
            id="utilities-services"
          >
            <div className="container">
              <h2 className="text-center mb-60" data-aos="fade-up">
                Utilities &amp; Services
              </h2>
              <div
                className="utilities-circle position-relative d-flex flex-column align-items-center justify-content-center"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="utilities-image w-100 h-100 d-flex js-tilt">
                  <img
                    src="images/3d-logocdv.png"
                    alt="image"
                    className="img-fluid m-auto"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  />
                </div>
                <div className="d-md-block d-none">
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-1 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Encircled will be a one-stop integration for launching new projects and connecting with the entire crypto community: investors, developers and project creators."
                  >
                    <span className="mr-15">
                      <img src="images/icon-ETL.svg" alt="icon" />
                    </span>
                    Encircled Token <br />
                    Launch
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-2 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Four Phases of Marketing: Social Media, Affiliate Marketing, Outbound Marketing, and Network Marketing."
                  >
                    <span className="mr-15">
                      <img src="images/icon-EM.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Marketing
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-3 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Encircled will partner with a top-notch apparel company. That way the Encircled Community has flashy and high-quality apparel to wear when they are out on the town."
                  >
                    <span className="mr-15">
                      <img src="images/icon-EA.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Apparel
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-4 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Establishment of a high quality and well-trusted Launch Pad for new crypto projects."
                  >
                    <span className="mr-15">
                      <img src="images/icon-ELH.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Launch
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-5 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Our team will provide Vetting and Consulting services for newly developing projects outside of our Launch Pad. Community members might want vetting of an outside project, or an outside project may request an introduction to our community."
                  >
                    <span className="mr-15">
                      <img src="images/icon-EPVC.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Vetting &amp; Consulting
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-6 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="15% of profits earned on services and utilities will be deposited into the Encircled Investment Pool."
                  >
                    <span className="mr-15">
                      <img src="images/icon-EIP.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Investment Pool
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-7 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="We will use a unique set of smart contracts for staking. Users who stake their tokens on the platform will have access to various features described in the whitepaper."
                  >
                    <span className="mr-15">
                      <img src="images/icon-ESP.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Staking Pool
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-8 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="We will provide a social networking platform where the entire Encircled Community can connect and grow their network. Connect will be a service provided to all our investors and developers,"
                  >
                    <span className="mr-15">
                      <img src="images/icon-ECT.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Connect
                  </h4>
                  <h4
                    className="d-flex text-ex-bold m-0 utilities-item utilities-item-9 align-items-center"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="<ul class='list-unstyled'><li class='mb-1'>We will provide a fully integrated educational platform for investors and developers. It will be directly linked to Connect.</li><li>Encircled Learn will be a centralized location where anyone in the Encircled Community can be educated in all aspects of the crypto space.</li></ul>"
                    data-bs-html="true"
                  >
                    <span className="mr-15">
                      <img src="images/icon-ELN.svg" alt="icon" />
                    </span>
                    Encircled <br />
                    Learn
                  </h4>
                </div>
              </div>
              <div
                className="accordion accordion-flush d-md-none"
                id="accordionFlushList"
              >
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_1"
                      aria-expanded="false"
                      aria-controls="flush-collapse_1"
                    >
                      <span className="mr-15">
                        <img src="images/icon-ETL.svg" alt="icon" />
                      </span>
                      Encircled Token Launch
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_1"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_1"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      Encircled will be a one-stop integration for launching new
                      projects and connecting with the entire crypto community:
                      investors, developers and project creators.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_2"
                      aria-expanded="false"
                      aria-controls="flush-collapse_2"
                    >
                      <span className="mr-15">
                        <img src="images/icon-EM.svg" alt="icon" />
                      </span>
                      Encircled Marketing
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_2"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_2"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      Four Phases of Marketing: Social Media, Affiliate
                      Marketing, Outbound Marketing, and Network Marketing.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_3"
                      aria-expanded="false"
                      aria-controls="flush-collapse_3"
                    >
                      <span className="mr-15">
                        <img src="images/icon-EA.svg" alt="icon" />
                      </span>
                      Encircled Apparel
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_3"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_3"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      Encircled will partner with a top-notch apparel company.
                      That way the Encircled Community has flashy and
                      high-quality apparel to wear when they are out on the
                      town.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_4"
                      aria-expanded="false"
                      aria-controls="flush-collapse_4"
                    >
                      <span className="mr-15">
                        <img src="images/icon-ELH.svg" alt="icon" />
                      </span>
                      Encircled Launch
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_4"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_4"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      Establishment of a high quality and well-trusted Launch
                      Pad for new crypto projects.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_5"
                      aria-expanded="false"
                      aria-controls="flush-collapse_5"
                    >
                      <span className="mr-15">
                        <img src="images/icon-EPVC.svg" alt="icon" />
                      </span>
                      Encircled Vetting &amp; Consulting
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_5"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_5"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      Our team will provide Vetting and Consulting services for
                      newly developing projects outside of our Launch Pad.
                      Community members might want vetting of an outside
                      project, or an outside project may request an introduction
                      to our community.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_6">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_6"
                      aria-expanded="false"
                      aria-controls="flush-collapse_6"
                    >
                      <span className="mr-15">
                        <img src="images/icon-EIP.svg" alt="icon" />
                      </span>
                      Encircled Investment Pool
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_6"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_6"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      15% of profits earned on services and utilities will be
                      deposited into the Encircled Investment Pool.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_7">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_7"
                      aria-expanded="false"
                      aria-controls="flush-collapse_7"
                    >
                      <span className="mr-15">
                        <img src="images/icon-ESP.svg" alt="icon" />
                      </span>
                      Encircled Staking Pool
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_7"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_7"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      We will use a unique set of smart contracts for staking.
                      Users who stake their tokens on the platform will have
                      access to various features described in the whitepaper.
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_8">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_8"
                      aria-expanded="false"
                      aria-controls="flush-collapse_8"
                    >
                      <span className="mr-15">
                        <img src="images/icon-ECT.svg" alt="icon" />
                      </span>
                      Encircled Connect
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_8"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_8"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      We will provide a social networking platform where the
                      entire Encircled Community can connect and grow their
                      network. Connect will be a service provided to all our
                      investors and developers,
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="flush-heading_9">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse_9"
                      aria-expanded="false"
                      aria-controls="flush-collapse_9"
                    >
                      <span className="mr-15">
                        <img src="images/icon-ELN.svg" alt="icon" />
                      </span>
                      Encircled Learn
                    </button>
                  </h2>
                  <div
                    id="flush-collapse_9"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-heading_9"
                    data-bs-parent="#accordionFlushList"
                  >
                    <div className="accordion-body text-muted text-16">
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          We will provide a fully integrated educational
                          platform for investors and developers. It will be
                          directly linked to Connect.
                        </li>
                        <li>
                          Encircled Learn will be a centralized location where
                          anyone in the Encircled Community can be educated in
                          all aspects of the crypto space.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /.accordion-item */}
              </div>
            </div>
            {/* /.container */}
          </div>
          {/* /.utilities */}
          <div className="profit-share position-relative">
            <img
              src="images/shape-6.svg"
              alt="shape 6"
              data-aos="zoom-out"
              data-aos-delay={1000}
              className="shape-6"
            />
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-7 col-sm-12">
                  <div className="profit" data-aos="fade-up">
                    <h2 className="mb-20">Profit-Share</h2>
                    <p className="lead text-muted">
                      Profits generated by our stand alone utilities will be
                      distributed as follows paid out in BUSD:
                    </p>
                    <img src="images/icon-profit.svg" alt="profit" />
                  </div>
                  {/* /.profit */}
                </div>
                {/* /.col-md-7 col-sm-12 */}
                <div className="col-md-4 d-flex flex-column col-6">
                  <div className="row flex-column">
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="profit-text">
                        <h2>
                          <span className="text-grad">30%</span>
                        </h2>
                        <p className="lead text-muted">
                          to all stakers of our token
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="profit-text">
                        <h2>
                          <span className="text-grad">15%</span>
                        </h2>
                        <p className="lead text-muted">
                          to project investment pool
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-12"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <div className="profit-text">
                        <h2>
                          <span className="text-grad">15%</span>
                        </h2>
                        <p className="lead text-muted">
                          to future utility development
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.col-md-4 col-6 */}
                <div className="col-md-7 col-6">
                  <div className="row justify-content-between">
                    <div
                      className="col-xl-auto col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="profit-text">
                        <h2>
                          <span className="text-grad">30%</span>
                        </h2>
                        <p className="lead text-muted">
                          to the Encircled Team to maintain the best team in the
                          industry
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-xl-auto col-md-6"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <div className="profit-text">
                        <h2>
                          <span className="text-grad">10%</span>
                        </h2>
                        <p className="lead text-muted">
                          to a worldwide non-profit organization voted on by the
                          community
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.col-md-7 col-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.profit-share */}
          <div
            className="position-relative"
            style={{ paddingTop: 85 }}
            id="tokenomics"
          >
            <img src="images/shape-7.png" alt="shape 7" className="shape-7" />
            <div className="tokenomics">
              <div className="container">
                <h2 className="mb-60" data-aos="fade-up">
                  Tokenomics
                </h2>
                <div className="row justify-content-center text-center">
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="token token-circle-1">
                      <img
                        src="images/circle-token-1.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">5%</h2>
                        <p className="lead text-muted">Liquidity</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="token token-circle-2">
                      <img
                        src="images/circle-token-2.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">8%</h2>
                        <p className="lead text-muted">Seed</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="token token-circle-3">
                      <img
                        src="images/circle-token-3.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">15%</h2>
                        <p className="lead text-muted">
                          Private Sale <br />
                          (First Round)
                        </p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={400}
                  >
                    <div className="token token-circle-4">
                      <img
                        src="images/circle-token-4.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">10%</h2>
                        <p className="lead text-muted">
                          Public Sale <br />
                          (Last Chance Round)
                        </p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div className="token token-circle-5">
                      <img
                        src="images/circle-token-5.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">10%</h2>
                        <p className="lead text-muted">Team</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    <div className="token token-circle-6">
                      <img
                        src="images/circle-token-6.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">5%</h2>
                        <p className="lead text-muted">Advisors</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    <div className="token token-circle-7">
                      <img
                        src="images/circle-token-7.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">10%</h2>
                        <p className="lead text-muted">Reserve</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={800}
                  >
                    <div className="token token-circle-8">
                      <img
                        src="images/circle-token-8.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">7%</h2>
                        <p className="lead text-muted">Marketing</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="token token-circle-3">
                      <img
                        src="images/circle-token-3.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">15%</h2>
                        <p className="lead text-muted">
                          Ecosystem <br />
                          Development
                        </p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                  <div
                    className="col-xl-3 col-md-4 col-6 mb-4"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="token token-circle-3">
                      <img
                        src="images/circle-token-3.svg"
                        alt="icon"
                        className="img-fluid"
                      />
                      <div className="token-text">
                        <h2 className="mb-1">15%</h2>
                        <p className="lead text-muted">Rewards</p>
                      </div>
                    </div>
                    {/* /.token */}
                  </div>
                  {/* /.col-xl-3 col-md-4 col-6 mb-4 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </div>
            {/* /.tokenomics */}
          </div>
          <div className="transaction position-relative text-center">
            <img
              src="images/shape-8.svg"
              alt="shape 8"
              className="shape-8"
              data-aos="zoom-out"
              data-aos-delay={1500}
            />
            {/* <img src="images/shape-mob-8.svg" alt="shape 8" class="shape-8 d-sm-none" /> */}
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="mb-40">Transaction Fees</h2>
                  <h4>
                    Every Buy/Sell transaction of the $ENCIRCLED will attract an
                    8% fee on the DEX. These fees will be converted to BUSD, and
                    automatically distributed back to all holders of our token.
                  </h4>
                  <h4>
                    In addition Every Buy/Sell transaction of the $ENCIRCLED
                    will attract an 5% fee on the DEX. These fees will be
                    converted to BUSD, and automatically distributed back to the
                    Encircled Wallet for the development of all utilities.
                  </h4>
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.transaction */}
          <div
            className="team position-relative"
            style={{ paddingTop: 85 }}
            id="team"
          >
            <div className="container">
              <h2 className="mb-60" data-aos="fade-up">
                Core Team
              </h2>
              <div className="row mb-5 pb-3">
                <div
                  className="col-md-6 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="team-card">
                    <img src="images/team-JT.png" alt="team JT" />
                    <h3>Justin Thompson</h3>
                    <p className="text-muted">
                      <em className="me-3">CEO/Founder</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/justin-thompson-071921121/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Justin has had more than 25 years hands-on experience in
                      the construction and engineering industry, across multiple
                      sectors, and covering projects of all sizes and levels of
                      complexity. As an executive manager, he has developed and
                      implemented strategies and policies, evaluated project
                      performance, and managed teams of upwards of 350 people
                      working on projects....{" "}
                      <a
                        href="#readMore-Justin"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Justin"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
                <div
                  className="col-md-6 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="team-card">
                    <img src="images/team-KE.png" alt="team KE" />
                    <h3>Kenda Enney</h3>
                    <p className="text-muted">
                      <em className="me-3">COO/Co-Founder</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/kenda-enney-122b8820/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Kenda is an expert in marketing, communication and client
                      relationships. She also has considerable experience in
                      long range strategic planning, and a solid understanding
                      of a wide range of business management applications.{" "}
                      <br />
                      She has specialized in developing multi-disciplinary teams
                      and ensuring that processes, training, and quality of
                      operations are reflected...{" "}
                      <a
                        href="#readMore-Kenda"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Kenda"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
                <div
                  className="col-md-6 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="team-card">
                    <img src="images/team-VN.png" alt="team VN" />
                    <h3>Vaidotas Norkus</h3>
                    <p className="text-muted">
                      <em className="me-3">CMO/Co-Founder</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/vnorkus/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Vaidotas has had a surprisingly wide range of experience,
                      and his CV demonstrates resourcefulness and dedication to
                      skills development. During his studies for a Bachelor’s
                      degree, he completed several training programs and
                      internships covering areas such as market research,
                      customer service, public relations, brand and design, and
                      operations management...{" "}
                      <a
                        href="#readMore-Vaidotas"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Vaidotas"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
                <div
                  className="col-md-6 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="team-card">
                    <img src="images/team-NW.png" alt="team NW" />
                    <h3>Nathan Wennerbom</h3>
                    <p className="text-muted">
                      <em className="me-3">CLO/Co-Founder</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/nathanwennerbom/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Nathan brings skills in UX UI design, digital design,
                      social media, and education. He is an experienced social
                      marketer, having worked independently with various
                      significant public figures such as Snoop Dog, Cameron
                      Smith and Liquor Brands to raise brand awareness and
                      sales...{" "}
                      <a
                        href="#readMore-Nathan"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Nathan"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
                <div
                  className="col-md-12 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="team-card">
                    <img src="images/team-VDC.png" alt="team VDC" />
                    <h3>Vanessa D Carey</h3>
                    <p className="text-muted">
                      <em className="me-3">
                        Social Media Account Manager/ Content Creator
                      </em>{" "}
                      <a
                        href="https://www.linkedin.com/in/vanessa-carey-38b801237/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Vanessa has more than 20 years’ experience creating
                      content for multimedia projects. Her background is as a
                      Social Media Manager and Content Developer. She has been
                      involved with website development and programming and
                      writing community-based software and animations. Vanessa
                      is a musician...{" "}
                      <a
                        href="#readMore-Vanessa"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Vanessa"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
                <div
                  className="col-md-12 col-lg-4 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="team-card">
                    <img src="images/team-qu.png" alt="team Quynh" />
                    <h3>Quynh Nguyen</h3>
                    <p className="text-muted">
                      <em className="me-3">Tech Lead</em>{" "}
                      <a
                        href="https://stackoverflow.com/users/5530315/quynh-nguyen"
                        target="_blank"
                      >
                        <img src="images/stackoverflow.png" alt="social" />
                      </a>
                      <a
                        className="ms-2"
                        href="https://github.com/Quynh-Nguyen"
                        target="_blank"
                      >
                        <img src="images/github.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Quynh is a talented web3 developer from Vietnam. He owns a
                      development agency called Digital Fortress. Quynh and his
                      team have been working on complex DeFi projects, where
                      they were implementing lending and borrowing solutions for
                      institutional clients. Quynh has delivered over 20+ IT
                      projects which include banking apps, and social media
                      networking platforms...{" "}
                      <a
                        href="#readMore-quynh"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-quynh"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-4 mb-4 */}
              </div>
              {/* /.row mb-5 */}
              {/* Modal - Justin */}
              <div
                className="modal fade"
                id="readMore-Justin"
                tabIndex={-1}
                aria-labelledby="readMore-JustinLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-JustinLabel"
                      >
                        Justin Thompson, CEO/Founder{" "}
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/justin-thompson-071921121/"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-JT-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="https://www.linkedin.com/in/justin-thompson-071921121/"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/linkedin.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">
                            Justin Thompson, CEO/Founder{" "}
                          </h5>
                          <p>
                            Justin has had more than 25 years hands-on
                            experience in the construction and engineering
                            industry, across multiple sectors, and covering
                            projects of all sizes and levels of complexity.{" "}
                          </p>
                          <p>
                            As an executive manager, he has developed and
                            implemented strategies and policies, evaluated
                            project performance, and managed teams of upwards of
                            350 people working on projects in excess of $50
                            million.
                          </p>
                          <p>
                            He is experienced in evaluating the general business
                            climate, works closely with clients, owners, and
                            developers, and stays abreast of technological
                            advances to ensure the best possible client service.
                          </p>
                          <p>
                            His skills and knowledge will be critical to the
                            Encircled project, which he will manage from concept
                            design to project completion.
                          </p>
                          <p>
                            Justin is married with 3 children. He enjoys the
                            outdoors and camping with his family in the Rocky
                            Mountains of Colorado. He is a youth football coach
                            and spends time helping to develop young people. He
                            is educating himself on crypto, blockchain, and
                            other investment opportunities.
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal - Kenda */}
              <div
                className="modal fade"
                id="readMore-Kenda"
                tabIndex={-1}
                aria-labelledby="readMore-KendaLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-KendaLabel"
                      >
                        Kenda Enney COO/Co-Founder{" "}
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/kenda-enney-122b8820/"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-KE-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="https://www.linkedin.com/in/kenda-enney-122b8820/"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/linkedin.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">
                            Kenda Enney COO/Co-Founder{" "}
                          </h5>
                          <p>
                            Kenda is an expert in marketing, communication, and
                            client relationships. She also has considerable
                            experience in long-range strategic planning and a
                            solid understanding of a wide range of business
                            management applications.
                          </p>
                          <p>
                            She has specialized in developing multi-disciplinary
                            teams and ensuring that processes, training, and
                            quality of operations are reflected across the
                            organization.
                          </p>
                          <p>
                            She will be an indispensable resource to the
                            Encircled project as it embarks on a marketing
                            drive, sets up business partnerships, and
                            coordinates and maintains critical oversight over
                            the resources needed for the multiple Encircled
                            channels.
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal - Vaidotas */}
              <div
                className="modal fade"
                id="readMore-Vaidotas"
                tabIndex={-1}
                aria-labelledby="readMore-VaidotasLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-VaidotasLabel"
                      >
                        Vaidotas Norkus, CMO/Co-Founder{" "}
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/vnorkus/"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-VN-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="https://www.linkedin.com/in/vnorkus/"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/linkedin.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">
                            Vaidotas Norkus, CMO/Co-Founder{" "}
                          </h5>
                          <p>
                            Vaidotas has had a surprisingly wide range of
                            experience, and his CV demonstrates resourcefulness
                            and dedication to skills development.
                          </p>
                          <p>
                            During his time studying for a Bachelor’s degree, he
                            completed training programmes and internships in
                            market research, customer service, public relations,
                            brand and design, and operations management. He
                            evaluated the success of funding for new businesses,
                            set up business relationships, attracted online
                            sales for new start-ups, and identified target
                            groups for new products.{" "}
                          </p>
                          <p>
                            Since graduation, he has added practical experience
                            in project management, procurement, and customer
                            service in the manufacturing and automotive
                            industries. At the same time, he has provided
                            freelance consulting advice and go-to-market
                            strategies to both well-established and start-up
                            fintech companies.{" "}
                          </p>
                          <p>
                            His range of skills, his experience of working in
                            multiple countries, his ability to speak five
                            languages, and the endorsement of his peers will
                            make him a versatile member of the Encircled team.
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal - Nathan */}
              <div
                className="modal fade"
                id="readMore-Nathan"
                tabIndex={-1}
                aria-labelledby="readMore-NathanLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-NathanLabel"
                      >
                        Nathan Wennerbom, CLO/Co-Founder
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/nathanwennerbom/"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-NW-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="https://www.linkedin.com/in/nathanwennerbom/"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/linkedin.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">
                            Nathan Wennerbom, CLO/Co-Founder
                          </h5>
                          <p>
                            This legendary coffee drinking marketer has a
                            passion for Edtech and emerging technology. Nathan
                            brings skills in UX UI design, digital design,
                            social media, and education.
                          </p>
                          <p>
                            He is an experienced social marketer, having worked
                            independently with various significant public
                            figures such as Snoop Dog, Cameron Smith and Liquor
                            Brands to raise brand awareness and sales. He is an
                            expert in social media marketing, SEO marketing,
                            Google Analytics, and influencer marketing.
                          </p>
                          <p>
                            He spent five years in a start-up as founder, lead
                            designer, project and business manager, team leader
                            and creator of educational systems and apps,
                            including the development of a unique language
                            assessment and learning tool. He also became a
                            skilled conference organizer and presenter. His
                            business brought him into contact with multiple seed
                            development programs, seed funding conventions and
                            investors.
                          </p>
                          <p>
                            He is not afraid of getting his hands dirty - as
                            demonstrated by his skills in construction and now
                            in the geophysics field.
                          </p>
                          <p>
                            Nathan will be an invaluable asset to the team as
                            they build the Encircled Connect and Encircled Learn
                            products.{" "}
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal - Vanessa */}
              <div
                className="modal fade"
                id="readMore-Vanessa"
                tabIndex={-1}
                aria-labelledby="readMore-VanessaLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-VanessaLabel"
                      >
                        Vanessa D Carey, Social Media Account Manager/Content
                        Creator
                      </h5>
                      <a
                        href="http://www.linkedin.com/in/vanessa-carey-38b801237"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-VDC-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="http://www.linkedin.com/in/vanessa-carey-38b801237"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/linkedin.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">
                            Vanessa D Carey, Social Media Account
                            Manager/Content Creator
                          </h5>
                          <p>
                            Vanessa has more than 20 years’ experience creating
                            content for multimedia projects. Her background is
                            as a Social Media Manager and Content Developer. She
                            has been involved with website development and
                            programming and writing community-based software and
                            animations. Vanessa is a musician who can play 14
                            different instruments. And she loves to go camping!
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal - quynh */}
              <div
                className="modal fade"
                id="readMore-quynh"
                tabIndex={-1}
                aria-labelledby="readMore-quynhLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0 px-md-4">
                      <h5
                        className="modal-title d-md-block d-none"
                        id="readMore-quynhLabel"
                      >
                        Quynh Nguyen
                      </h5>
                      <a
                        href="https://stackoverflow.com/users/5530315/quynh-nguyen"
                        className="d-md-none"
                        target="_blank"
                      >
                        <img src="images/stackoverflow.png" alt="social" />
                      </a>
                      <a
                        href="https://github.com/Quynh-Nguyen"
                        className="d-md-none ms-2"
                        target="_blank"
                      >
                        <img src="images/github.png" alt="social" />
                      </a>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body pt-0 pb-4 px-md-4">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            src="images/team-qu-lg.png"
                            className="img-fluid d-block rounded shadow-sm mb-3"
                            alt="team VDC"
                          />
                          <a
                            href="https://stackoverflow.com/users/5530315/quynh-nguyen"
                            className="d-none d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/stackoverflow.png" alt="social" />
                          </a>
                          <a
                            href="https://github.com/Quynh-Nguyen"
                            className="d-none ms-2 d-md-inline-block"
                            target="_blank"
                          >
                            <img src="images/github.png" alt="social" />
                          </a>
                        </div>
                        {/* /.col-md-3 */}
                        <div className="col-md-9">
                          <h5 className="pb-1 d-md-none">Quynh Nguyen</h5>
                          <p>
                            Quynh is a talented web3 developer from Vietnam. He
                            owns a development agency called Digital Fortress.
                            Quynh and his team have been working on complex DeFi
                            projects, where they were implementing lending and
                            borrowing solutions for institutional clients. Quynh
                            has delivered over 20+ IT projects which include
                            banking apps, and social media networking platforms.
                            His knowledge of IT infrastructure allows efficient
                            development of web-based projects. Quynh is part of
                            the team and is working as a technical Lead for
                            Encircled, on designing and developing the Connect,
                            Launch, and Learn modules.
                          </p>
                        </div>
                        {/* /.col-md-9 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="mb-60" data-aos="fade-up">
                Advisors
              </h2>
              <div className="row">
                <div
                  className="col-md-6 col-lg-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="team-card">
                    <img src="images/team-LN.png" alt="team LN" />
                    <h3>Lukas Navickas</h3>
                    <p className="text-muted">
                      <em className="me-3">Advisor</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/lukas-navickas/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Lukas is an IT and crypto expert. He has a Bachelor’s and
                      two Masters Degrees. His work experience includes a stint
                      as Software Developer and Scrum Master at Atos, one of the
                      largest IT and digital transformation companies in the
                      world. He followed this up as an IT consultant and project
                      manager with...{" "}
                      <a
                        href="#readMore-Lukas"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Lukas"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-6 mb-4 */}
                <div
                  className="col-md-6 col-lg-6 mb-4"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="team-card">
                    <img src="images/team-GP.png" alt="team GP" />
                    <h3>Gabriele Pauliukaite</h3>
                    <p className="text-muted">
                      <em className="me-3">Advisor</em>{" "}
                      <a
                        href="https://www.linkedin.com/in/gabriele-pauliukaite-763676114/"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </p>
                    <p className="text-muted">
                      Gabriele has a professional and academic background in
                      data science and finance at Copenhagen Business School.
                      While she started her corporate career in finance in a
                      Nasdaq 100 company, she made her career in tech sales and
                      business development, advising a series of startups...{" "}
                      <a
                        href="#readMore-Gabriele"
                        data-bs-toggle="modal"
                        data-bs-target="#readMore-Gabriele"
                        className="btn-link"
                      >
                        read more
                      </a>
                    </p>
                  </div>
                  {/* /.team-card */}
                </div>
                {/* /.col-md-6 col-lg-6 mb-4 */}
              </div>
            </div>
            {/* /.container */}
            <img
              src="images/shape-9.svg"
              alt="shape 9"
              className="shape-9"
              data-aos="zoom-out"
              data-aos-delay={2000}
            />
          </div>
          {/* /.team */}
          {/* Modal - Lukas */}
          <div
            className="modal fade"
            id="readMore-Lukas"
            tabIndex={-1}
            aria-labelledby="readMore-LukasLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header border-0 px-md-4">
                  <h5
                    className="modal-title d-md-block d-none"
                    id="readMore-LukasLabel"
                  >
                    Lukas Navickas
                  </h5>
                  <a
                    href="https://www.linkedin.com/in/lukas-navickas/"
                    className="d-md-none"
                    target="_blank"
                  >
                    <img src="images/linkedin.png" alt="social" />
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body pt-0 pb-4 px-md-4">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="images/team-LN-lg.png"
                        className="img-fluid d-block rounded shadow-sm mb-3"
                        alt="team VDC"
                      />
                      <a
                        href="https://www.linkedin.com/in/lukas-navickas/"
                        className="d-none d-md-inline-block"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </div>
                    {/* /.col-md-3 */}
                    <div className="col-md-9">
                      <h5 className="pb-1 d-md-none">Lukas Navickas</h5>
                      <p>
                        Lukas is an IT and crypto expert. He has a Bachelor’s
                        and two Masters degrees. His work experience includes a
                        stint as Software Developer and Scrum Master at Atos,
                        one of the world’s largest IT and digital transformation
                        companies. He followed this up as an IT consultant and
                        project manager with Orderfox AG, working on advanced
                        web technologies.{" "}
                      </p>
                      <p>
                        Lukas started investing in crypto in 2017. He was an
                        early investor of DeFi in the summer of 2020, analyzing
                        &amp; investing in Ethereum-based borrowing &amp;
                        lending protocols. In 2021 he noticed the need for a
                        simple yield generation platform to automate complex
                        DeFi 2.0 opportunities. He came up with the idea to
                        create Proteus Finance based on the Terra Ecosystem.
                      </p>
                      <p>
                        Lukas previously co-founded start-ups in Brazil, in
                        Portugal as part of the Erasmus for Young Entrepreneurs
                        programme, and within the hotel management and gaming
                        industries. His business was sold successfully to
                        Condly, known for its property management software.{" "}
                      </p>
                      <p>
                        Lukas speaks multiple languages including French,
                        German, Spanish, Portuguese, English, and Lithuanian.
                      </p>
                    </div>
                    {/* /.col-md-9 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal - Gabriele */}
          <div
            className="modal fade"
            id="readMore-Gabriele"
            tabIndex={-1}
            aria-labelledby="readMore-GabrieleLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header border-0 px-md-4">
                  <h5
                    className="modal-title d-md-block d-none"
                    id="readMore-GabrieleLabel"
                  >
                    Gabriele Pauliukaite
                  </h5>
                  <a
                    href="https://www.linkedin.com/in/gabriele-pauliukaite-763676114/"
                    className="d-md-none"
                    target="_blank"
                  >
                    <img src="images/linkedin.png" alt="social" />
                  </a>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body pt-0 pb-4 px-md-4">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src="images/team-GP-lg.png"
                        className="img-fluid d-block rounded shadow-sm mb-3"
                        alt="team VDC"
                      />
                      <a
                        href="https://www.linkedin.com/in/gabriele-pauliukaite-763676114/"
                        className="d-none d-md-inline-block"
                        target="_blank"
                      >
                        <img src="images/linkedin.png" alt="social" />
                      </a>
                    </div>
                    {/* /.col-md-3 */}
                    <div className="col-md-9">
                      <h5 className="pb-1 d-md-none">Gabriele Pauliukaite</h5>
                      <p>
                        Gabriele has a professional and academic background in
                        data science and finance at Copenhagen Business School.
                        While she started her corporate career in finance in a
                        Nasdaq100 company, she made her career in tech sales and
                        business development, advising a series of startups in
                        Scandinavia.
                      </p>
                      <p>
                        Gabriele worked for a few years in tech sales in one of
                        the Scandinavian startups based in Copenhagen Business
                        School Campus and afterward moved to work as a BI
                        consultant in a pharmaceutical company. Her early
                        professional career started in the credit risk
                        management industry at Intrum company (ex Lindorff)
                        where she worked as an analyst for non-performing loans
                        portfolios.{" "}
                      </p>
                      <p>
                        Besides her professional life, she co-founded USA-based
                        Students for Liberty NGO in Europe and was delegated to
                        work in the World Business Dialogue and World Economic
                        Forum.
                      </p>
                    </div>
                    {/* /.col-md-9 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="advantages">
            <div className="container">
              <h2 className="mb-60" data-aos="fade-up">
                Advantages
              </h2>
              <div
                className="row text-muted"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="col-md-4">
                  <img src="images/icon-ETL.svg" alt="ETL" className="mb-10" />
                  <p>
                    With our utilities we will make it extremely easy for
                    investors and projects to come together by creating
                    solutions via utilities for crypto currency.
                  </p>
                </div>
              </div>
              {/* /.row */}
              <div
                className="row text-muted justify-content-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="col-md-4">
                  <img src="images/icon-ECT.svg" alt="ECT" className="mb-10" />
                  <p>
                    Our main focus is providing better investment opportunities,
                    building a trustworthy community, and educating our
                    community along the way.
                  </p>
                </div>
              </div>
              {/* /.row */}
              <div
                className="row text-muted justify-content-end"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="col-md-4">
                  <img src="images/icon-SC.svg" alt="SC" className="mb-10" />
                  <p>
                    We will be creating utilities that help minimize the risk of
                    our community being preyed upon by scammers.
                  </p>
                </div>
              </div>
              {/* /.row */}
              <h4 className="text-ex-bold">
                A rising tide raises all ships! We are that, Tide!
              </h4>
            </div>
          </div>
          {/* /.advantages */}
          <div className="partnerships" id="partners">
            <div className="container">
              <h2 className="mb-60" data-aos="fade-up">
                Our Partners
              </h2>
              <div
                className="owl-carousel owl-partner owl-theme"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="item">
                  <a href="https://www.optimisus.com/" target="_blank">
                    <img
                      src="images/partner-logo-1.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="https://www.goodysimprints.net/" target="_blank">
                    <img
                      src="images/partner-logo-2.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="https://twitter.com/DeFi_Tycoon" target="_blank">
                    <img
                      src="images/partner-logo-4.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="https://newsmovesmarketsforex.com/" target="_blank">
                    <img
                      src="images/partner-logo-3.JPG"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://twitter.com/CryptoEmdarks?s=20&t=EnzV08VG95mWGwH1AMUetQ"
                    target="_blank"
                  >
                    <img
                      src="images/partner-logo-5.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://twitter.com/D_DeFi_AcaDemy?s=20&t=ZbCVJp0V2c-NhRvQPgsM1g"
                    target="_blank"
                  >
                    <img
                      src="images/partner-logo-8.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://twitter.com/cryptomoonquee?s=21&t=9je3VB0QMdNNqsM8aaQ8oA"
                    target="_blank"
                  >
                    <img
                      src="images/partner-logo-9.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a
                    href="https://twitter.com/kumarbaaboo1?s=21&t=9je3VB0QMdNNqsM8aaQ8oA"
                    target="_blank"
                  >
                    <img
                      src="images/partner-logo-10.png"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="item">
                  <a href="https://binbits.com/" target="_blank">
                    <img
                      src="images/partner-logo-11.jpg"
                      alt="logo"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              {/* <div class="row text-center justify-content-center">
						<div class="col-md-3 col-sm-3 col-5 mb-3" data-aos="fade-up" data-aos-delay="100">
							<img src="images/partner-logo-1.png" alt="logo" class="img-fluid" />
						</div>
						<div class="col-md-3 col-sm-3 col-5 mb-3" data-aos="fade-up" data-aos-delay="200">
							<img src="images/partner-logo-2.png" alt="logo" class="img-fluid" />
						</div>
					</div> */}
              {/* /.row */}
            </div>
          </div>
          {/* /.partnerships */}
        </main>
        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-inner d-flex align-items-center flex-md-row justify-content-md-between flex-column justify-content-center">
              <a href="#">
                <img
                  src="images/TP-Logo-footer.png"
                  className="img-fluid mb-md-0 mb-4"
                  alt="footer logo"
                />
              </a>
              <h4 className="m-0 pt-md-0 pt-3">
                <a href="mailto:team@encircled.io" target="_top">
                  team@encircled.io
                </a>
              </h4>
            </div>
          </div>
          {/* /.container */}
        </footer>
      </div>

      <Script type="text/javascript" src="js/jquery-3.3.1.min.js"></Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
      <Script type="text/javascript" src="js/particles.js"></Script>
      <Script type="text/javascript" src="js/tilt.jquery.min.js"></Script>
      <Script type="text/javascript" src="js/owl.carousel.js"></Script>
      <Script type="text/javascript" src="js/custom.js"></Script>
    </>
  );
}
