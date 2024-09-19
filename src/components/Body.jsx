import { useEffect, useState } from "react";  
import ProductCard from "./ProductCard";
// import { Link } from "react-router-dom";

const Body = () => {
    const[product, setProduct] = useState([]);

    useEffect(() => {
        getProducts();
    },[])

    const getProducts = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const json = await data.json();
        console.log(json);
        
        setProduct(json);
    };

    return (
        <div className="container">
            <div className="row">
                {product?.map((p1 ) => (
                    <ProductCard data={p1} key={p1.id} />
                ))}
            </div>
        </div>
    )
}

export default Body;





