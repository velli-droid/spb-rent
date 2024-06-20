import React, {
  useRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from "react";
import useOutsideClick from "../../../utils/outside-click";
import ReserveForm from "./ReserveForm";
import ApartmentModalCard from "./ApartmentModalCard";

export default function ApartmentModal({
  apartmentsData,
  selectedId,
  setSelectedId,
  isAuth,
}) {
  const [showReserveForm, setShowReserveForm] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const data = apartmentsData.find((item) => item.id === selectedId);
    if (data) {
      setSelectedData(data);
      contentRef.current?.scroll(0, 0);
      setIsOpen(true);
      document.body.classList.add("modal-open");
    }
  }, [selectedId]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setSelectedId(null);
    setShowReserveForm(false);
    document.body.classList.remove("modal-open");
  });

  useOutsideClick(wrapperRef, handleClose);

  const showAuthAlert = () => {
    document.body.classList.remove("scroll-down");
    document.body.classList.add("scroll-up");
    setTimeout(() => {
      document.querySelector(".profile").classList.add("active");
    }, 200);
  };

  const reservationClickHandler = () => {
    if (!isAuth) {
      handleClose();
      showAuthAlert();
    } else {
      setShowReserveForm(true);
    }
  };

  return (
    <div className={`modal modal_apartment ${isOpen ? "active" : ""}`}>
      <div className="modal__wrapper js-modal-wrapper" ref={wrapperRef}>
        <div className="modal__close js-modal-close">
          <svg className="icon-svg" onClick={handleClose}>
            <use xlinkHref="/assets/svg/sprite.svg#close"></use>
          </svg>
        </div>
        {!selectedData && (
          <div className="modal__error">
            Произошла ошибка... Обновите страницу
          </div>
        )}
        {!!selectedData && showReserveForm ? (
          <ReserveForm />
        ) : (
          <ApartmentModalCard
            selectedData={selectedData}
            contentRef={contentRef}
            reservationClickHandler={reservationClickHandler}
          />
        )}
      </div>
    </div>
  );
}
