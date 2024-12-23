import Image from "next/image";
import AboutLoan from "../common/AboutLoan";
import about_personal_loan_Illus from "/public/images/about-personal-loan-Illus.png";
import check from "/public/images/icon/check.png";

const AboutPersonalLoan = () => {
  return (
    <AboutLoan
      img={about_personal_loan_Illus}
      btnText="Apply for a Personal loan"
      link="/#personal-loan-form"
    >
      <div className="section-text">
        <h5 className="sub-title">Meet your financial needs</h5>
        <h2 className="title">Borrow better for the planned and unexpected</h2>
        <p>
        Bangladesh Finance offers personal loan facility to its clients to help them to ensure any kind of emergency fund requirements.
        </p>
        <ul className="list">
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Flexible repayment, matched with borrower’s cash flow.</span>
          </li>
          <li className="list-item d-flex align-items-center">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Simplicity of documentation and approval procedures</span>
          </li>
          <li className="list-item d-flex align-items-center ">
            <span className="check d-flex align-items-center justify-content-center">
              <Image src={check} alt="icon" />
            </span>
            <span>Early settlement option, either in full or partial, is allowed.</span>
          </li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutPersonalLoan;
