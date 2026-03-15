import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An E-Commerce website is an online platform that faciliate the buying and selling of products or services over the internet. It serves as a virtual marketplace where bussiness and indiduals can showcase thier products, internet with customers and conduct transcations without the need for physical presence. E-Commerce website have gained immense popularity due to thier convenience, accsessibility, and the global reach they offer.</p>
            <p>E-Commerce website typically display products or services along with detailed description, images, prices, and any available variation (e.g. size, color). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox