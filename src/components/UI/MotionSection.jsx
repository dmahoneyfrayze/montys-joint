// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const MotionSection = ({ children, className, delay = 0, ...props }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MotionSection;
