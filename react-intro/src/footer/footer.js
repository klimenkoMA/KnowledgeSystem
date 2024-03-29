import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 1, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}
        >
            <div className="footer">
                <p>&copy; 2024 Система знаний</p>
                <p>Made with using React</p>
            </div>
        </motion.footer>
    );
};

export default Footer;