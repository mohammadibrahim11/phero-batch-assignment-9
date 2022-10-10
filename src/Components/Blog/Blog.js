import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl font-bold text-cyan-600 mt-6">
          some questions and answer about react-router
        </h2>
        <hr className="mt-5 mb-5 container w-full mx-auto text-fuchsia-600"/>
      </div>
      <div className="flex gap-3 container w-full mx-auto mt-5">
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold text-purple-400">
              what is the purpose of react-router?
            </h2>
            <p className="mt-4 text-purple-500 text-justify font-bold">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold text-rose-400">
              How context api works?
            </h2>
            <p className="mt-4 text-purple-500 text-justify font-bold">
              In a typical React application, data is passed top-down via props,
              but such usage can be cumbersome for certain types of props that
              are required by many components within an application. Context
              provides a way to share values like these between components
              without having to explicitly pass a prop through every level of
              the tree.
            </p>
          </article>
        </div>
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
          <article>
            <h2 className="text-xl font-bold text-green-500">
              What is useRef used for?
            </h2>
            <p className="mt-4 text-purple-500 text-justify font-bold">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
