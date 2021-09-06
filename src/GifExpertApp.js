import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Hunter x Hunter'])

    // const handleAdd = anime => {
    //     anime = 'Dragon Ball'
    //     // setcategories([anime, ...categories])
    //     setcategories( cats => [...cats, anime])
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setcategories} />
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                        key={ category }
                        category={ category } />
                    ))
                }
            </ol>

        </>
    )
}
