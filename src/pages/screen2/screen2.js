import AlreadyAMemberLoginCopy from "../../components/FileUpload/AlreadyAMemberLoginCopy.js";
import RightSection1 from "../../components/RightSection1/RightSection1.js";
import "./screen2.css";

const Screen2 = () => {
  return (
    <div className="template-6sign-up1">
      <div className="bg-main2" />
      <main className="bg-main-group">
        <div className="bg-main3" />
        <div className="puzzle-icon-wrapper">
          <img
            className="puzzle-icon1"
            loading="eager"
            alt=""
            src="/puzzle-icon.svg"
          />
        </div>
        <div className="start-your-day-free-trial-butt">
          <AlreadyAMemberLoginCopy />
        </div>
        <div className="rightbgoverlay-rectangle">
          <div className="template-button">
            <div className="btn-prytemplate1-21">
              <div className="btn-prytemplate1-2-item" />
              <div className="sign-in1">Log Out</div>
            </div>
          </div>
          <RightSection1 />
        </div>
      </main>
    </div>
  );
};

export default Screen2;
