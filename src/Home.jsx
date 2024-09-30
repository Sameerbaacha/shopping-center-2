import { useState, useEffect } from 'react'
import Category from './category'
import Allproduct from './allproduct';
import Footer from './footer';
import Header from './header';

export const Home = () => {
    const [products, setproducts] = useState([]);
    const [category, setcategory] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [prodresponse, categresponse] = await Promise.all([
                    fetch('https://dummyjson.com/products'),
                    fetch('https://dummyjson.com/products/category-list')
                ])
                const productData = await prodresponse.json();
                const categoryData = await categresponse.json();

                setproducts(productData.products)
                setcategory(categoryData)
            }
            catch (error) {
                console.warn("fetch error>>>>", error.message);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <div>
                <Category cdata={category} />
            </div>
            <div>
                {products.length >= 1 ? <Allproduct pdata={products} />
                    :
                    <div className='flex justify-center items-center'>
                        <svg className='w-64' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#8146FF"
                            stroke="#8146FF" strokeWidth="3" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline"
                                dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4">
                            </animate></circle><circle fill="#8146FF" stroke="#8146FF" strokeWidth="3" r="15" cx="100" cy="65">
                                <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                                    keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2">
                                </animate></circle><circle fill="#8146FF" stroke="#8146FF" strokeWidth="3"
                                    r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2"
                                        values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0">
                                </animate></circle></svg>;

                    </div>}
            </div>
        </>
    )
}
