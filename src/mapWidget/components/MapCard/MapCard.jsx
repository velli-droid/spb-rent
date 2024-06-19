import React from "react";

export default function MapCard() {
    return (
        <div className="catalog-card catalog-card_map">
            <div className="catalog-card__pic">
                <img src="https://img.realtycalendar.ru/uploads/photo/file/1152/1152511/large_IMG_7389-HDR.jpg" alt="" />
            </div>
            <div className="catalog-card__content">
                <div className="catalog-card__title">
                    ЖК "Три ветра" с видом на Газпром Арену
                </div>
                <div className="catalog-card__address">
                    Адрес: г. Санкт-Петербург, ул. Ропшинская дом 4.
                </div>
                <div className="catalog-card__price">
                    от 5000 р/ в сутки
                </div>
            </div>
        </div>
    )
}