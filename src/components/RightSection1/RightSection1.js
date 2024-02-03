import CheckedLineVector from "../CheckLineVector/CheckedLineVector";
import "./RightSection1.css";

const RightSection1 = () => {
  return (
    <div className="right-section2">
      <img className="right-bg-icon1" alt="" src="/rightbg@2x.png" />
      <div className="right-bg-overlay1" />
      <div className="right-bg-overlay-21" />
      <CheckedLineVector />
      <div className="frame-frame">
        <div className="frame-frame-checked">
          <div className="checked-parent1">
            <img className="checked-icon6" alt="" src="/checked-1.svg" />
            <img className="checked-icon7" alt="" src="/checked-2.svg" />
            <img
              className="line-copy-21"
              loading="eager"
              alt=""
              src="/line-copy-2.svg"
            />
          </div>
          <div className="steps-frame">
            <div className="step-2-container">
              <div className="step-21">STEP 3</div>
            </div>
            <div className="lorem-ipsum-dolor4">Customizations</div>
          </div>
        </div>
      </div>
      <div className="frame-frame1">
        <div className="checked-parent2">
          <img className="checked-icon8" alt="" src="/checked-2.svg" />
          <div className="frame-parent2">
            <div className="step-3-container">
              <div className="step-31">STEP 4</div>
            </div>
            <div className="lorem-ipsum-dolor5">Your lateste activity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection1;
