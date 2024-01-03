"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CardTrendNew from "./cardTrendNew";

export default class TrendNew extends Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        let data = [
            {
                id: 1,
                image: "https://via.placeholder.com/150x150",
                title: "Tiêu đề 1",
                description: "Mô tả 1",
            },
            {
                id: 2,
                image: "https://via.placeholder.com/150x150",
                title: "Tiêu đề 2",
                description: "Mô tả 2",
            },
            {
                id: 3,
                image: "https://via.placeholder.com/150x150",
                title: "Tiêu đề 3",
                description: "Mô tả 3",
            },
            {
                id: 4,
                image: "https://via.placeholder.com/150x150",
                title: "Tiêu đề 4",
                description: "Mô tả 4",
            },
        ];
        return (
            <div>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <CardTrendNew
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                            />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}
