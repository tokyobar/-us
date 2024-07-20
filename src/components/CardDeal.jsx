import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const CardDeal = () => (
    <section className={layout.section}>
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionInfo}
        >
            <h2 className={styles.heading2}>
            TokyoBar Vapes are 100% authentic <br className="sm:block hidden" /> in
                few easy steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Ensuring you receive the highest quality vaping experience.
            Each product is verified and crafted with genuine materials for unparalleled satisfaction.
            </p>

            <Button styles={`mt-10`} />
        </motion.div>

        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className={layout.sectionImg}
        >
            <img
                src={card}
                alt="billing"
                className="md:max-w-none max-w-lg w-[100%] h-auto"
            />
        </motion.div>
    </section>
)

export default CardDeal
