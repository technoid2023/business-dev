import React, { useState } from 'react'
import Layout from './Layout'
import { Modal, Button } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { BiRupee } from "react-icons/bi";

const products = [
  { id: 1, name: 'Product 1', image: 'assests/pr1.jpg', price: 35000.00, description: 'Product 1 Description' },
  { id: 2, name: 'Product 2', image: 'assests/pr2.jpg', price: 25000.00, description: 'Product 2 Description' },
  { id: 3, name: 'Product 3', image: 'assests/pr3.jpg', price: 20000.00, description: 'Product 3 Description' },
  { id: 4, name: 'Product 4', image: 'assests/pr4.jpg', price: 45000.00, description: 'Product 4 Description' },
  { id: 5, name: 'Product 5', image: 'assests/pr5.jpg', price: 25000.00, description: 'Product 5 Description' }
];

const ProductItem =({item})=>{
  AOS.init({
    
  })
  const [showItem, setShowitem] = useState(false);

  const handleClose = () => setShowitem(false);
  const handleShow = () => setShowitem(true);

  return (
    <>
      <div className='product-card'>
      <div
        data-aos='zoom-in'
        className="shadow-lg p-3 mb-5 rounded"
        style={{backgroundColor:'transparent'}}
      >
        <div onClick={handleShow}>
          <h2 style={{color:'darkblue' ,textAlign:'center', fontFamily:'monospace'}}>{item.name} </h2>
          <img
            src={item.image}
            className="img-fluid"
            style={{ height: "200px", width: "200px" }}
            alt='...'
          />
        </div>

        <div className="flex-container">
          <div className="m-1 w-100">
            <h3 className="mt-1">
            <BiRupee/>{item.price}
            </h3>
            <p>Click on Image to See Details</p>
          </div>
          
        </div> 
      </div>
      <Modal show={showItem} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* Additional details or content can be added here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     
      {/* <div
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
      </div> */}
      </div>
      
    </>
  )

}

const Product = () => {
  return (
    <Layout>
    <div className='container' style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around', marginTop:'10%',marginBottom:'10%'}}>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
        
      ))}
      
    </div>
    </Layout>
  );
}

export default Product;
