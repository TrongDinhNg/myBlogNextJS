"use client";
import React from "react";
import { Card, Typography, CardMedia, CardContent } from "@mui/material";

interface Props {
    image?: string;
    title?: string;
    description?: string;
}

const CardTrendNew = (props: Props) => {
    const trendNew = props;
    return (
        <Card sx={{ display: "flex", maxWidth: 345, maxHeight: 110 }}>
            <CardMedia sx={{ height: 140 }}>
                <img src={trendNew.image} width={100} height={100}></img>
            </CardMedia>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    title="title"
                >
                    {trendNew.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    title="description"
                >
                    {trendNew.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardTrendNew;
