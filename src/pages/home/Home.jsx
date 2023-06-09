import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";
import UpComing from "./upcoming/UpComing";
import Latest from "./latest/Latest";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <UpComing />
            <Latest />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
