import React from "react";
import parse from "html-react-parser";

export default function ApartmentModalCard({
  selectedData,
  reservationClickHandler,
  contentRef,
}) {
  return (
    <>
      <div className="modal__head">
        <div className="modal__head-swiper">
          <img src={selectedData?.photos[0].file} alt="" />
        </div>
        <div className="modal__head-content">
          <div className="modal__title">{selectedData.title}</div>
          <div className="modal__text">Адрес: {selectedData.address}</div>
          <div className="modal__price">
            от {selectedData.price} р / в сутки
          </div>
          <div className="modal__actions">
            <button
              className="btn btn_primary"
              onClick={reservationClickHandler}
            >
              Забронировать
            </button>
            <button className="btn btn_bordered">Получить консультацию</button>
            <button className="btn btn_secondary btn_question">
              Безопасная бронь
            </button>
          </div>
        </div>
      </div>
      <div className="modal__content" ref={contentRef}>
        <div className="modal__content-title">О квартире:</div>
        <div className="modal__content-text">{parse(selectedData.desc)}</div>
      </div>
    </>
  );
}
