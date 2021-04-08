import * as React from "react"

const About = () => {
    return (
        <section className="w-screen text-center p-5 bg-indigo-300">
            <p className="text-base text-gray-600">Aliquam lobortis, dui ut fermentum congue, ex felis eleifend odio</p>
            <h3 className="text-3xl text-gray-900 md:text-4xl lg:text-5xl">Maecenas sem libero, condimentum in neque eu, aliquam tempor dui.</h3>
            <p className="text-base text-gray-600">Aliquam lobortis, dui ut fermentum congue, ex felis eleifend odio</p>
            <div className="w-screen flex flex-wrap justify-evenly mt-6 p-5" >
                <div className="w-9/12 md:w-6/12 lg:w-3/12 p-5 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
                    <p className="text-base text-gray-600 break-words">
                    In hac habitasse platea dictumst. Etiam purus elit, laoreet id consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi consequat, luctus ullamcorper nulla accumsan. Praesent malesuada nisl eget ante accumsan, non posuere felis blandit.
                    </p>
                </div>
                <div className="w-9/12 md:6/12 lg:w-3/12 max-w-sm p-5 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
                    <p className="text-base text-gray-600 break-words">
                    In hac habitasse platea dictumst. Etiam purus elit, laoreet id consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi consequat, luctus ullamcorper nulla accumsan. Praesent malesuada nisl eget ante accumsan, non posuere felis blandit.
                    </p>
                </div>
                <div className="w-9/12 md:w-6/12 lg:w-3/12 p-5 mb-3 bg-white border-2 border-gray-300 rounded shadow-md">
                    <p className="text-base text-gray-600 break-words">
                    In hac habitasse platea dictumst. Etiam purus elit, laoreet id consectetur vitae, molestie vitae ante. Ut faucibus nisi vitae nisi consequat, luctus ullamcorper nulla accumsan. Praesent malesuada nisl eget ante accumsan, non posuere felis blandit.
                    </p>
                </div>
            </div>
        </section>
    )
};
export default About;