import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ cdata }) => {
    // console.log(cdata);

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div
                    className="container flex flex-wrap px-5 py-24 mx-auto items-center"
                    bis_skin_checked={1}
                >

                    <div
                        className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200"
                        bis_skin_checked={1}
                    >

                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-indigo-600">
                            Kohistan e-commerce
                        </h1>

                        <p className="leading-relaxed text-base">
                            Find everything you need, from beauty, fashion,
                            and home essentials to electronics and vehicles,
                            all organized into convenient categories. Whether
                            it's skincare, furniture, men's or women's fashion,
                            or tech gadgets, we've got you covered.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-1/2 md:pl-12" bis_skin_checked={1}>
                        <h2 className="title-font font-bold text-indigo-600 tracking-wider text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 p-0 m-0">
                            {cdata.map((c, index) => (
                                <div key={index} className="text-center">
                                    <Link to={`/category/${c}`} className="font-medium text-gray-600 break-words hover:text-indigo-600">{c}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Category;