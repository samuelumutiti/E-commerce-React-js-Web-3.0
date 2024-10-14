import React from 'react'
import './HomePage.css'
import imglogo from './asstes/2.png'
import instagram from './asstes/instagram.png'
import linkedin from './asstes/linkedin.png'
import twitter from './asstes/x.png'
import github from './asstes/github.png'
import women1 from './asstes/b10 (1).jpg'
import women2 from './asstes/women2.jpg'
import women3 from './asstes/women3.jpg'
import women4 from './asstes/women4.jpg'
import categorypp2 from './asstes/smartwatch2-removebg-preview.png'
import categorypp3 from './asstes/electronic2.jpg'
import categorypp4 from './asstes/cart-2.png'
import categorypp5 from './asstes/product-2.png'
import categorypp7 from './asstes/headphone.png'
import categorypp8 from './asstes/macbook.png'
import shoppingcart from './asstes/shopping_cart.png'
import banner1 from './asstes/new-3.png'
import image1 from './images/image (1).jpg'
import image2 from './images/image (2).jpg'
import image3 from './images/image (3).jpg'
import image4 from './images/image (4).jpg'
import image5 from './images/image (5).jpg'
import image6 from './images/image (6).jpg'
import image7 from './images/image (7).jpg'
import image8 from './images/image (8).jpg'
import image9 from './images/product7.jpg'
import image10 from './images/collection-1.jpg'
import moreproduct1 from './images/b18.jpg'
import moreproduct2 from './images/blog-2.webp'
import appstore from './images/app.jpg'
import googlestore from './images/play.jpg'

const HomePage = () => {
  return (
    <div className='container'>
        {/* top-navbar sections */}
        <div className='samuel' id='samuel'>
            <ul id='links'>
                <li className='active'><a href=''>Home</a></li>
                <li><a href=''>Features</a></li>
                <li><a href=''>Products</a></li>
                <li><a href=''>Account</a></li>
                <li><a href='' >FAQ</a></li>
               <center>
               <button className='close' id='close' onClick={() => {
                    document.getElementById("samuel").style.display = 'none';
                    window.location.reload();
                }}>&times;</button>
               </center>
            </ul>
        </div>
      <div className='top-navbar'>
        <div className='left-side'>
            <h1>CokSine</h1>
        </div>
        <div className='center-side'>
            <ul id='links'>
                <li className='active'><a href=''>Home</a></li>
                <li><a href=''>Features</a></li>
                <li><a href=''>Products</a></li>
                <button className='menu' id='menu' onClick={() => {
                    document.getElementById("samuel").style.display = 'block';
                }}>&#9776;</button>
                <li><a href=''>Account</a></li>
                <li><a href='' >FAQ</a></li>
            </ul>
        </div>
        <div className='right-side'>
            {/* <img src={shoppingcart} className='cart'/> */}
            <img src={imglogo} className='profile'/>
        </div>
      </div>
      {/* top-header sections */}
      <div className='top-header'><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='left-side'>
            <h1>Give Your Life style A New</h1>
            <h1>Ways to Stay at Home !</h1>
            <p>Competetly explore alternative benefits whereas leading <br/> edge catalsts for change, Globally leverage existing <br/> an expanded array of leadership</p>
            <center>
                <button>Explore More</button>
            </center>
        </div>
      </div><br/>
      <center>
            <h1 className='featured-products-h1'>Category</h1>
      </center>
      {/* category products */}
      <div className='category-products'>
        <div className='box'>
            <center>
                <img src={categorypp2}/>
            </center>
        </div>
        <div className='box' id='box-img'>
            <center>
                <img src={categorypp3}/>
            </center>
        </div>
        <div className='box'>
            <center>
                <img src={categorypp4}/>
            </center>
        </div>
        <div className='box'>
           <center>
             <img src={categorypp5}/>
           </center>
        </div>
        <div className='box'>
            <center>
                <img src={categorypp7}/>
            </center>
        </div>
        <div className='box'>
            <center>
                <img src={categorypp8}/>
            </center>
        </div>
      </div>
      {/* featured-products */}
       {/* banner sections */}
       <div className='banner'>
        <h1>Hello</h1>
        <div className='box'>
            <img src={banner1}/>
            <div>
                <p>Exclusively Available on CokSine Store</p>
                <h2>Yellow Jacket men & women</h2>
                <p>Competetly explore alternative benefits whereas leading <br/> edge catalsts for change, Globally leverage existing <br/> an expanded array of leadership</p>
                <button>Explore More</button>
            </div>
        </div>
      </div>
      <center>
            <h1 className='featured-products-h1'>Featured</h1>
      </center>
      <div className='featured-products'>
        <div className='box'>
            <center>
                <img src={image1}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image2}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image3}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image4}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image5}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image6}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image7}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image8}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image9}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
        <div className='box'>
            <center>
                <img src={image10}/>
            </center>
            <div className='title'>
                <p>Adidas</p>
                <p>$0.98</p>
            </div>
            <div className='subtitle'>
                <p>Cartoon T-Shirts</p>
                <button><img src={shoppingcart}/></button>
            </div>
        </div>
      </div>
       {/* newsletter */}
       <div className='newsletter'>
        <center>
            <h1>SUBSCRIBE For NewsLetters</h1>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <div className='newsletter-box'>
                <form>
                    <input type='text' placeholder='Your email address'/>
                    <button>SubScribe</button>
                </form>
            </div>
        </center>
       </div>
      {/* more-products */}
      <div className='more-products'>
        <div className='box'>
            <img src={moreproduct1}/>
            <div className='title1'>
                <p>Crazy deals</p>
                <h1>31.9% discount</h1>
                <p>The best classic dress is an sale at coksine store</p>
                <button>Explore More</button>
            </div>
        </div>
        <div className='box'>
            <img src={moreproduct2}/>
            <div className='title2'>
                <p>Spring / Summer</p>
                <h1>Upcomming season</h1>
                <p>classic new cloths are available on coksine store</p>
                <button>Products View</button>
            </div>
        </div>
      </div>
      <div className='testimony'>
        <div className='box'>
            <center>
                <img src={women1}/>
                <h1>Mutako Shema</h1>
                <p>Rwanda / Kigali city</p>
                <small>Best decision we made stunning website exceptional support always available and prompt issue, resolutio</small>
                <button className='links'>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                    <img src={github}/>
                </button>
            </center>
        </div>
        <div className='box'>
            <center>
                <img src={women2}/>
                <h1>Levi Okoye</h1>
                <p>Nigeria / Lagos city</p>
                <small>Working with sentry Oak is just great, every problem in my web dev is solved in a matter of love </small>
                <button className='links'>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                    <img src={github}/>
                </button>
            </center>
        </div>
        <div className='box'>
            <center>
                <img src={women3}/>
                <h1>Anele Lerato</h1>
                <p>South-Africa / Cape Town</p>
                <small>Efficient, reliable and results-oriented visually appealing website, improved online visibility</small>
                <button className='links'>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                    <img src={github}/>
                </button>
            </center>
        </div>
        <div className='box'>
            <center>
                <img src={women4}/>
                <h1>Belkis Anika</h1>
                <p>Ethiopia / Addis Baba</p>
                <small>They understood our brand and created a stunning website design, professional, responsive</small>
                <button className='links'>
                    <img src={instagram}/>
                    <img src={linkedin}/>
                    <img src={twitter}/>
                    <img src={github}/>
                </button>
            </center>
        </div>
      </div>
      {/* footer-nav */}
      <div className='footer-nav'>
        <div className='footer-box'>
        <div className='side-one'>
            <center>
                <h1>Donwload Our App</h1>
                <p>Donwload App for Android <br/>and Ios mobile phone</p><br/>
                <div>
                    <img src={appstore} className='appstore'/> 
                    <img src={googlestore} className='googleplay'/>
                </div>
            </center>
        </div>
        <div className='side-two'>
           <center>
            <h1>CokSine Store</h1><br/>
            <p>Our purpose is to sustainably make the pleasure and <br/> benefits of sports accessable to the many</p>
           </center>
        </div>
        <div className='side-three'>
            <center>
                <h4>Useful Links</h4><br/>
                <p>Features</p>
                <p>Products</p>
                <p>Account</p>
                <p>FAQ</p>
            </center>
        </div>
        <div className='side-four'>
            <center>
                <h4>Follow Us</h4><br/>
                <p>GitHub</p>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Twitter X</p>
            </center>
        </div>
        <div className='side-five'>
            <center>
                <h4>Copright 2024 are reserved on Coksine Store</h4>
            </center>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
