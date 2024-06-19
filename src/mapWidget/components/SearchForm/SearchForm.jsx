import React from "react";

export default function SearchForm({humans}) {
    return (
        <div className="catalog-map__search">
            <div className="container">
                <div className="catalog-map__search-form">
                    <div className="catalog-map__search-fields">
                        <div className="form-group">
                            <input type="text" className="form-group__input" id="input-date-1" placeholder=" " />
                            <label htmlFor="input-date-1" className="form-group__label">
                                Заезд
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-group__input" id="input-date-2" placeholder=" " />
                            <label htmlFor="input-date-2" className="form-group__label">
                                Отъезд
                            </label>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-group__input" id="input-date-3" placeholder=" "/>
                            <label htmlFor="input-date-3" className="form-group__label">
                                Количество гостей
                            </label>
                        </div>
                    </div>
                    <div className="catalog-map__search-actions">
                        <div className="form-submit">
                            <button type="submit" className="form-submit__btn btn">
                                Найти
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}