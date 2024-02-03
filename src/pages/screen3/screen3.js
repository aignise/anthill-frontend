import LoginFrame from "../../components/WebUrl/WebUrl";
import RightSection2 from "../../components/RightSection2/RightSection2";
import "./screen3.css";

const Screen3 = () => {
  return (
    <div className="template-6sign-up2">
      <div className="bg-main4" />
      <main className="bg-main-container">
        <div className="bg-main5" />
        <div className="puzzle-icon-container">
          <img
            className="puzzle-icon2"
            loading="eager"
            alt=""
            src="/puzzle-icon.svg"
          />
        </div>
        <div className="frame-start-your-day-free-tria">
          <LoginFrame />
        </div>
        <div className="frame-s-i-g-n-i-n">
          <div className="right-content-frame">
            <div className="btn-prytemplate1-22">
              <div className="btn-prytemplate1-2-inner" />
              <div className="sign-in2">Log Out</div>
            </div>
          </div>
          <RightSection2 />
        </div>
      </main>
    </div>
  );
};

export default Screen3;
