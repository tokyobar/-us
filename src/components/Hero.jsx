import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'
import { motion } from 'framer-motion'
import { variants } from '../library/framer'

const Hero = () => {
    return (
        <section
            id="home"
            className={`flex md:flex-row flex-col ${styles.paddingY} xl:justify-center xl:items-center`}
        >
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants}
                className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
            >
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <img
                        src={discount}
                        alt="discount"
                        className="w-[32px] h-[32px]"
                    />
                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">100%</span> Great{' '}
                        <span className="text-white">Flovours</span> Guarenteed
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        All New <br className="sm:block hidden" />{' '}
                        <span className="text-gradient">TOKYOBAR</span>{' '}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>

    
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Experience the vibrant flavors and sleek design,
                capturing the spirit of the city in every puff. 
                </p>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants}
                className={`flex-1 flex-col ${styles.flexCenter} md:my-0 my-10 relative`}
            >
                <img
                    src={robot}
                    alt="billing"
                    className="self-end max-w-lg w-[100%] h-auto relative z-[5]"
                />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={variants}
            >
                <div className={`ss:hidden ${styles.flexCenter}`}>
                    <GetStarted />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
