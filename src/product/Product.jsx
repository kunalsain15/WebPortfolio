import React from "react";
import "./Product.css";

 const Product = ({img,link}) => {
    return (
      <div className='p'>
      <div className='p-browser'>
      <div className='p-circle'></div>
      <div className='p-circle'></div>
      <div className='p-circle'></div>
      </div>
     <a href={link}>
     <img src={img} className="p-img" alt=""/>
     </a>
      </div>
    );
};

export default Product;


