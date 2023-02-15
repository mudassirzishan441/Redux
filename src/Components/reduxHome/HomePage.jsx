import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';


const HomePage = () => {
    const [products,setProducts]=useState([]);
    const dispatch = useDispatch();

    const getApiData=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products");
        setProducts(result.data)
        dispatch({type:"ALL_PRODUCTS",data:result.data});
    }
    useEffect(()=>{
        getApiData();
    },[])
    return (
        <div>
            <h1>Redux Home Component</h1>
        </div>
    );
};

export default HomePage;