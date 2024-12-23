// import Link from "next/link";
// import { useEffect, useRef } from "react";
// import { FaAngleDoubleUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const scrollTop = useRef();

//   useEffect(() => {
//     window.scroll({
//       top: 0,
//       left: 0,
//     });
//   });

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 200) {
//         scrollTop.current.classList.add("active");
//       } else {
//         scrollTop.current.classList.remove("active");
//       }
//     });
//   }, []);

//   return (
//     <Link href="#gotoTop" className="scrollToTop" ref={scrollTop}>
//       <i>
//         <FaAngleDoubleUp />
//       </i>
//     </Link>
//   );
// };

// export default ScrollToTop;


import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollTop = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTop.current) {
        if (window.scrollY > 200) {
          scrollTop.current.classList.add("active");
        } else {
          scrollTop.current.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scrollToTop"
      ref={scrollTop}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i>
        <FaAngleDoubleUp />
      </i>
    </button>
  );
};

export default ScrollToTop;
