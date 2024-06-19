import React, {useRef, useCallback, useEffect, useState, useMemo} from 'react';
import parse from 'html-react-parser';
import useOutsideClick from '../../../utils/outside-click';


export default function ApartmentModal({apartmentsData, selectedId, setSelectedId, isAuth}) {
    const [selectedData, setSelectedData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const data = apartmentsData.find((item) => item.id === selectedId)
        if (data) {
            setSelectedData(data)
            contentRef.current?.scroll(0, 0)
            setIsOpen(true)
            document.body.classList.add('modal-open')
        }
    }, [selectedId])

    const handleClose = useCallback(() => {
        setIsOpen(false)
        setSelectedId(null)
        document.body.classList.remove('modal-open')
    })

    useOutsideClick(wrapperRef, handleClose);

    const showAuthAlert = () => {
        document.body.classList.remove('scroll-down');
        document.body.classList.add('scroll-up');
        setTimeout(() => {
            document.querySelector('.profile').classList.add('active')
        }, 200)
    }

    const reservationClickHandler = () => {
        if (!isAuth) {
            handleClose();
            showAuthAlert();
        }
    }

    return (
        <div className={`modal modal_apartment ${isOpen ? 'active' : ''}`} >
            <div className="modal__wrapper js-modal-wrapper" ref={wrapperRef}>
                <div className="modal__close js-modal-close">
                    <svg className="icon-svg" onClick={handleClose}>
                        <use xlinkHref="/assets/svg/sprite.svg#close"></use>
                    </svg>
                </div>
                {!selectedData && (
                    <div className='modal__error'>
                        Произошла ошибка... Обновите страницу
                    </div>
                )}
                {!!selectedData && (
                    <>
                        <div className="modal__head">
                            <div className="modal__head-swiper">
                                <img src={selectedData.photos[0].file} alt="" />  
                            </div>
                            <div className="modal__head-content">
                                <div className="modal__title">
                                    {selectedData.title}
                                </div>
                                <div className="modal__text">
                                    Адрес: {selectedData.address}
                                </div>
                                <div className="modal__price">
                                    от {selectedData.price} р / в сутки
                                </div>
                                <div className="modal__actions">
                                    <button className="btn btn_primary" onClick={reservationClickHandler}>
                                        Забронировать
                                    </button>
                                    <button className="btn btn_bordered">
                                        Получить консультацию
                                    </button>
                                    <button className="btn btn_secondary btn_question">
                                        Безопасная бронь
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal__content" ref={contentRef}>
                            <div className="modal__content-title">
                                О квартире: 
                            </div>
                            <div className="modal__content-text">
                                { parse(selectedData.desc) }
                            </div>
                        </div>
                    </>
                )}
                
            </div>
        </div>
    )
}