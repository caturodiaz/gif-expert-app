import React from 'react';
import {useFetchGif} from '../hooks/useFetchGif'
import { GIFgridItem } from './GIFgridItem';


export const GIFgrid = ({category}) => {

   const {data:images, loading} = useFetchGif(category);
    // useEffect(()=> {
    //     getGifs( category )
    //         .then(imgs => setImages( imgs ));
    // }, [category]);

    return (
        <>
            <h3>{category}</h3>

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GIFgridItem
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
                
            </div>
        </>
    )
}
