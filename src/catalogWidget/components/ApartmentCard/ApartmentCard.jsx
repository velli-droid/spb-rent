import React from 'react';

export default function ApartmentCard({ item, setSelectedApartmentId }) {
    return (
        <div 
          className="catalog-card"
          onClick={() => { 
            setSelectedApartmentId(item.id)
          }}
        >
            <div className="catalog-card__pic">
                <img src={item.main_photo.preview.url} alt="" />
            </div>
            <div className="catalog-card__content">
                <div className="catalog-card__title">
                    {item.title}
                </div>
                <div className="catalog-card__address">
                    Адрес: {item.address}
                </div>
                <div className="catalog-card__price">
                    от {item.price} р/ в сутки
                </div>
            </div>
        </div>
    )
}