import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* // Titulo */}
            <h1>GifExpertApp</h1>

            {/* // Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {/* // Listado de gifs */}
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}
