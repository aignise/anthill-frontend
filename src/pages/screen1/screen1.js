import Navbar from "../../components/Navbar/Navbar.js";
import RightSection from "../../components/RightSection/RightSection.js";
import "./screen1.css";

const Screen1 = () => {
  return (
    <div className="template-6sign-up">
      <div className="bg-main" />
      <main className="bg-main-parent">
        <div className="bg-main1" />
        <div className="frame-sign-up">
          {/* <img
            className="puzzle-icon"
            loading="eager"
            alt=""
            src="/puzzle-icon.svg"
          /> */}
          <Navbar/>
          
        </div>
        <div className="frame-sign-in-copy-wrapper">
          <div className="frame-sign-in-copy">
            <div className="email-input-wrapper">
              <div className="email-input">
                <h1 className="start-your-14-day">Link Your Reddit Account</h1>
                <div className="already-member-login">
                  <div className="already-a-member">
                    Move with us one step forward !
                  </div>
                </div>
              </div>
            </div>
            <form className="password-label">
              <div className="inputname">
                <div className="bg" />
                <div className="first-name">Reddit Username</div>
              </div>
              <div className="frame-container">
                <div className="inputname1">
                  <div className="bg1" />
                  <div className="first-name1">Client Id</div>
                </div>
                <div className="inputname2">
                  <div className="bg2" />
                  <div className="first-name2">Client Secret</div>
                </div>
              </div>
              <div className="inputemail-copy">
                <div className="bg3" />
                <div className="password">Password</div>
                <img className="ex-iconeye" alt="" src="/exiconeye@2x.png" />
              </div>
              <div className="text-confirmation-message">
                <img
                  className="text-confirmation-message-child"
                  loading="eager"
                  alt=""
                  src="/group-4.svg"
                />
                <div className="checked-line-frame">
                  <div className="btn-prytemplate-2">
                    <div className="btn-prytemplate-2-child" />
                    <b className="next">EDIT</b>
                  </div>
                  <div className="first-sign-up-frame">
                    <div className="btn-prytemplate-21">
                      <div className="btn-prytemplate-2-item" />
                      <b className="next1">SAVE</b>
                    </div>
                  </div>
                  <div className="template-frames">
                    <div className="sign-in-frame">Password Strength</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="right-section-frame">
        {/* <div className="right-section">
            <div className="btn-prytemplate1-2">
              <div className="btn-prytemplate1-2-child" />
              <div className="sign-in">Log Out</div>
            </div>
          </div> */}
          <RightSection />
        </div>
      </main>
    </div>
  );
};

export default Screen1;
