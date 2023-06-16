import React from 'react';
import Layout from './Layout'
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';


const Quote = () => {

  const sendEmail = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('button');
    btn.value = 'Sending...';
    await emailjs.sendForm('gmail', 'quotation', e.target, 'SDCirC6Vq-c14Z7mu')
      .then((result) => {
        // alert('Message Sent !!!!');
        toast.success('Quotation Sent Successfully!')
        btn.value = 'Send'
        // console.log(result.text);
        e.target.reset();
      }, (error) => {
        toast.error("Failed to Sent")
        console.log(error.text);
      });
  };
  return (
    <Layout>
      <div><Toaster/></div>
      <div className='container' style={{border:'1px solid GrayText',
       backgroundColor:'transparent', borderRadius:'20px',boxShadow:'0 15px 10px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)', width:'60%', padding:'5%', marginTop:'5%',marginBottom:'5%'}}>
        <h1 style={{textAlign:'center', marginBottom:'5%',font:'bold', color:'darkblue', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif'}}>Get Quotation</h1>
        <form className="row g-3" onSubmit={sendEmail}>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" placeholder='Enter your name' name='name' required='true' />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" placeholder='Enter your email' name='email' required='true' />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEmail4" className="form-label">
              Mobile No.
            </label>
            <input type="number" className="form-control" placeholder='Enter your mobile no.' name='mobile' required='true' />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Company Name
            </label>
            <input type="text" className="form-control" placeholder='Company name' name='company_name' required='true' />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Company GST No.
            </label>
            <input type="text" className="form-control" placeholder='GST no.' name='company_gst' required='true' />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Company Address
            </label>
            <input
              type="text"
              className="form-control"
              name='company_address'
              placeholder="Address" 
              required='true'
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Product Name
            </label>
            <input type="text" className="form-control" placeholder='Product' name='product_name' required='true' />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Product Quantity
            </label>
            <select name='product_quant' className="form-select" required='true'>
              <option selected="">Choose...</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Expected Date
            </label>
            <input type="date" className="form-control" name='date' required='true' />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary position-relative start-50 translate-middle-x" id="button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Quote