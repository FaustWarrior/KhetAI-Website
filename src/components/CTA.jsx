import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Odio morbi quis commodo odio aenean </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=41.9&lng=12.5&themeId=DEFAULT-THEME&toTime=2024-02-23T09%3A28%3A29.701Z">
        <Button buttonText="Get Started"/>
      </a>
    </div>
  </section>
);

export default CTA;
