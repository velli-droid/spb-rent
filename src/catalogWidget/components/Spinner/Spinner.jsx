import React from 'react';
import { BeatLoader  } from 'react-spinners';

export default function Spinner() {
    return (
        <div className='catalog__spinner'>
            <BeatLoader color="#006CFF" size={15}/>
        </div>
    )
}