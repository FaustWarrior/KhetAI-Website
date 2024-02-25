import React, {useState} from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import "./Button.css"

function Testimonials() {
  const [showFeedback, setShowFeedback] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const toggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Know the best <br className="sm:block hidden" /> crops for you
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    <button class="button-29" onClick={toggleFeedback}>Show Feedback</button>
      {showFeedback && (
        <div className="feedback-container">
          {shuffleArray (feedback).slice(0,3).map((card) =>
            <FeedbackCard key={card.id} {...card} />
          )}
        </div>
      )}
    </div>
  </section>
    

   

  );
}

export default Testimonials;















