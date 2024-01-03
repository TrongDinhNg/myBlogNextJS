"use client";
import React from "react";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";

interface Props {
    title: string;
    image: string;
    description: string;
}

const CardTest = ({ title, image, description }: Props) => {
    return (
        <Card sx={{ display: "flex", maxWidth: 345, maxHeight: 110 }}>
            <CardMedia sx={{ height: 140 }} title={image}>
                <img src={image} width={100} height={100}></img>
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    title="title"
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    title="description"
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardTest;
