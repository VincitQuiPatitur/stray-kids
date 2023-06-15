import React, {useState} from "react";
import AlbumsCardList from "../../components/AlbumsCardList/AlbumsCardList";
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import "./AlbumsPage.scss";
import { categoryOptions } from "../../utils/constants.js";
function AlbumsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All Albums');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <main className="discography">
            <CategoryDropdown
                categoryOptions={categoryOptions}
                selectedCategory={selectedCategory}
                onChange={handleCategoryChange}
            />
            <AlbumsCardList />
        </main>
    );
}

export default AlbumsPage;