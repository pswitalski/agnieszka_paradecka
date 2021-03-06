import React from 'react';

const Category = ({name, className}) => {
    return (
        <div className={`categories__category ${className}`}>
            <h2 className="categories__name">{name}</h2>
            <div className="categories__background"></div>
        </div>
    )
}

export default Category;