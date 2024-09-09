// AyudaForm.tsx

import React from 'react';

const AyudaFormfinal: React.FC = () => {
  return (
    <div className='bg-[#F8F8F8] w-full h-full flex items-center justify-center'>
    <div className="max-w-2xl mx-auto w-full p-6 rounded-2xl shadow-lg mt-20 mb-4 bg-[#FFFFFF] ">
      <h1 className="text-3xl font-bold mb-4 text-center">Contáctanos</h1>
      <h2 className="text-xl mb-6 text-gray-800">
        Déjanos un mensaje y en la mayor brevedad posible te ayudaremos a resolver cualquier duda.
      </h2>

      <div className=' flex relative'>

      <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5r0000004eDD" method="POST" className=" w-full flex flex-col items-center">

      <input type="hidden" name="oid" value="00D5r0000004eDD"/>
      <input type="hidden" name="retURL" value="https://congreso.somosawaq.org"/>

      {/* <!-- ---------------------------------------------------------------------- -->
      <!-- NOTE: These fields are optional debugging elements. Please uncomment -->
      <!-- these lines if you wish to test in debug mode. -->
      <!-- <input type="hidden" name="debug" value=1> -->
      <!-- <input type="hidden" name="debugEmail" -->
      <!-- value="neha.sharma21@concentrix.com">; -->
      <!-- ---------------------------------------------------------------------- --> */}

      <input id="first_name" maxLength={40} name="first_name" size={20} type="text" className='w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2 ' placeholder='First Name' /><br/>

      <input id="last_name" maxLength={80} name="last_name" size={20} type="text" className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2" placeholder='Last Name' /><br/>

      <input id="email" maxLength={80} name="email" size={20} type="text" className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2" placeholder='Email' /><br/>

      <input id="company" maxLength={40}name="company" size={20} type="text" className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2" placeholder='Company' /><br/>

      <input id="city" maxLength={40} name="city" size={20} type="text" className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2" placeholder='City' /><br/>

      <input id="state" maxLength={20} name="state" size={20} type="text" className="w-full px-2 py-1 border border-black rounded-md focus:outline-none focus:border-[#8DC73F] focus:border-2" placeholder='State/Province' /><br/>

      <button type="submit" name="submit" className=" w-20 bg-[#8DC73F] text-sm text-black py-2  mt-3 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer font-bold flex relative justify-center"/>

      </form>
      </div>
    </div>
    </div>
  );
};

export default AyudaFormfinal;