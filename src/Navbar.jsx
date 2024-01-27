import React,{ useState } from 'react';
import "./Navbar.scss"
import Links from "./Links.jsx"
import ToggleButton from "./ToggleButton.jsx";
import {motion} from 'framer-motion';

const Navbar = () => {
    const [open,setOpen] = useState(false)
    console.log(open)

    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
            position:"fixed",
            zIndex:2,
            height:"100vh",
            
            
    
        },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },
            position:"fixed",
            zIndex:2,
            height:"100vh",
    
        },
      };


    
      return (
        <div className="container1 w-full">
      <motion.div className="sidebar z-[999]" animate={open ? "open":"closed"}>
        <motion.div className="bg" variants = {variants} >
            <Links />
            </motion.div>
        
        <ToggleButton  setOpen={setOpen}/>
    
        </motion.div>
        <div className="logo-container">
      
      </div>
      </div>
      )
}

export default Navbar