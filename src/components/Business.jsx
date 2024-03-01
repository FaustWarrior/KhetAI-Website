import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Fusing Remote Sensing <br className="sm:block hidden" />and Deep Learning to <br className="sm:block hidden" />help 
      Farmers with
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Pellentesque dignissim enim sit amet venenatis urna. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Penatibus et magnis dis parturient montes. In hac habitasse platea dictumst quisque sagittis purus sit. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim
      </p>

      <Button styles={`mt-10`} buttonText="Submit" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
