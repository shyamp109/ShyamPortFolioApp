import { FaFacebook, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser';
import { Fade } from "react-reveal";
const Contactus = () => {
  const form = useRef();
  const [name,setName] =useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3veirhv', 'template_mginex6', form.current, 'NezFbKHXSqudCh3_o')
      .then((result) => {
          console.log(result.text);
          toast.success('Email Sent successfully!');
      }, (error) => {
          console.log(error.text);
          toast.error('Email Sent Failed!');
      });
      setName("");
      setEmail("");
      setMessage("");
  };
  return (
    <Fade bottom cascade>
    <section id="contact">
      <div className="flex flex-col  justify-center items-center mt-12">
        <p className="text-gray-500 text-md sm:text-lg flex-wrap ">
          Found That Interesting?
        </p>
        <h1 className="text-gray-200 text-2xl sm:text-3xl mt-1 md:text-4xl lg:text-5xl">
          Let's Connect
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-12 mx-4 md:mx-16 lg:mx-20 md:justify-center md:items-center md:gap-12 mb-5">
       <Fade bottom cascade>
       <div className="flex flex-col sm:flex-row sm:gap-5 md:gap-0 md:flex-col justify-center items-center md:justify-center">
          <div className=" w-full text-white border-orange-200 shadow-xl shadow-blue-500/50  rounded-md flex flex-col justify-center items-center p-4">
            <FaMailBulk size={30} className="text-center" />
            <p>Email</p>
            <p  >shyamp.itpath@gmail.com</p>
            <a href="mailto:shyamp.itpath@gmail.com" className="text-blue-500">send a message</a>
          </div>
          <div className="w-full text-white border-orange-200 shadow-xl shadow-blue-500/50  rounded-md flex flex-col justify-center items-center p-4 mt-4 sm:mt-0 md:mt-4">
            <FaFacebook size={30} />
            <p>Facebook </p>
            <p>Shyam Patel</p>
            <a href="https://www.facebook.com/profile.php?id=100008644306596" className="text-blue-500">send a message</a>
          </div>
          <div className="w-full text-white border-orange-200 shadow-xl shadow-blue-500/50  rounded-md flex flex-col justify-center items-center p-4 mt-4 sm:mt-0 md:mt-4">
            <FaWhatsapp size={30} />
            <p>Whatsapp</p>
            <p>+91 848707576</p>
            <a href="https://api.whatsapp.com/send?phone=918487075767" className="text-blue-500">send a message</a>
          </div>
        </div>
       </Fade>
        <div className="flex md:w-1/2 flex-col w-full md:py-8 mt-8 md:mt-0">
          <ToastContainer />
         <Fade right>
         <form ref={form} onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
                className="w-full bg-white rounded border border-gray-300 shadow-md focus:shadow-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 shadow-md focus:shadow-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 shadow-md focus:shadow-blue-500 focus:ring-blue-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              className="px-4 border-blue-500 w-full py-2 border-2 text-white text-center rounded text-md hover:bg-transparent bg-blue-500 hover:border-2 hover:border-blue-500"
            >
              SUBMIT
            </button>
          </form>
         </Fade>
        </div>
      </div>
    </section>
    </Fade>
  );
};

export default Contactus;
