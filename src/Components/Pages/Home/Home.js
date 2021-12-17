import React from 'react';
import Banner from './Banner/Banner';
import FeatureArea from './FeatureArea/FeatureArea';
import ProductArea from './ProductArea/ProductArea';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Banner />
            <FeatureArea />
            <ProductArea />
        </div>
    );
};

export default Home;