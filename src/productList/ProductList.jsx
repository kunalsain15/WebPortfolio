import "./ProductList.css";
import Product from "../product/Product";
import {products} from "../data/Data"; 

const ProductList = () => {
  return (
    <div className='p1'>
     <div className='p1-texts'>
     <h1 className='p1-title'> create & inspire. It's  Lama</h1>
     <p className='p1-disc'>
     Lama is a create protofolio that your work has been waiting beautiful
     homes, stunning portfolio styles & a whole lot inside
     </p>
     </div>
     <div className='p1-list'>
     {products.map((item) => (
      <Product key={item.id} img={item.img} link={item.link}/>
     ))}

     </div>
    </div>
    
  );
};

 export default ProductList;



