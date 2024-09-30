import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Themecontext } from './context/Themecontext';


const Productcat = () => {
    const { theme, setTheme } = useContext(Themecontext);

    const { c } = useParams();
    // console.log(c);
    
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${c}`);
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, [c]);
    // console.log(c)
    // console.log(products)
    if (products.length === 0) return (
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
        </div>
    )

    return (
        <div>
            <div id="products-sec" className="container mx-auto py-8">
                <h1 className='text-wrap text-center font-medium text-5xl text-indigo-500 mb-16'>Category : {c}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                    {products.map((pro) => {
                        const { id, images, brand, availabilityStatus, title, description, price, rating, reviews } = pro;
                        return (
                            <Link key={id} to={`/product/${id}`}>
                                <div className="bg-white rounded-lg shadow-md overflow-hidden lg:min-h-full">
                                    <img
                                        className={`${theme == 'light' ? "bg-white" : "bg-slate-800"} rounded-md h-80 w-full object-contain object-center cursor-pointer`}
                                        src={images[0]}
                                        alt={brand}
                                    />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            {availabilityStatus}
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {title}
                                        </h1>
                                        <p className="leading-relaxed mb-3">
                                            {description}
                                        </p>
                                        <div className="flex items-center flex-wrap">
                                            <b className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                                ${price}
                                            </b>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm mx-auto">
                                                <svg
                                                    className="w-4 h-4 mr-1"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                </svg>
                                                {reviews.length}
                                            </span>
                                            <span className="flex items-center mx-auto">
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-indigo-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-indigo-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-indigo-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="currentColor"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-indigo-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-indigo-500"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>
                                                <span className="text-gray-600 ml-3">{rating} Reviews</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div>

                </div>
            </div>
            <button onClick={handleGoBack} className="mt-10  mb-10 flex justify-centeritem-center m-auto text-black border-2 py-2 px-6  focus:outline-none hover:bg-indigo-600 hover:text-white rounded-md">
                Go Back
            </button>
        </div>
    );
};
export default Productcat;