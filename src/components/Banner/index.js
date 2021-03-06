import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { Link } from 'react-router'
import './index.css'

export const Banner = (props) => {
  const { bannerData } = props


  return (

    <Carousel style={{height: window.innerWidth*0.4975}} className="banner" autoplay infinite dots>
   {
        bannerData.map((item, index) => {
          return (
            <Link to={item.url} className="bannerItem" key={index}>
              <img src={item.image} className="bannerImg" />
            </Link>
          )
        })
      }    
    
    </Carousel>
  )
}
