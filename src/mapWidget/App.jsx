import React from 'react';
import { MapRoot } from './components';

export default function App({config}) {
    return (
        <MapRoot humans={config.humans} startDate={config.start_date} endDate={config.end_date}/>
    )
}