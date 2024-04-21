import React from 'react';
import Carrosel1 from '../../../imgs/home/carrosel1.png'
import Carrosel2 from '../../../imgs/home/carrosel2.png'
import Carrosel3 from '../../../imgs/home/carrosel3.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
	<img src={Carrosel1} onDragStart={handleDragStart} role="presentation" alt=''/>,
	<img src={Carrosel2} onDragStart={handleDragStart} role="presentation" alt=''/>,
	<img src={Carrosel3} onDragStart={handleDragStart} role="presentation" alt=''/>,
];

const Gallery = () => <AliceCarousel innerWidth={500} animationDuration={2000} infinite={true} autoPlay={true} paddingLeft={160} mouseTracking items={items} />;

export default Gallery