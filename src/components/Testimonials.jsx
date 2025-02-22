import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Testimonials = () => (
    <section
        id="clients"
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        >
            <h2 className={styles.heading2}>
                Users <br className="sm:block hidden" /> saying about
                us
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                Premium materials, genuine flavors – that’s TokyoBar.
                </p>
            </div>
        </motion.div>

        <div className="flex gap-6 flex-wrap justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
)

export default Testimonials
