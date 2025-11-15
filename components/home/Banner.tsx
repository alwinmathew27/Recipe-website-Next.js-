// import Image from "next/image";
// import banner from "../../public/images/Red and Yellow Playful Illustrative Khichdi Recipe YouTube Thumbnail.jpg";
"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Authentic Italian Pasta",
      subtitle: "Discover the secrets of traditional Italian cuisine",
      gradient: "from-orange-500 to-red-600",
      emoji: "🍝"
    },
    {
      title: "Fresh & Healthy Salads",
      subtitle: "Nutritious recipes for a balanced lifestyle",
      gradient: "from-green-500 to-emerald-600",
      emoji: "🥗"
    },
    {
      title: "Decadent Desserts",
      subtitle: "Sweet treats that melt in your mouth",
      gradient: "from-pink-500 to-purple-600",
      emoji: "🍰"
    },
    {
      title: "Savory Asian Delights",
      subtitle: "Experience the flavors of the East",
      gradient: "from-yellow-500 to-orange-600",
      emoji: "🍜"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-br ${slide.gradient} relative`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-6xl animate-bounce">{slide.emoji}</div>
              <div className="absolute top-20 right-20 text-5xl animate-pulse delay-100">{slide.emoji}</div>
              <div className="absolute bottom-20 left-20 text-7xl animate-bounce delay-200">{slide.emoji}</div>
              <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-300">{slide.emoji}</div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
              <div className="text-8xl mb-6 animate-pulse">{slide.emoji}</div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl mb-8 text-center opacity-90 drop-shadow-md">
                {slide.subtitle}
              </p>
              <button className="bg-white hidden sm:block text-gray-900 px-8 py-1 lg:py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                View Recipes
              </button>
            </div>

            {/* Wave Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-20">
              <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0,60 C150,90 350,0 600,60 C850,120 1050,30 1200,60 L1200,120 L0,120 Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300  ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}