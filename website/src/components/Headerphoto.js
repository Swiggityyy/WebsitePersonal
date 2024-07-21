import React from 'react';
// import ImageGallery from 'react-image-gallery';
import "./react-image-gallery/styles/css/image-gallery.css";

export default function Headerphoto() {

    return (
        <section data-toggle="collapse" data-target=".navbar-collapse" id="">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-6">
                        <h1 class="mt-4"><a href="https://youtu.be/S04-Ys_H7AY?si=7ARleS0tatXfZmF7" target="_blank" >Wedding Video</a></h1>
                        <h1 class="mt-4"><a href="https://youtu.be/YyS6LK5dcDo" target="_blank" >Highlights v1</a></h1>
                        <h1 class="mt-4"><a href="https://youtu.be/HyIPNZj490c" target="_blank" >Highlights v2</a></h1>
                    </div>
                </div>
            </div>
        </section>

    )

// let random = Math.floor((Math.random() * 50) + 1); 

    // const images = [
    //     {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00612.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00612.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00643.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00643.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00686.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00686.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00704.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00704.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00739.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00739.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00770.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00770.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00790.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00790.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00837.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ALV00837.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP11.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP11.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP164.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP164.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP168.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP168.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP169.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP169.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP21.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP21.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP26.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP26.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP34.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP34.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP39.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP39.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP48.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP48.jpg',
    //         },
    //         {
    //         original: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP50.jpg',
    //         thumbnail: 'https://chrisanduyenie.s3.us-west-1.amazonaws.com/Mainpage/ChrisUyenie_RVP50.jpg',
    //         },
    // ];

    
    // return (
    //     <div>
    //         <iframe width="560" height="315" src="https://www.youtube.com/embed/S04-Ys_H7AY?si=a2vJimMwVB8gWY_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            
             {/* <ImageGallery items={images}
                startIndex={4}
                showPlayButton={false}
                showFullscreenButton={true}
                lazyLoad={true}
                thumbnailPosition='right'
                useBrowserFullscreen={true}
            />;  */}
    //     </div>

    // )
};



