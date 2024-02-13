import React from 'react'
import './Banner.css'


interface BannerProps {
    srcImage: string,
    altText?: string // ? -> significa que altText é opcional
}

const Banner = ({ srcImage, altText }: BannerProps) => {
    return (
        <header className="banner">
            <img
                src={srcImage}
                alt={altText}
            />
        </header>
    )
}
export default Banner
