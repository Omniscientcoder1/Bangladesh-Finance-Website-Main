import Image from "next/image";
import about_img_1 from "/public/images/about-img-1.png";
import about_img_2 from "/public/images/about-img-2.png";
import about_img_3 from "/public/images/about-img-3.png";

const Hero = () => {
  return (
    <section className="about-section">
      <div className="overlay pt-120 pb-120">
        <div className="container wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-area">
                <h5 className="sub-title">About Us</h5>
                <h2 className="title">
                  Your ally in achieving ambition beyond borders
                </h2>
                <p>
                Bangladesh Finance Limited (Bangladesh Finance), formerly known as BD Finance, is one of the most well-known financial institutions in Bangladesh, having served the people of Bangladesh since 1999.

 

In the next days, the 23-year-old company expects to see even more incredible changes. The route to becoming the country’s most renowned financial institution began with a higher credit rating, a strong client deposit base, raising bonds and foreign capital, receiving approval to launch an Islamic wing, and consistently maintaining a low NPL rate.

Bangladesh Finance, along with its two subsidiaries Bangladesh Finance Securities Limited (Bangladesh Finance Security) and Bangladesh Finance Capital Limited, is currently on a mission to provide a complete financial solution throughout the country.

 

Bangladesh Finance is ready to accompany this country as it travels at breakneck speed down the path of economic progress in a never-ending series of successes. We want to be a financial partner of the Bangladeshi people.

 

As we continue on our journey to a thriving Bangladesh, we believe in the collective picture of the country’s economic development.

 

With our new logo, we’ve made a big step forward. Our mnemonic “BIJOY” is built on these three pillars of trust, growth, and prosperity. Bangladesh Finance will be the people of Bangladesh’s most trusted financial institution, bringing financial growth to their investments. Investment growth will offer financial prosperity to the people.
                </p>
              </div>
              <div className="row cus-mar">
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number">
                      <h4 className="counter">98</h4>
                      <h4 className="static">%</h4>
                    </div>
                    <p>Customer satisfaction</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">250</h4>
                      <h4 className="static">M</h4>
                    </div>
                    <p>Monthly active users</p>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4">
                  <div className="count-content text-center">
                    <div className="count-number ">
                      <h4 className="counter">100</h4>
                      <h4 className="static">K</h4>
                    </div>
                    <p>New Users per week</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <div className="img-area">
                <Image className="img-1" src={about_img_1} alt="image" />
                <Image className="img-2" src={about_img_2} alt="image" />
                <Image className="img-3" src={about_img_3} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
