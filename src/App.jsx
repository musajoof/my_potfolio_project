import React, { useState } from 'react';
import profile_photo from "./assets/images/profile_no_bg.png"
import musa from "./assets/images/musa1.jpg"
import musajoof from "./assets/images/musa2.jpg"

import logo from "./assets/images/my_logo.jpg"
import ContactImage from './assets/images/phone.svg'
import FaxImage from './assets/images/device-landline-phone.svg'
import EmailtImage from './assets/images/mail.svg'
import FacebookImage from './assets/images/brand-facebook.svg'
import TwitterImage from './assets/images/brand-twitter.svg'
import WhatsAppImage from './assets/images/brand-whatsapp.svg'
import LinkinImage from './assets/images/brand-linkedin.svg'
import blobImageBig from "./assets/blobs/blob-big.svg"
import blobImageMedium from "./assets/blobs/blob-medium.svg"
import blobImageSmall from "./assets/blobs/blob-small.svg"
import htmlIcon from "./assets/images/html.svg"
import cssIcon from "./assets/images/brand-css3.svg"
import jsIcon from "./assets/images/brand-javascript.svg"
import boostrapIcon from "./assets/images/brand-bootstrap.svg"
import tailwindIcon from "./assets/images/brand-tailwind.svg"
import nodeIcon from "./assets/images/brand-nodejs.svg"
import reactIcon from "./assets/images/brand-react.svg"

import audioPlayerImage from "./assets/works/Audio_player.png"
import faqImage from "./assets/works/faq-card.png"
import jamagenFcImage from "./assets/works/jamagen-fc.png"
import NftImage from "./assets/works/large-screen-NFT-preveiw-card.png"
import percentageImage from "./assets/works/percentage-calculator.png"
import potfolioImage from "./assets/works/Potfolio-with-wailwind.png"
import qrCodeImage from "./assets/works/qr-code-component.png"
import ratingImage from "./assets/works/rating-component.png"


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY;
        
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });
});


function App() {
  const currentyear = new Date().getFullYear()
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Message:", message);
    setEmail("");
    setPassword("");
    setMessage("");
  };

  const testimonials = [
    {
      name: "Musa Joof",
      Institution: "Gambia Immigration",
      Image: profile_photo,
      Text: "This is wonderful Musa kep up the mumentum, the sky is the limil"
    },
    {
      name: "Muhammed Fatty",
      Institution: "Gambia Police",
      Image: musa,
      Text: "You making me get in love with programming and i want to join JCC to be a developer. Please share with me their contacts!!!"
    },
    {
      name: "Bubacarr Jarju",
      Institution: "Gambia Maritime",
      Image: musajoof,
      Text: "Ihad about this JCC long time but i don't actually know what they were all about, because of you am confedence that they are doing a greate job."
    }
  ];

  return (
    <>
     <div>
        <header className="border-2 bg-primary text-white p-5" id='home'>
          <div className="flex justify-between items-center  ">
            <div className="flex text-center">
              <img className="border-2 rounded-full w-20 h-20 mr-2" src={logo} alt=" logo" />
              <img className="border-2 rounded-full w-20 h-20" src={profile_photo} alt=" my logo" />
            </div>

            <nav>
              <ul className="flex mr-3">
                <li className="mr-3 font-bold cursor-pointer text-xl">
                    <a href="#home">Home</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer text-xl">
                    <a href="#about">About</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer text-xl">
                    <a href="#skills">Skills</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer text-xl">
                    <a href="#works">Works</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer text-xl">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer text-xl">
                    <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="">
            <div className="flex justify-evenly items-center pt-4 pl-20 pr-20">
              <div className="text-center w-1/2">
                <h2 className="text-[50px] font-bold">Hello, i'm <strong className="text-yellow-400 font-bold">Musa Joof</strong></h2>
                <p> I'm a young developer at JCC currently workin at the Gambia Immigration Department and posted at the Passport office</p>

                <button className="w-40 h-14 border-none bg-tertially shadow-md hover:bg-complimentry hover:text-secondary shadow-white text-white rounded-md p-2 ml-3 font-bold cursor-pointer mt-4"> 
                  <li className="mr-3 font-bold cursor-pointer list-none">
                      <a href="#about">About Me</a>
                  </li>
                </button>
                <button className="w-40 h-14 border-none bg-tertially shadow-md hover:bg-complimentry hover:text-secondary shadow-white text-white rounded-md p-2 ml-3 font-bold cursor-pointer mt-4">
                  <a href="https://drive.google.com/file/d/1cz5nxtc7k9EnO42iVk70aZurHT2zLBOK/view?usp=drive_link" target="_blank" download="Musa Joof - ITLA 5 Day Python Marathon.pdf" rel="noopener noreferrer">
                    Download My CV
                  </a>
                </button>
              </div>
              <div className="text-center w-1/2">
                <img className=" w-1/2 h-1/2" src={profile_photo} alt={"profile photo"} />
              </div>
              <img className="absolute w-20 " src={blobImageBig} alt={"Blob Image"} />
              <img className="absolute left-96 bottom-96 w-32 " src={blobImageMedium} alt={"Blob Image"} />
              <img className="absolute w-32 right-[200px] bottom-96" src={blobImageSmall} alt={"Blob Image"} />
            </div>
          </div>

        </header>

        <main>
          {/* About Me start here */}
          <div className="flex justify-between items-center mt-10 p-5 gap-x-4" id='about'>
            <div className="w-1/2 -mt-36 ">
              <div className="border-none w-72 h-96 relative top-40 bg-primary rounded-xl shadow-secondary shadow-lg"></div>
              <img className="h-96 m-auto relative right-36 bottom-40 " src={profile_photo} alt={"prolife photo"} />
            </div>
              <img className="absolute w-20 " src={blobImageBig} alt={"Blob Image"} />
              <img className="absolute left-[450px] bottom w-32 " src={blobImageMedium} alt={"Blob Image"} />
              <img className="absolute w-32 right-10 top-[540px]" src={blobImageSmall} alt={"Blob Image"} />
            <div className="w-1/2 -mt-36">
              <h3 className="text-secondary text-2xl mb-5 font-extrabold font-serif">About Me</h3>
              <h2 className="text-secondary font-bold text-3xl">
                Hi, a'm a student at JCC and my instructor is Omar Jasseh and the CEO. when i joined, i got little knowledge about programming but with the help of Omar and the team i'm able to start a project from scretch to finish.
              </h2>
              <p className="text-secondary font-thin text-sm">whiles am a sudent at JCC am also working at the Gambia Immigration Department which i joined in 2011. i did my training at Tanjeh which we were the first batch to be trained there and after 6 months of succesfull training, we did our passing out and then deployed to aour verious stations. Am currently posted at the Biometric passport office since 2014 for the issurance of passports to Gambians.</p>

              <button className="w-40 h-14 border-2 border-none bg-tertially shadow-md hover:bg-complimentry hover:text-secondary shadow-secondary text-white rounded-md p-2 ml-3 font-bold cursor-pointer mt-4">
                <a href="/readme" target="_blank" rel="noopener noreferrer" id="read">Read Me</a>
              </button>


            </div>
          </div>

          {/* Skills section start here */}
          <div className="p-5 mt-5 bg-primary" id='skills'>
            <div className="m-auto w-[600px] text-center text-white">
              <h1 className="text-white font-bold text-2xl mb-5 font-serif">My Skills</h1>
              <p className="text-2xl font-semibold">JCC help me accure knowledge on the following below that makes you a developer and help you create an App or a website. check it out, and you will like them</p>
            </div>
            <div className="flex justify-between items-center gap-x-5 mt-5">
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-tertially text-white p-5 overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white">
                  <img className="w-14 m-auto" src={htmlIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold text-white">HTML</h2>
                <p className="text-xl font-semibold white mt-2">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. </p>
              </div>
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-tertially text-white p-5 overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white">
                  <img className="w-14 m-auto" src={cssIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold text-white">CSS</h2>
                <p className="text-xl font-semibold text-white mt-2">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
              </div>
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-tertially text-white p-5 overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white">
                  <img className="w-14 m-auto" src={jsIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">JavaScript</h2>
                <p className="text-xl font-semibold text-white mt-2">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
              </div>
            </div>

            <h1 className="text-2xl mt-5 underline font-bold block text-center text-white">Additional frameworks</h1>
            <div className="flex justify-between items-center gap-x-5 mt-4">
              <div className="w-1/4 h-96 bg-tertially text-white rounded-md text-center shadow-black shadow-md overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md mt-5 bg-white">
                    <img className="w-14 m-auto" src={boostrapIcon} alt={"My icon"} />
                </div>
                  <h2 className="text-2xl mt-4 font-bold text-white">Bootstrap</h2>
                  <p className="text-xl font-semibold text-white mt-2">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
              </div>
              <div className="w-1/4 h-96 bg-tertially text-white rounded-md text-center shadow-black shadow-md">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md mt-5 bg-white">
                    <img className="w-14 m-auto" src={tailwindIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">Tailwing</h2>
                <p className="text-xl font-semibold text-white mt-2">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</p>
              </div>
              <div className="w-1/4 h-96 bg-tertially text-white rounded-md text-center shadow-black shadow-md overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md mt-5 bg-white">
                  <img className="w-14 m-auto" src={reactIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold text-white">React</h2>
                <p className="text-xl font-semibold text-white mt-2">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
              </div>
 
              <div className="w-1/4 h-96 bg-tertially text-white rounded-md text-center shadow-black shadow-md overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md mt-5 bg-white">
                  <img className="w-14 m-auto" src={nodeIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold text-white">Nodejs</h2>
                <p className="text-xl font-semibold text-white mt-2">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</p>
              </div>
            </div>
          </div>

          {/* Works starts here */}
          <div className="mt-5 p-5" id='works'>
            <div className="w-3/4 mt-5 p-3 text-center m-auto">
              <h1 className="text-center text-2xl text-secondary font-bold font-serif">My Latest Work</h1>
              <p className="mt-5 text-lg text-secondary font-bold">Check out for the latest work and projects that i created at JCC from the following platform and frame works that includes HTML, CSS, React, Tailwind, Node etc. please share with me your feedback, it will be usefull for our subsequent works. </p>
            </div>
            <div className="flex justify-between items-center gap-x-5 mt-5">
              <div className="border-2 w-80 h-96  rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80 hover:bg-purple-500" src={audioPlayerImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={faqImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={jamagenFcImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={NftImage} alt={"work image"} />
              </div>
            </div>

            <div className="flex justify-between items-center mt-10 gap-x-5">
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={percentageImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={potfolioImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={qrCodeImage} alt={"work image"} />
              </div>
              <div className="border-2 w-80 h-96 object-cover rounded-md bg-slate-300 text-white shadow-black shadow-md ">
                <img className="object-cover h-96 w-80" src={ratingImage} alt={"work image"} />
              </div>
            </div>
          </div>

          {/* Testimonial Start here */}
          <div className="mt-10 bg-primary" id='testimonials'>
          <div className="w-3/4 mt-5 p-3 text-center m-auto">
              <h1 className="text-center text-2xl text-white font-bold font-serif">Testimonials</h1>
              <p className="mt-5 text-lg text-white font-bold">Check out for the testimonials from followers!!! </p>
          </div>
          <div className="w-3/4 h-96 m-auto border-none p-3 rounded-t-[50%] shadow-white shadow-xl bg-tertially text-center">
            <div className="w-24 h-24 m-auto mt-5 rounded-full p-2 bg-white">
              <img className='w-20 h-20 m-auto rounded-full' src={testimonials[currentTestimonialIndex].Image} alt="" />
            </div>

            <div className="w-3/4 h-64 mt-2  m-auto rounded-md text-white text-lg font-bold">
              <span className="block mt-5 text-2xl">My name is: {testimonials[currentTestimonialIndex].name}</span>
              <span className="block mt-2">Instittion: {testimonials[currentTestimonialIndex].Institution}</span>
              <span className="block mt-2 text-sm"> {testimonials[currentTestimonialIndex].Text}</span>
              <div className="mt-3 flex justify-center items-center ">
                <button
                  onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length)}
                  className="w-48 h-12 font-bold cursor-pointer border-none bg-primary shadow-md hover:bg-complimentry hover:text-secondary shadow-white text-white rounded-lg"
                >
                  Next Testimonial
                </button>
              </div>
            </div>
          </div>
          </div>


          {/* Contact start here */}
          <div className="p-5 mt-5 bg-tertially" id='contacts'>
          <h1 className="text-center text-2xl text-white font-bold font-serif">Contact Me</h1>
            <div className="flex justify-around items-center mt-5">
              <div className="w-56 h-28 rounded-md p-2 bg-white text-slate-700 text-lg font-bold border-2 text-center">
                <img className="m-auto" src={ContactImage} alt="Contack Image" />
                <h3>Contact:</h3>
                <p> 7145920/5847203</p>
              </div>
              <div className="w-56 h-28 rounded-md p-2 bg-white text-slate-700 text-lg font-bold border-2 text-center">
                <img className="m-auto" src={FaxImage} alt="Contack Image" />
                <h3>Fax:</h3>
                <p> 7145920/5847203</p>
              </div>
              <div className="w-56 h-28 rounded-md p-1 bg-white text-slate-700 text-lg font-bold border-2 text-center">
                <img className="m-auto" src={EmailtImage} alt="Contack Image" />
                <h3>Email:</h3>
                <p> musajoof447@gmail.com</p>
              </div>
            </div>
              <div className="p-5 flex justify-around items-center ">             
                  <form className="p-2 w-2/5 " action="/">
                    <div className="mt-3">
                      <label className="block font-bold text-lg" htmlFor="email" id="email">Email</label>
                      <input 
                        className="border-b-2 w-full h-14 rounded-md p-2" 
                        type="text" 
                        name="email"  
                        value={email}
                        title='Enter your email address'
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block font-bold text-lg" htmlFor="password" id="password">Password</label>
                      <input 
                        className="border-b-2 w-full h-14 rounded-md p-2" 
                        type="text" 
                        name="password" 
                        value={password} 
                        title='Enter your password'
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="block mb-3 font-bold text-lg" htmlFor="email" id="email">Message</label>
                      <textarea 
                        className="border-b-2 w-full h-48 rounded-md p-2" 
                        type="textarea" 
                        name="texarea" 
                        value={message}
                        title='Enter your message'
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Enter your message"
                      />
                    </div>
                    <button 
                      className="w-40 h-14  border-none bg-secondary shadow-md hover:bg-complimentry hover:text-secondary shadow-white text-white rounded-md p-2 font-bold cursor-pointer mt-4"
                      type='submit'
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                  </form>

                  <div className="w-2/5 p-2 ">
                    <button className="w-40 h-14 border-none bg-secondary shadow-md hover:bg-complimentry hover:text-secondary shadow-white text-white rounded-md p-2 font-bold cursor-pointer mb-3"
                    >
                      Let's Get In Touch
                    </button>
                    <p className="text-white text-xl mb-5 font-bold">Joofen Technology</p>
                    <p className="text-white">Please if you want to be a developer, join JCC and you not regreate it. if want a junior developer we are at your door step</p>
                    <div className="flex justify-between items-center mt-5 cursor-pointer">
                      <a href="https://www.facebook.com/musa.joof.75641pl" target='_blank' title='Link to my facebook'>
                        <img className="cursor-pointer border-none p-2 bg-white rounded-md hover:bg-complimentry hover:text-secondary" src={FacebookImage} alt="FaceBookImage" />
                      </a>
                      
                      <a href="https://twitter.com/musajoof447" target='_blank' title='Link to my twitter'>
                      <img className='cursor-pointer border-none p-2 bg-white rounded-md hover:bg-complimentry hover:text-secondary' src={TwitterImage} alt="TwitterImage" />
                      </a>

                      <a className='text-center mt-5' title='Link to my whatsApp'>
                      <img className='cursor-pointer m-auto border-none p-2 bg-white rounded-md hover:bg-complimentry hover:text-secondary' src={WhatsAppImage} alt="WhatsAppImage" />
                        <span className=' font-bold m-auto text-white'>7145920</span>
                      </a>

                      <a href="https://www.linkedin.com/in/musa-joof-b81a82247" target='_blank' title='Link to my linkein'>
                      <img className='cursor-pointer border-none p-2 bg-white rounded-md hover:bg-complimentry hover:text-secondary' src={LinkinImage} alt="LinkinImage" />
                      </a>
                    </div>
                  </div>
              </div>
          </div>

        </main>

        <footer className="border-2 bg-secondary text-white p-5 text-center mt-5">
          <div className="flex justify-around items-start gap-x-3">
            <div className='block mt-10 '>
              <h1 className='text-xl font-extrabold'>Pages</h1>
              <ul className="block mt-3">
                <li className=" font-bold cursor-pointer">
                    <a href="#home">Home</a>
                </li>
                <li className=" font-bold cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className=" font-bold cursor-pointer">
                    <a href="#skills">Skills</a>
                </li>
                <li className=" font-bold cursor-pointer">
                    <a href="#works">Works</a>
                </li>
                <li className=" font-bold cursor-pointer">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className=" font-bold cursor-pointer">
                    <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </div>
            <div className='block mr-3 mt-10 '>
              <h1 className='text-xl font-extrabold'>links</h1>
              <a href="https://www.facebook.com/musa.joof.75641pl" target='_blank'>
                <img className="cursor-pointer mt-3 border-none p-2 bg-white rounded-md hover:bg-complimentry" src={FacebookImage} alt="FaceBookImage" />
              </a>
                    
              <a href="https://twitter.com/musajoof447" target='_blank'>
                <img className='cursor-pointer mt-3 border-none p-2 bg-white rounded-md hover:bg-complimentry ' src={TwitterImage} alt="TwitterImage" />
              </a>

              <a className='text-center mt-5 '>
                <img className='cursor-pointer mr-6 mt-3 m-auto border-none p-2 bg-white rounded-md hover:bg-complimentry hover:text-secondary' src={WhatsAppImage} alt="WhatsAppImage" />
                  <span className='mt-2 font-bold m-auto'>7145920</span>
              </a>

              <a href="https://www.linkedin.com/in/musa-joof-b81a82247" target='_blank'>
                <img className='cursor-pointer mt-3 border-none p-2 bg-white rounded-md hover:bg-complimentry ' src={LinkinImage} alt="LinkinImage" />
              </a>
            </div>
            <div className='block mr-3 mt-10 space-y-3'>
              <h1 className='text-xl font-extrabold'>Contacts</h1>
              <img className="contact-image border-none p-2 bg-white rounded-md hover:bg-complimentry " src={ContactImage} alt="Contack Image" />
              <img className="contact-image border-none p-2 bg-white rounded-md hover:bg-complimentry " src={FaxImage} alt="Contack Image" />
              <img className="contact-image border-none p-2 bg-white rounded-md hover:bg-complimentry" src={EmailtImage} alt="Contack Image" />
            </div>
            <div className='block mr-3 mt-10 space-y-3'>
              <h1 className='text-xl font-extrabold'>Skills</h1>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md bg-white hover:bg-complimentry">
                <a href="https://html.com/">
                  <img className="w-14 m-auto" src={htmlIcon} alt={"My icon"} />
                </a>
              </div>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md bg-white hover:bg-complimentry">
                <a href="https://www.w3.org/Style/CSS/Overview.en.html">
                  <img className="w-14 m-auto" src={cssIcon} alt={"My icon"} />
                </a>
              </div>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md bg-white hover:bg-complimentry">
                <a href="https://www.javascript.com/">
                  <img className="w-14 m-auto" src={jsIcon} alt={"My icon"} />
                </a>
              </div>
            </div>
            <div className='block mr-3 mt-10 space-x-3'>
              <h1 className='text-xl font-extrabold'>Frameworks</h1>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md mt-5 bg-white hover:bg-complimentry">
                <a href="https://getbootstrap.com/">
                  <img className="w-14 m-auto" src={boostrapIcon} alt={"My icon"} />
                </a>
              </div>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md mt-5 bg-white hover:bg-complimentry">
                <a href="https://tailwindcss.com/">
                  <img className="w-14 m-auto" src={tailwindIcon} alt={"My icon"} />
                </a>
              </div>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md mt-5 bg-white hover:bg-complimentry">
                <a href="https://react.dev/">
                  <img className="w-14 m-auto" src={reactIcon} alt={"My icon"} />
                </a>
              </div>
              <div className="border-2 p-2 w-10 m-auto h-10 rounded-md mt-5 bg-white hover:bg-complimentry">
                <a href="https://nodejs.org/">
                  <img className="w-14 m-auto" src={nodeIcon} alt={"My icon"} />
                </a>
              </div>
            </div>

            <img className="absolute w-20 " src={blobImageBig} alt={"Blob Image"} />

            
          </div>
          <p className="mt-10 text-lg font-bold">&copy; Develop By Musa Joof {currentyear}, All Right Reserved</p>
        </footer>
     </div>
    </>
  )
}

export default App
