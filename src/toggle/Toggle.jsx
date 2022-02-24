import React, { useContext } from 'react'
import { ThemeContext } from '../context';
import "./Toggle.css";

const Toggle =() => {
    const theme = useContext(ThemeContext);
    const handel = ()=>{
        theme.dispatch({ type: "TOGGLE" });
    }
    return(
        <div className='t'>
         <img src="sunoriginal.jpg" alt="" className='t-icon'/>
         <img src="moonoriginal.jpg" alt="" className='t-icon'/>
         <div className='t-button' onClick={handel} style={{left:theme.state.darkMode ? 0 : 25 }}></div>
         </div>
        );
};

export default Toggle;

