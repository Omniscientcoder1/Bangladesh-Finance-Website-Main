import Link from "next/link";
import BigBanner from "../common/BigBanner";

const Banner = () => {
  return (
    <BigBanner cls="account">
      <div className="main-content banner-mar">
        <div className="section-text">
          <h5 className="sub-title">
            The right financial help, at the right time
          </h5>
          <h2 className="title">A Financial Institution You can truely count on</h2>
          <p>
          Bangladesh Finance Provides wide range of services that can ensure your desirable future as well as make your present dreams true.
          </p>
        </div>
        <Link href="/register" className="cmn-btn">
          Apply Now
        </Link>
      </div>
    </BigBanner>
  );
};

export default Banner;
