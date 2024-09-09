import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Suspense } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Suspense
      fallback={
        <div className="bg-green w-auto sm:w-auto h-auto scroll-smooth">
          <button className="visible scroll-smooth flex justify-center transition duration-700  align-middle fixed bottom-5 right-5 cursor-pointer">
            <IoIosArrowDropupCircle className="h-12 w-12 fill-[#FBBD35] "></IoIosArrowDropupCircle>
          </button>

          <div className="w-auto sm:w-auto h-screen flex flex-col items-center justify-center">
            <img src="https://rona360blob.blob.core.windows.net/rona360/RONA360/RONA.svg" className="h-40 w-40" alt="Loading Icon" />
          </div>
        </div>
      }
    >
    <App />
    </Suspense>
  </React.StrictMode>,
)
