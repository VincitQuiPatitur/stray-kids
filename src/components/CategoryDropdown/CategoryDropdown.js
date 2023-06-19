import React from "react";
import "./CategoryDropdown.scss";
function CategoryDropdown({ albumCategoryOptions, sortCategoryOptions, selectedAlbumCategory, selectedSortCategory, onAlbumCategoryChange, onSortCategoryChange }) {
    return (
        <section className="category">
            <div className="category__block">
                <label className="category__label" htmlFor="album-category-select">Select an album category:</label>
                <select
                    id="album-category-select"
                    className="category__select"
                    value={selectedAlbumCategory}
                    onChange={onAlbumCategoryChange}
                >
                    {albumCategoryOptions.map((category) => (
                        <option
                            key={category}
                            value={category}
                            className="category__option"
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="category__block">
                <label className="category__label" htmlFor="sort-category-select">Select sort category:</label>
                <select
                    id="sort-category-select"
                    className="category__select"
                    value={selectedSortCategory}
                    onChange={onSortCategoryChange}
                >
                    {sortCategoryOptions.map((category) => (
                        <option
                            key={category}
                            value={category}
                            className="category__option"
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}

export default CategoryDropdown;