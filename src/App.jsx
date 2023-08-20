import React, { useState } from 'react';
import readme from './readme';

import profile_photo from "./assets/images/profile_no_bg.png"
import musa1 from "./assets/images/musa1.jpg"
import musa2 from "./assets/images/musa2.jpg"

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
      Image: musa1,
      Text: "You making me get in love with programming and i want to join JCC to be a developer. Please share with me their contacts!!!"
    },
    {
      name: "Bubacarr Jarju",
      Institution: "Gambia Maritime",
      Image: musa2,
      Text: "Ihad about this JCC long time but i don't actually know what they were all about, because of you am confedence that they are doing a greate job."
    }
  ];

  return (
    <>
     <div>
        <header className="border-2 bg-slate-400 text-white p-5" id='home'>
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

                <button className="w-40 h-14 border-2 bg-white text-slate-700 rounded-md p-2 ml-3 font-bold cursor-pointer mt-4"> 
                  <li className="mr-3 font-bold cursor-pointer list-none">
                      <a href="#about">About Me</a>
                  </li>
                </button>
                <button className="w-40 h-14 border-2 bg-white text-slate-700 rounded-md p-2 ml-3 font-bold cursor-pointer mt-4">
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
              <div className="border-2 w-72 h-96 relative top-40 bg-slate-400 rounded-xl shadow-slate-300 shadow-lg"></div>
              <img className="h-96 m-auto relative right-36 bottom-40 " src={profile_photo} alt={"prolife photo"} />
            </div>
              <img className="absolute w-20 " src={blobImageBig} alt={"Blob Image"} />
              <img className="absolute left-[450px] bottom w-32 " src={blobImageMedium} alt={"Blob Image"} />
              <img className="absolute w-32 right-10 top-[540px]" src={blobImageSmall} alt={"Blob Image"} />
            <div className="w-1/2 -mt-36">
              <h3 className="text-yellow-400 font-bold">About Me</h3>
              <h2 className="text-slate-700 font-bold text-3xl">
                Hi, a'm a student at JCC and my instructor is Omar Jasseh and the CEO. when i joined, i got little knowledge about programming but with the help of Omar and the team i'm able to start a project from scretch to finish.
              </h2>
              <p className="text-slate-600 font-thin text-sm">whiles am a sudent at JCC am also working at the Gambia Immigration Department which i joined in 2011. i did my training at Tanjeh which we were the first batch to be trained there and after 6 months of succesfull training, we did our passing out and then deployed to aour verious stations. Am currently posted at the Biometric passport office since 2014 for the issurance of passports to Gambians.</p>

              <button className="w-40 h-14 border-2 bg-slate-600 text-white rounded-md p-2 ml-3 font-bold cursor-pointer mt-4">
                <a href="/readme" target="_blank" rel="noopener noreferrer" id="read">Read Me</a>
              </button>


            </div>
          </div>

          {/* Skills section start here */}
          <div className="p-5 mt-5 bg-slate-100" id='skills'>
            <div className="m-auto w-[600px] text-center text-slate-700">
              <h1 className="text-yellow-400 font-bold text-lg">My Skills</h1>
              <p className="text-2xl font-semibold">JCC help me accure knowledge on the following below that makes you a developer and help you create an App or a website. check it out, and you will like them</p>
            </div>
            <div className="flex justify-between items-center gap-x-5 mt-5">
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-slate-300 text-white p-5">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                  <img className="w-14 m-auto" src={htmlIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">HTML</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. </p>
              </div>
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-slate-300 text-white p-5">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                  <img className="w-14 m-auto" src={cssIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">CSS</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
              </div>
              <div className="border-2 w-2/6 h-96 text-center rounded-md shadow-black shadow-md bg-slate-300 text-white p-5">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                  <img className="w-14 m-auto" src={jsIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">JavaScript</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
              </div>
            </div>

            <h1 className="text-2xl mt-5 underline font-bold block text-center text-yellow-400">Additional freamworks</h1>
            <div className="flex justify-between items-center gap-x-5 mt-4">
              <div className="w-1/4 h-96 bg-slate-300 text-white rounded-md text-center shadow-black shadow-md">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                    <img className="w-14 m-auto" src={boostrapIcon} alt={"My icon"} />
                </div>
                  <h2 className="text-2xl mt-4 font-bold">Bootstrap</h2>
                  <p className="text-xl font-semibold text-slate-800 mt-2">Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.</p>
              </div>
              <div className="w-1/4 h-96 bg-slate-300 text-white rounded-md text-center shadow-black shadow-md">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                    <img className="w-14 m-auto" src={tailwindIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">Tailwing</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</p>
              </div>
              <div className="w-1/4 h-96 bg-slate-300 text-white rounded-md text-center shadow-black shadow-md overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                  <img className="w-14 m-auto" src={reactIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">React</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.</p>
              </div>
 
              <div className="w-1/4 h-96 bg-slate-300 text-white rounded-md text-center shadow-black shadow-md overflow-auto">
                <div className="border-2 p-2 w-20 m-auto h-20 rounded-md bg-white mt-5">
                  <img className="w-14 m-auto" src={nodeIcon} alt={"My icon"} />
                </div>
                <h2 className="text-2xl mt-4 font-bold">Nodejs</h2>
                <p className="text-xl font-semibold text-slate-800 mt-2">Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.</p>
              </div>
            </div>
          </div>

          {/* Works starts here */}
          <div className="mt-5 p-5" id='works'>
            <div className="w-3/4 mt-5 p-3 text-center m-auto">
              <h1 className="text-center text-2xl text-yellow-400 font-bold">My Latest Work</h1>
              <p className="mt-5 text-lg text-slate-700 font-bold">Check out for the latest work and projects that i created at JCC from the following platform and frame works that includes HTML, CSS, React, Tailwind, Node etc. please share with me your feedback, it will be usefull for our subsequent works. </p>
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
          <div className="mt-10 bg-slate-400" id='testimonials'>
          <div className="w-3/4 mt-5 p-3 text-center m-auto">
              <h1 className="text-center text-2xl text-yellow-400 font-bold">Testimonials</h1>
              <p className="mt-5 text-lg text-slate-700 font-bold">Check out for the testimonials from followers!!! </p>
          </div>
          <div className="w-3/4 h-96 m-auto border-2 rounded-t-[50%] shadow-yellow-400 shadow-md bg-yellow-400 text-center">
            <div className="w-24 h-24 m-auto mt-5 rounded-full p-2 bg-white">
              <img className='w-20 h-20 m-auto rounded-full' src={testimonials[currentTestimonialIndex].Image} alt="" />
            </div>

            <div className="w-3/4 h-64 mt-2  m-auto rounded-md text-slate-700 text-lg font-bold">
              <span className="block mt-5 text-2xl">My name is: {testimonials[currentTestimonialIndex].name}</span>
              <span className="block mt-2">Instittion: {testimonials[currentTestimonialIndex].Institution}</span>
              <span className="block mt-2 text-sm"> {testimonials[currentTestimonialIndex].Text}</span>
              <div className="mt-3 flex justify-center items-center">
                <button
                  onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length)}
                  className="font-bold cursor-pointer text-yellow-400 p-2 bg-white rounded-lg"
                >
                  Next Testimonial
                </button>
              </div>
            </div>
          </div>
          </div>


          {/* Contact start here */}
          <div className="p-5 mt-5 bg-slate-100" id='contacts'>
            <div className="flex justify-around items-center">
              <div className="w-56 h-28 rounded-md p-2 bg-white text-slate-700 text-lg font-bold border-2 text-center">
                <img className="m-auto" src={ContactImage} alt="Contack Image" />
                <h3>Contact:</h3>
                <p> 7145920/7666554</p>
              </div>
              <div className="w-56 h-28 rounded-md p-2 bg-white text-slate-700 text-lg font-bold border-2 text-center">
                <img className="m-auto" src={FaxImage} alt="Contack Image" />
                <h3>Fax:</h3>
                <p> 7145920/7666554</p>
              </div>
              <div className="w-56 h-28 rounded-md p-2 bg-white text-slate-700 text-lg font-bold border-2 text-center">
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
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Enter your message"
                    />
                  </div>
                  <button 
                    className="w-40 h-14 border-2 bg-slate-600 text-white rounded-md p-2 font-bold cursor-pointer mt-4"
                    type='submit'
                    onClick={handleFormSubmit}
                  >
                    Submit
                  </button>
                </form>

                <div className="w-2/5 p-2 ">
                  <h1 className="w-40 h-14 border-2 bg-slate-600 text-white rounded-md p-2 font-bold cursor-pointer mb-3">Let's Get In Touch</h1>
                  <p className="text-slate-700 text-xl mb-5 font-bold">Joofen Technology</p>
                  <p className="text-slate-700">please if you want to be a developer, join JCC and you not regreate it. if want a junior developer we are at your door step</p>
                  <div className="flex justify-between items-center mt-5 cursor-pointer">
                    <img className="cursor-pointer " src={FacebookImage} alt="FaceBookImage" />
                    <img className='cursor-pointer ' src={TwitterImage} alt="TwitterImage" />
                    <img className='cursor-pointer ' src={WhatsAppImage} alt="WhatsAppImage" />
                    <img className='cursor-pointer ' src={LinkinImage} alt="LinkinImage" />
                  </div>
                </div>
            </div>
          </div>

        </main>

        <footer className="border-2 bg-slate-400 text-white p-5 text-center mt-5">
          <div className="flex justify-around items-center gap-x-3">
            <div>
              <ul className="flex mr-3 mt-10">
                <li className="mr-3 font-bold cursor-pointer">
                    <a href="#home">Home</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer">
                    <a href="#about">About</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer">
                    <a href="#skills">Skills</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer">
                    <a href="#works">Works</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer">
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li className="mr-3 font-bold cursor-pointer">
                    <a href="#contacts">Contacts</a>
                </li>
              </ul>
            </div>
            <img className="absolute w-20 " src={blobImageBig} alt={"Blob Image"} />
            <div className="flex justify-around items-center gap-x-3 mt-10">
              <img className="contact-image" src={ContactImage} alt="Contack Image" />
              <img className="contact-image" src={FaxImage} alt="Contack Image" />
              <img className="contact-image" src={EmailtImage} alt="Contack Image" />
              <img className='cursor-pointer' src={FacebookImage} alt="FaceBookImage" />
              <img className='cursor-pointer' src={TwitterImage} alt="TwitterImage" />
              <img className='cursor-pointer' src={WhatsAppImage} alt="WhatsAppImage" />
              <img className='cursor-pointer' src={LinkinImage} alt="LinkinImage" />
            </div>
          </div>
          <p className="mt-10 text-lg">&copy; Develop By Musa Joof {currentyear}, All Right Reserved</p>

        </footer>
     </div>
    </>
  )
}

export default App
