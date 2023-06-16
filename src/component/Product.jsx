import React, { useState } from 'react';
import Layout from './Layout';
import AOS from 'aos'
import 'aos/dist/aos.css'

import { BiRupee } from "react-icons/bi";

const Product = () => {
  AOS.init({
    
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  

  return (
    <Layout>
      <div className='container' style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around', marginTop:'10%',marginBottom:'10%'}}>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5 rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 1 </h2>
          <img
            src='assests/pr4.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 45,000.00
            </h3>
            <p>Click on Image to See Details</p>
          </div>
          
        </div>
        
      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5 rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow} >
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 2</h2>
          <img
            src='assests/pr1.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 35,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>
      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5 rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 3</h2>
          <img
            src='assests/pr1.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 25,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>

      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5  rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 4</h2>
          <img
            src='assests/pr2.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 20,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>
      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5  rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 5</h2>
          <img
            src='assests/pr2.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 20,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>
      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5  rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 6</h2>
          <img
            src='assests/pr1.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 20,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>
      </div>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5  rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>Item 7</h2>
          <img
            src='assests/pr2.jpg'
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/> 20,000.00
            </h3><p>Click on Image to See Details</p>
          </div>
          
        </div>
      </div>
      </div>
      
    </Layout>
  )
}

export default Product;