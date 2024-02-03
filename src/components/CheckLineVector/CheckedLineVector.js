import "./CheckedLineVector.css";

const CheckedLineVector = () => {
  return (
    <div className="checked-line-vector">
      <div className="fourth-step-frame">
        <div className="checked-group">
          <img className="checked-icon4" alt="" src="/checked.svg" />
          <img className="line-icon1" loading="eager" alt="" src="/line.svg" />
        </div>
        <div className="background-rectangle">
          <div className="next-btn-text">
            <div className="right-section-frame1">STEP 1</div>
          </div>
          <div className="text">Link your Reddit Account</div>
        </div>
      </div>
      <div className="line-copy-vector">
        <div className="checked-container">
          <img className="checked-icon5" alt="" src="/checked.svg" />
          <img
            className="line-copy-icon1"
            loading="eager"
            alt=""
            src="/line-copy-2.svg"
          />
        </div>
        <div className="frame-parent1">
          <div className="step-1-container">
            <div className="step-11">STEP 2</div>
          </div>
          <div className="lorem-ipsum-dolor3">Upload your content</div>
        </div>
      </div>
    </div>
  );
};

export default CheckedLineVector;
