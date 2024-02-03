import "./RightSection.css";

const RightSection = () => {
  return (
    <div className="right-section1">
      <img className="right-bg-icon" alt="" src="/rightbg@2x.png" />
      <div className="right-bg-overlay" />
      <div className="right-bg-overlay-2" />
      <div className="checked-frame-group">
        <div className="checked-frame">
          <div className="line-copy-parent">
            <img className="checked-icon" alt="" src="/checked.svg" />
            <img className="line-icon" loading="eager" alt="" src="/line.svg" />
          </div>
          <div className="right-frame">
            <div className="checked-frame-s-t-e-p">
              <div className="lorem-text-para">STEP 1</div>
            </div>
            <div className="text-instruction">Link your Reddit Account</div>
          </div>
        </div>
        <div className="checkmark-frame">
          <img className="checked-icon1" alt="" src="/checked-1.svg" />
          <div className="line-vector">
            <div className="step-1-wrapper">
              <div className="step-1">STEP 2</div>
            </div>
            <div className="lorem-ipsum-dolor">Upload your content</div>
          </div>
        </div>
      </div>
      <div className="input-email-copy-frame-wrapper">
        <div className="input-email-copy-frame">
          <div className="checked-frame1">
            <img className="checked-icon2" alt="" src="/checked-2.svg" />
            <img
              className="line-copy-2"
              loading="eager"
              alt=""
              src="/line-copy-2.svg"
            />
          </div>
          <div className="frame-parent">
            <div className="step-2-wrapper">
              <div className="step-2">STEP 3</div>
            </div>
            <div className="lorem-ipsum-dolor1">Customizations</div>
          </div>
          <img
            className="line-copy-icon"
            loading="eager"
            alt=""
            src="/line-copy-2.svg"
          />
        </div>
      </div>
      <div className="right-section-inner">
        <div className="checked-parent">
          <img className="checked-icon3" alt="" src="/checked-2.svg" />
          <div className="frame-group">
            <div className="step-3-wrapper">
              <div className="step-3">STEP 4</div>
            </div>
            <div className="lorem-ipsum-dolor2">Your lateste activity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
