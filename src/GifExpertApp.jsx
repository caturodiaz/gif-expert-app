import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GIFgrid } from './components/GIFgrid';

function GifExpertApp(props) {


   const [categories, setCategories] = useState([]);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                { 
                    categories.map( category => {
                        return <GIFgrid 
                                    key={category}
                                    category={ category } 
                                />
                    }) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp

