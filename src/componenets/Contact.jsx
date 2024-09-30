import React from 'react'

export const Contact = () => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5  py-10 mx-auto" bis_skin_checked={1}>
                    <div
                        className="flex flex-col text-center w-full mb-9"
                        bis_skin_checked={1}
                    >
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-6 text-indigo-600">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            We’d love to hear from you! Whether you have questions, feedback,
                            or need assistance, please don’t hesitate to reach out.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto" bis_skin_checked={1}>
                        <div className="flex flex-wrap -m-2" bis_skin_checked={1}>
                            <div className="p-2 w-1/2" bis_skin_checked={1}>
                                <div className="relative" bis_skin_checked={1}>
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2" bis_skin_checked={1}>
                                <div className="relative" bis_skin_checked={1}>
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full" bis_skin_checked={1}>
                                <div className="relative" bis_skin_checked={1}>
                                    <label
                                        htmlFor="message"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full" bis_skin_checked={1}>
                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                    Send
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
