import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-secondary">404</h1>
                <h2 className="text-3xl font-bold mt-4"> Page Not Found </h2>
                <p className="text-gray-500 mt-3"> Sorry, the page you are looking for does not exist. </p>
                <Link href="/" className="btn btn-secondary mt-6" > Go Back Home </Link>
            </div>
        </div>
    );
};

export default ErrorPage;