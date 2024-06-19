import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useRealtyCalendarClient } from "../../../services";
import SearchForm from "../SearchForm/SearchForm";
import MapCard from "../MapCard/MapCard";
import { BeatLoader } from "react-spinners";

export default function MapRoot({humans = 1, startDate, endDate}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [apartmentsData, setApartmentsData] = useState([]);
    const calendarClient = useRealtyCalendarClient;

    useEffect(() => {
        calendarClient.getApartments(humans).then((res) => {
            if (res.status === 200) {
                setApartmentsData(res.data.apartments);
                setIsLoading(false);
            }
        }).catch(() => {
            setIsError(true);
            setIsLoading(false);
        })
    }, [])

    const placemarkClickHandler = (id) => {
        console.log(id)
    }

    return (
        <>  
            <SearchForm humans={humans}/>

            {isLoading && (
                <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <BeatLoader color="#006CFF" size={15}/>
                </div>
            )}

            {isError && (
                <div className="container" style={{paddingTop: 20}}>
                   Произошла ошибка... Обновите страницу
                </div>
            )}

            {!isLoading && !isError && (
                <>
                    <div className="container">
                        <div className="map-card-wrapper">
                            <MapCard />
                        </div>
                    </div>
                
                    <YMaps>
                        <Map defaultState={{ center: [59.9386, 30.3141], zoom: 8 }} width={'100%'} height={'100%'}>
                            <Placemark geometry={[59.82904338848839,30.3719569563321]}/>  
                            <Placemark geometry={[59.915057,30.47001]}/>  
                            <Placemark geometry={[59.964899,30.347363]}/>  
                            <Placemark geometry={[60.043413,30.362284]}/>  
                            <Placemark geometry={[59.938954999991,30.31564399999997]}/>  
                        </Map>
                    </YMaps>
                </>
            )}
        </>
    )
}