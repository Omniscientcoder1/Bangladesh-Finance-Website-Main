import AboutLoan from "../common/AboutLoan";
import about_car_loan_Illus from "/public/images/about-car-loan-Illus.png";

const AboutCarLoan = () => {
  return (
    <AboutLoan
      btnText="Apply Now"
      img={about_car_loan_Illus}
      link="/car-loan-form"
    >
      <div className="section-text">
        <h5 className="sub-title">Why you should take Auto Loan from Bangladesh Finance</h5>
        <h2 className="title">Convenient Auto loans. Designed for you.</h2>
        <ul>
          <li>Maximum loan amount: Up to 80% of the quoted price.</li>
          <li>Attractive interest rates and an easy, swift processing system.</li>
          <li>Auto loans available for:
            <ul>
              <li>Salaried and self-employed individuals,</li>
              <li>Proprietorships and partnership firms,</li>
              <li>Companies</li>
            </ul>
          </li>
          <li>Loan tenure: Up to 72 months.</li>
        </ul>
      </div>
    </AboutLoan>
  );
};

export default AboutCarLoan;
