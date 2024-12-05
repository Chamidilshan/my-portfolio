import React, { useState } from "react";
import { Title, Desc } from "./ProjectStyles";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    console.log('submitting');

    e.preventDefault();
    
    emailjs.init("bPCyv2MLqLMsNHA4C");
    const templateParams = {
      email: e.target.email.value,
      subject: e.target.subject.value, 
      message: e.target.message.value,
    };
  
    emailjs.send('service_dkvy2sf', 'template_fjurtri', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSubmitted(true);
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  

  return (
    <section id="contact" className="flex flex-wrap justify-around gap-8 py-12 px-8">
      <div className="w-full md:w-1/2 text-white">
       <Title>Contact Me</Title>
       <Desc>
       You're welcome to contact me with any inquiries. Let's talk about your ideas and engage in meaningful conversations.
       </Desc>
      </div>
      <div className="w-full md:w-1/2">
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6"   >
              <label 
              data-aos= 'fade-left' 
              data-aos-duration='1000'
              htmlFor="email" className="text-white block mb-2 text-lg font-medium">
                Your email
              </label>
              <input
              data-aos= 'fade-right'  
              data-aos-duration='1000'
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label 
              data-aos= 'fade-left' 
              data-aos-duration='1000'
              htmlFor="subject" className="text-white block text-lg mb-2 font-medium">
                Subject
              </label>
              <input
              data-aos= 'fade-right' 
              data-aos-duration='1000'
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label 
              data-aos= 'fade-left' 
              data-aos-duration='1000'
              htmlFor="message" className="text-white block text-lg mb-2 font-medium">
                Message
              </label>
              <textarea
              data-aos= 'fade-right' 
              data-aos-duration='1000'
                name="message"
                id="message"
                className="bg-gray-100 border border-gray-300 placeholder-gray-400 text-gray-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#197FE6] hover:bg-primary-600 text-black font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Index;
