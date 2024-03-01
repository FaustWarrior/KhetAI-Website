import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import BgVid from "../assets/BgVideo.mp4";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row z-2 flex-col ${styles.paddingY}`}>
      <video autoPlay loop muted className="absolute inset-0 z-1 opacity-40 visible object-cover w-full h-full">
        <source src={BgVid} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
      <div className={`flex-1 ${styles.flexStart} flex-col z-10 xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row z-10 items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} z-10  ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row z-10 justify-between items-center w-full">
          <h1 className="flex-1 font-poppins z-10 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Lorem <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Ipsum text</span>{" "}
          </h1>
          <div className="ss:flex z-0 hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold z-10 ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Lorem ipsum dolor sit amet
        </h1>
        <p className={`${styles.paragraph} z-10 max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna ac.
        </p>
      </div>

      <div className={`flex-1 flex z- 10 ${styles.flexCenter} md:my-0 my-10 relative`}>
        

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden z-1 ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
