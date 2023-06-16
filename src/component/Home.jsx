import React from 'react'
import Layout from './Layout'
import '../css/home.css'

import { GiAutoRepair } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegThumbsUp } from "react-icons/fa";
const Home = () => {
// let slideIndex = 0;

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 3000); // Change image every 3 seconds
// }
// useEffect(() => {
//   showSlides()
// },[])

  return (
    <Layout >
      <div className='homemain'>
      
      <img src="assests/home1.jpg"   style={{ height: "28rem" }}class="hero-image" />
  <div class="hero-text">
    <h1 style={{fontsize:'50px',color:'darkblue'}}>Welcome to Tech World</h1>
    <p style={{color:'brown'}}>Be OverPowerd with Online UPS</p>
        <button onClick={()=>{document.location.assign("/quote")}}>Get Quote</button>

</div>


        {/* carousel container ended */}
        {/* box containers started */}
        <div className='thirdsection'>
        <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><FaRegThumbsUp size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><GiAutoRepair size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div className="card bg-transparent border-0" style={{ width: "18rem"}}>
            <p style={{textAlign:'center'}}><TbTruckDelivery size='50' /></p>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
      
        <div class="container-wrapper">
          <div class="container1">
            <div class="image1">
              <img src="assests/service3.jpg" class="story" alt="Service 3" />
            </div>
            <div class="text1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis repellat,
                ut voluptate sequi reprehenderit sint non similique aut consequatur nam
                maxime quas sapiente vel saepe sed amet fugit! Unde, odio.
              </p>
            </div>
          </div>
          <div class="container1">
            <div class="text2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis repellat,
                ut voluptate sequi reprehenderit sint non similique aut consequatur nam
                maxime quas sapiente vel saepe sed amet fugit! Unde, odio.
              </p>
            </div>
            <div class="image2">
              <img src="assests/service2.jpg" class="story" alt="Service 2" />
            </div>
          </div>
        </div>

    <hr />
        {/* box containers ended */}
        <div className="social">
         <center><h4> Our Well Known Customers</h4></center>
        <div className="logo-container-track">
            <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
                alt=""
              />
            </div> <div className="clilogo-container">
              <img
                src="images/client1.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client2.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client3.svg"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client4.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client5.png"
                alt=""
              />
            </div>
            <div className="clilogo-container">
              <img
                src="images/client6.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Home
