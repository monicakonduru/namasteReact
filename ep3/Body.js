import React, { useEffect, useState } from 'react';
import CardComponent from './CardComponent';
import Shimmer from './Shimmer';
import restaurants from './restaurants.json'

const BodyComponent = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const mappedCards = restaurants.map(item => ({
                title: item.name,
                rating: item.rating ? item.rating.toString() : 'N/A',
                time: item.time ? item.time.toString() : 'N/A',
                cuisines: item.cuisines ? item.cuisines.join(', ') : 'Various',
                areaName: item.areaName || 'Unknown',
                image: item.cloudinaryImageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.cloudinaryImageId}`
                    : 'https://via.placeholder.com/660x440?text=No+Image',
            }));

            setCards(mappedCards);
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <>
            <h5 style={{ fontWeight: 'bold' }}>
                Restaurants with online food delivery in Bangalore
            </h5>
            {loading ? (
                <Shimmer />
            ) : (
                <div
                    style={{
                        maxWidth: '960px',
                        margin: '40px auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '24px',
                        justifyContent: 'center',
                    }}
                >
                    {cards.map((card, idx) => (
                        <CardComponent key={idx} card={card} />
                    ))}
                </div>
            )}
        </>
    );

};

export default BodyComponent;
