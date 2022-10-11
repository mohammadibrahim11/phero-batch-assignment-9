import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto ">
      <div className="dark:bg-gray-800 dark:text-gray-100 shadow mb-6">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">october 11, 2022</span>
            <a
              rel="noopener noreferrer"
              href="https://reactrouter.com/en/main"
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
              react-router
            </a>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              what is the purpose of react-router?
            </p>
            <p className="mt-2">
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 shadow mb-6">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">october 11, 2022</span>
            <a
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/context.html"
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
             Useref
            </a>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              How context api works?
            </p>
            <p className="mt-2">
              In a typical React application, data is passed top-down via props,
              but such usage can be cumbersome for certain types of props that
              are required by many components within an application. Context
              provides a way to share values like these between components
              without having to explicitly pass a prop through every level of
              the tree.
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-800 dark:text-gray-100 shadow mb-6">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">october 11, 2022</span>
            <a
              rel="noopener noreferrer"
              href="https://www.w3schools.com/react/react_useref.asp"
              className="px-2 py-1 font-bold rounded bg-violet-400 dark:text-gray-900"
            >
          Context-api
            </a>
          </div>
          <div className="mt-3">
            <p className="text-2xl font-bold hover:underline">
              What is useRef used for?
            </p>
            <p className="mt-2">
              The useRef Hook allows you to persist values between renders. It
              can be used to store a mutable value that does not cause a
              re-render when updated. It can be used to access a DOM element
              directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
