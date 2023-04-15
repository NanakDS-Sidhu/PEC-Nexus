import React, { useEffect, useState} from "react"

export default function Card(props) {
    const [activeSlide, setActiveSlide] = useState(1);
    useEffect(()=>{
        props.onData(activeSlide);
    },[activeSlide])

    return (
        <div className="carousel w-full" >
            <div
                id="slide1"
                className={`carousel-item relative w-full ${activeSlide === 1 ? "active" : ""
                    }`}
            >
                <img src="https://plus.unsplash.com/premium_photo-1669741178222-004a82192170?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Pizza" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" onClick={() => setActiveSlide(4)} className="btn btn-circle">❮</a>
                    <a href="#slide2" onClick={() => setActiveSlide(2)} className="btn btn-circle">❯</a>
                </div>
            </div>
            <div
                id="slide2"
                className={`carousel-item relative w-full ${activeSlide === 2 ? "active" : ""
                    }`}
            >
                <img src="https://images.unsplash.com/photo-1680792563719-288027b2a090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Pizza" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" onClick={() => setActiveSlide(1)} className="btn btn-circle">❮</a>
                    <a href="#slide3" onClick={() => setActiveSlide(3)} className="btn btn-circle">❯</a>
                </div>
            </div>
            <div
                id="slide3"
                className={`carousel-item relative w-full ${activeSlide === 3 ? "active" : ""
                    }`}
            >
                <img src="https://images.unsplash.com/photo-1680955886049-ce69173143bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Pizza" />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" onClick={() => setActiveSlide(2)} className="btn btn-circle">❮</a>
                    <a href="#slide4" onClick={() => setActiveSlide(4)} className="btn btn-circle">❯</a>
                </div>
            </div>
            <div
                id="slide4"
                className={`carousel-item relative w-full ${activeSlide === 4 ? "active" : ""
                    }`}
            >
                <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" onClick={() => setActiveSlide(3)} className="btn btn-circle">❮</a>
                    <a href="#slide1" onClick={() => setActiveSlide(1)} className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}