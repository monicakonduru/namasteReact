import React, { useState } from 'react';

const CardComponent = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card"
      style={{
        width: '220px',
        border: 'none',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#212529',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(0.95)' : 'scale(1)',
        cursor: 'pointer',
        borderRadius: '12px',
        backgroundColor: '#fff',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          width: '100%',
          height: '140px',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <img
          src={card.image}
          alt="Card visual"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            borderRadius: '12px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)',
            pointerEvents: 'none',
            borderRadius: '12px',
          }}
        />
      </div>

      <div style={{ padding: '12px 16px', lineHeight: 1.3 }}>
        <h5 style={{ marginBottom: 8, fontWeight: 700, fontSize: '1.15rem', color: '#222' }}>
          {card.title}
        </h5>
        <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: '6px', color: '#555', fontSize: '0.875rem' }}>
          <i className="bi bi-star-fill text-warning" style={{ fontSize: '1.1rem' }}></i>
          <span>
            {card.rating} &bull; <strong style={{ fontWeight: 600 }}>{card.time}</strong>
          </span>
        </div>
        <p style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: '#6c757d', fontWeight: 500, fontSize: '0.9rem', marginBottom: 6 }} title={card.cuisines}>
          {card.cuisines}
        </p>
        <p style={{ color: '#6c757d', fontWeight: 500, fontSize: '0.9rem', marginBottom: 0 }} title={location}>
          {card.areaName}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
