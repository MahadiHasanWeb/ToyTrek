import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div className="p-10">
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">1. What is an access token and refresh token? How do they work and where should we store them on the client-side? </h1>
                <p className='my-3'>An access token is like a permission slip that a client (e.g., web or mobile app) receives after successful authentication. It's a short-lived token that allows the client to access protected resources or perform certain actions. The client includes the access token with each request to the server.
                    <br />
                    <br />
                    A refresh token is a long-lived credential that is also issued during authentication. It's used to get a new access token when the current one expires. Refresh tokens are securely stored by the client and sent to the server to request a new access token.
                    <br />
                    <br />
                    On the client-side, the access token is usually stored in a temporary storage like browser's sessionStorage, while the refresh token is stored securely, often as an HttpOnly cookie. Storing the refresh token as a cookie makes it harder for malicious scripts to access it.
                    Remember to follow security best practices, such as token expiration, token rotation, and using secure transport (HTTPS), to ensure the safety of these tokens and your authentication system.
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">2. Compare SQL and NoSQL databases?</h1>
                <p className='my-3'>SQL databases are structured with predefined schemas, enforce data integrity, use SQL for querying, and provide ACID compliance. NoSQL databases offer flexibility in data structure, handle diverse data types, use different query languages, and prioritize scalability and performance.</p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">3. What is express js? What is Nest JS?</h1>
                <p className='my-3'>Express.js is a framework for building web applications in Node.js. It makes it easier to handle incoming requests, create routes for different URLs, and add functionality to your server. It is lightweight, flexible, and widely used to create APIs and web servers. Express.js simplifies the process of building web applications in Node.js.
                    <br />
                    <br />
                    NestJS is a framework for building server-side applications using Node.js. It makes it easier to create robust and scalable applications by providing a structure and set of tools. NestJS is based on TypeScript and adopts architectural patterns similar to Angular. It helps developers organize their code, handle HTTP requests, manage dependencies, and create modular and maintainable applications.
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-4xl font-semibold">4. What is MongoDB aggregate and how does it work?</h1>
                <p className='my-3'>In MongoDB, the aggregate function helps you analyze and process data in a collection. It works by taking a series of steps, called pipeline stages, that specify different operations like filtering, grouping, and sorting. Each stage modifies the data and passes it to the next stage in the pipeline. This allows you to perform complex operations and get meaningful results from your data, such as calculating totals, finding averages, or extracting specific information.</p>
            </div>
        </div>
    );
};

export default Blogs;