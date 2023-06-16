import React from 'react'
import Layout from './Layout'
import '../css/contactus.css'
import {Link} from 'react-router-dom'
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import { FaFacebookF,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contactus = () => {

  const sendEmail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';
    await emailjs.sendForm('gmail', 'technoid', e.target, 'SDCirC6Vq-c14Z7mu')
      .then((result) => {
        // alert('Message Sent !!!!');
        toast.success('Message Sent Successfully!')
        btn.value = 'Send'
        // console.log(result.text);
        e.target.reset();
      }, (error) => {
        toast.error("Failed to Sent")
        console.log(error.text);
      });
  };
  return (
    <Layout className="conmain">
      
      <section id="contact">
        <div className="contact-wrapper">
          <div className="social">
            <h4 class='text'>Write To US</h4>
            <form onSubmit={sendEmail} className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="conform-control"
                    placeholder="NAME"
                    name="name"
                    defaultValue=""
                    required="true"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="email"
                    className="conform-control"                   
                    placeholder="Email"
                    name="email"
                    defaultValue=""
                    required="true"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="number"
                    className="conform-control"                   
                    placeholder="MOBILE NO."
                    name="mobile"
                    defaultValue=""
                    required="true"
                  />
                </div>
              </div>
              <textarea
                className="conform-control"
                rows={5}
                placeholder="MESSAGE"
                name="message"
                required="true"
                defaultValue={""}
              />
              <button
                className="btn btn-primary send-button"
                type="submit"
                value="send"
                id="button"
              >
                <div className="alt-send-button">
                  <i className="fa fa-paper-plane" />
                  <span className="send-text">SEND</span>
                </div>
              </button>
            </form>
            <div><Toaster/></div>
          </div>


          {/* Left contact page */}
        <div className="direct-contact-container">
          <h4 class='text'>Reach Us</h4>
            <ul className="contact-list">
              <li className="list-item">
                <i className="fa fa-map-marker fa-2x">
                  <span className="contact-text place">
                    <a href="https://goo.gl/maps/1g2qMpPGssuAjaKT8">City, State</a>{" "}
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-phone fa-2x">
                  <span className="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (91) 9999999999
                    </a>
                  </span>
                </i>
              </li>
              <li className="list-item">
                <i className="fa fa-envelope fa-2x">
                  <span className="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      technoid.kolkata@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li>
                <Link to="#" target="" className="contact-icon">
              <h1><FaFacebookF size='20' color='blue'/></h1>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                <h1><SiGmail size='20' color='red'/></h1>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                <h1><FaLinkedinIn size='20' color='blue'/></h1>
                </Link>
              </li>
              <li>
                <Link to="#" target="_blank" className="contact-icon">
                <h1><FaYoutube size='20' color='red'/></h1>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </section>

    </Layout>
  )
}

export default Contactus