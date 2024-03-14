import './assets/css/index.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-gray-800 text-white">
        <div className="top-bar mx-4 flex items-center justify-between py-4">
          <img
            src="/favicon.ico"
            alt="Search"
            className="ml-3 mr-8"
            style={{ width: '4rem', height: '4rem' }}
          />
          <div class="relative flex">
            <input
              type="search"
              class="text-surface focus:border-primary focus:shadow-inset dark:autofill:shadow-autofill dark:focus:border-primary relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput2"
              aria-describedby="button-addon2"
            />
            <span
              class="text-surface flex items-center whitespace-nowrap px-3 py-[0.25rem] dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
              id="button-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <div className="login-signup">
            <button
              className="login-btn rounded-full bg-transparent p-2 text-yellow-500"
              style={{ borderRadius: '9px' }}
            >
              Login
            </button>
            <button
              className="signup-btn ml-2 rounded-full bg-yellow-500 p-2 text-white"
              style={{ borderRadius: '9px' }}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="container-header mt-4 flex items-center justify-center">
          <h2 className="flex-none text-5xl text-yellow-500">OceanBreeze</h2>
          <nav className="main-nav flex-1">
            <ul className="main-nav-list flex justify-center gap-4">
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">MEN</button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">WOMEN</button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">KIDS</button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">HOME</button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">
                  ACCESSORIES
                </button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">
                  SUSTAINABLY CRAFTED
                </button>
              </li>
              <li>
                <button className="main-nav-btn m-8 p-8 text-xl">
                  CLEARANCE
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
