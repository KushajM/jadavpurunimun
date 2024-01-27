import React from 'react'
import { motion } from 'framer-motion';
import { links } from './data.js';

const variants = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

const Links = () => {
 return (
    <motion.div className="links" variants={variants} >
      {links.map((item) => (
        <motion.a
          key={item.name}
          href={item.hash}

          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links