import React, { useEffect, useState } from "react";
import { useRealtyClient } from "../../../services/realty-service";
import Spinner from "../Spinner/Spinner";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import ApartmentModal from "../ApartmentModal/ApartmentModal";

export default function CatalogRoot({ config }) {
  const [selectedApartmentId, setSelectedApartmentId] = useState(null);
  const [isError, setisError] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  const [isAllShown, setIsAllShown] = useState(false);
  const [apartmentsData, setApartmentsData] = useState([]);

  useEffect(() => {
    useRealtyClient
      .getApartments(config.humans, config.beginDate, config.endDate)
      .then((res) => {
        if (res.status === 200) {
          setApartmentsData(res.data.apartments);
          setIsloading(false);
        }
      })
      .catch(() => {
        setIsloading(false);
        setisError(true);
      });
  }, []);

  const showAllClickHandler = () => {
    setIsAllShown((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="catalog__inner">
        <div className="catalog__title section-title">
          <h2>Апартаменты</h2>
        </div>
        {isError && <div>Произошла ошибка... Обновите страницу</div>}
        {isLoading && <Spinner />}
        {Boolean(apartmentsData.length) && (
          <>
            <div className={`catalog__grid ${isAllShown ? "show-all" : ""}`}>
              {apartmentsData.map((item) => {
                return (
                  <ApartmentCard
                    key={item.id}
                    item={item}
                    setSelectedApartmentId={setSelectedApartmentId}
                  />
                );
              })}
            </div>
            <ApartmentModal
              apartmentsData={apartmentsData}
              selectedId={selectedApartmentId}
              setSelectedId={setSelectedApartmentId}
              isAuth={config.isAuth}
            />
          </>
        )}
        {Boolean(apartmentsData.length - 6 > 0) && (
          <button
            onClick={showAllClickHandler}
            className="catalog__more-btn btn btn_secondary"
          >
            {isAllShown ? "Скрыть" : `Показать все (${apartmentsData.length})`}
          </button>
        )}
      </div>
    </div>
  );
}
