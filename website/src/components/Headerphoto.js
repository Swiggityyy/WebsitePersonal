import React from 'react';
import ImageGallery from 'react-image-gallery';
import "./react-image-gallery/styles/css/image-gallery.css";



export default function Headerphoto() {
    let random = Math.floor((Math.random() * 500) + 1); 

    const images = [
        {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00612.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00612.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00643.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00643.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00686.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00686.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00704.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00704.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00739.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00739.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00770.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00770.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00790.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00790.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00837.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00837.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP11.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP11.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP164.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP164.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP168.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP168.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP169.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP169.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP21.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP21.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP26.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP26.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP34.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP34.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP39.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP39.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP48.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP48.jpg',
            },
            {
            original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP50.jpg',
            thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP50.jpg',
            },
    ];

    
    return (
        <div>
            <ImageGallery items={images}
                startIndex={random}
                showPlayButton={false}
                showFullscreenButton={true}
                lazyLoad={true}
                thumbnailPosition='right'
                useBrowserFullscreen={true}
            />;
        </div>

    )
};
