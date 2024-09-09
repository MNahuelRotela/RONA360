import React, { useState, useRef, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "../../context/TraslationContext";
import emailjs from '@emailjs/browser';

export const PaypalDonationButton: React.FC = () => {
    const [customAmount, setCustomAmount] = useState('');
    const { language, content } = useTranslation();
    const [transactionDetails, setTransactionDetails] = useState<any>(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [paypalReady, setPaypalReady] = useState(false); // Estado para rastrear si el script de PayPal está cargado
    const form = useRef<HTMLFormElement>(null);
    const navigate = useNavigate(); // Instancia history

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AV0zP1eXEDAfmmxtd8xid_exCWS455wpASO3oBpPG9I4ujOUHn350lQjfGpCs5ojPjhBE3bG5OJvDqA7`;
        script.addEventListener('load', () => {
            setPaypalReady(true);
        });
        document.body.appendChild(script);
    }, []);

    const sendEmail = () => {
        if (form.current) {
            const formData = new FormData(form.current);
            formData.append('transactionDetails', JSON.stringify(transactionDetails));
            emailjs.sendForm('service_pg4zh1h', 'template_vsrw31e', form.current, 'NNnQ6z0eOB76dHqpa')
                .then((result) => {
                    console.log(result.text);
                    setTransactionDetails(null);
                    setCustomAmount('');
                    setFormSubmitted(false); 
                    navigate('/gracias'); 
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            sendEmail();
        }
    }, [formSubmitted]);

    const handleApprove = (_data: any, actions: any) => {
        return actions.order.capture().then(function(details: any) {
            setTransactionDetails(details);
            setFormSubmitted(true);
        });
    };

    const handleCustomInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCustomAmount(event.target.value);
    };

    return (
        <PayPalScriptProvider options={{ 'clientId': 'AV0zP1eXEDAfmmxtd8xid_exCWS455wpASO3oBpPG9I4ujOUHn350lQjfGpCs5ojPjhBE3bG5OJvDqA7' }}>
            {paypalReady && (
                <div className=' w-full h-fit  flex flex-col  items-center rounded-md shadow-2xl' 
                        style={{
                            backgroundImage: `url(https://somosawaqblob.blob.core.windows.net/congress/donation/formdonationbg.png)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}>
                    <h1 className=' text-white font-bold text-xl my-4'>{content?.donaciones[language].donationcard.title}</h1>
                    {/* Botones para donaciones predefinidas */}
                    <div className=' flex gap-x-4'>
                        <button onClick={() => setCustomAmount('50.00')} className='bg-white rounded-md text-[#035D03] text-base font-bold py-1 px-4'>$50</button>
                        <button onClick={() => setCustomAmount('100.00')} className='bg-white rounded-md text-[#035D03] text-base font-bold py-1 px-4'>$100</button>
                        <button onClick={() => setCustomAmount('1000.00')} className='bg-white rounded-md text-[#035D03] text-base font-bold py-1 px-4'>$1000</button>
                    </div>
                    {/* Campo de entrada para donación personalizada */}
                    <form className=' '>
                        <input 
                            className=' placeholder-black rounded-md text-black text-sm  h-8 bg-white  border-none p-2 m-2 font-bold my-8'
                            id="customAmountInput" 
                            type="text" 
                            value={customAmount} 
                            onChange={handleCustomInputChange} 
                            placeholder={content?.donaciones[language].donationcard.fieldtext} 
                        />
                    </form>
                    {/* Botón de PayPal */}
                    <div className=' z-0 '>
                        <PayPalButtons 
                            style={{ layout: 'horizontal' }}
                            createOrder={(_data: any, actions: any) => {
                                const inputValue = document.getElementById("customAmountInput") as HTMLInputElement;
                                const currentCustomAmount = inputValue.value || '50.00';
                                return actions.order.create({
                                    purchase_units: [{
                                        amount: {
                                            value: currentCustomAmount
                                        }
                                    }]
                                });
                            }}
                            onApprove={handleApprove}
                            fundingSource={FUNDING.PAYPAL}
                        />
                    </div>
                    <p className='  text-ss text-center mx-10 mb-2 text-green-500'>
                        {content?.donaciones[language].donationcard.advicecurrency}
                    </p>
                    <div className=' flex flex-1 justify-center px-10 my-4'>
                        <p className=' text-white text-ss text-center'>
                        <span>
                            {content?.donaciones[language].donationcard.advicewhite}
                        </span>
                        <span>&nbsp;</span>
                        <span className="text-[#FBBD35] text-ss text-center">
                            "{content?.donaciones[language].donationcard.adviceyellow}"
                        </span>
                        <span>&nbsp;</span>
                        <span className="text-white text-ss text-center">
                            {content?.donaciones[language].donationcard.advicewhite2}
                        </span>
                        </p>
                    </div>
                    <div className=' flex flex-1 justify-center px-10 my-4'>
                        <p className=' text-white text-ss text-center'>
                            {content?.donaciones[language].donationcard.advice2}
                        </p>
                    </div>
                </div>
            )}
            <form ref={form} hidden>
                <label>First Name</label>
                <input type="text" name="first_name" value={transactionDetails?.payer?.name?.given_name || ''} readOnly />
                <label>Last Name</label>
                <input type="text" name="last_name" value={transactionDetails?.payer?.name?.surname || ''} readOnly />
                <label>Email</label>
                <input type="email" name="email" value={transactionDetails?.payer?.email_address || ''} readOnly />
                <label>Country</label>
                <input type="text" name="country" value={transactionDetails?.payer?.address?.country_code || ''} readOnly />
                <label>Shipping Address</label>
                <input type="text" name="shipping_address" value={transactionDetails?.purchase_units[0]?.shipping?.address?.address_line_1 || ''} readOnly />
                <label>City</label>
                <input type="text" name="city" value={transactionDetails?.purchase_units[0]?.shipping?.address?.admin_area_2 || ''} readOnly />
                <label>State</label>
                <input type="text" name="state" value={transactionDetails?.purchase_units[0]?.shipping?.address?.admin_area_1 || ''} readOnly />
                <label>Postal Code</label>
                <input type="text" name="postal_code" value={transactionDetails?.purchase_units[0]?.shipping?.address?.postal_code || ''} readOnly />
                <label>Amount</label>
                <input type="text" name="amount" value={transactionDetails?.purchase_units[0]?.amount?.value || ''} readOnly />
                <label>Currency</label>
                <input type="text" name="currency" value={transactionDetails?.purchase_units[0]?.amount?.currency_code || ''} readOnly />
                <label>Additional Message</label>
                <textarea name="additional_message" />
            </form>
        </PayPalScriptProvider>
    );
}
