import CheckedLineVector from "../CheckLineVector/CheckedLineVector";
import "./RightSection2.css";

const RightSection2 = () => {
  return (
    <div className="right-section3">
      <img className="right-bg-icon2" alt="" src="/rightbg@2x.png" />
      <div className="right-bg-overlay2" />
      <div className="right-bg-overlay-22" />
      <CheckedLineVector />
      <div className="checked-line-frame1">
        <div className="line-copy-checkmark-parent">
          <div className="line-copy-checkmark">
            <img className="checked-icon9" alt="" src="/checked.svg" />
            <img
              className="line-copy-22"
              loading="eager"
              alt=""
              src="/line-copy-2.svg"
            />
          </div>
          <div className="right-bg-overlay-rect">
            <div className="step-2-frame">
              <div className="step-22">STEP 3</div>
            </div>
            <div className="lorem-ipsum-dolor6">Customizations</div>
          </div>
        </div>
      </div>
      <div className="checked-line-frame2">
        <div className="frame-parent3">
          <div className="checked-parent3">
            <img className="checked-icon10" alt="" src="/checked-1.svg" />
            <img className="checked-icon11" alt="" src="/checked-2.svg" />
          </div>
          <div className="frame-parent4">
            <div className="step-3-frame">
              <div className="step-32">STEP 4</div>
            </div>
            <div className="lorem-ipsum-dolor7">Your lateste activity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection2;
