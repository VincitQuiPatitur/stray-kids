import React from "react";
import "./CategoryDropdown.scss";
function CategoryDropdown({ categoryOptions, selectedCategory, onChange }) {
    return (
        <section className="category">
            <div className="category__block">
                <label className="category__label" htmlFor="category-select">Select an album category:</label>
                <select
                    id="category-select"
                    className="category__select"
                    value={selectedCategory}
                    onChange={onChange}
                >
                    {categoryOptions.map((category) => (
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