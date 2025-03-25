import React, { useState } from "react";
import Gallery from "./components/Gallery";
import CategoryGrid from "./components/CategoryGrid";
import { Category, GalleryImage } from "./types";
import { galleryImages } from "./data/images";
import { categories } from "./data/categories";
import "./App.scss";

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const getImagesForCategory = (
    category: keyof typeof galleryImages
  ): GalleryImage[] => {
    console.log(category);
    return galleryImages[category] || [];
  };

  const handleCategorySelect = (categoryId: string) => {
    const category = categories.find((c) => c.id === categoryId);
    if (category) {
      setSelectedCategory(category);
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <h1>הגלריה של סבתא</h1>
          <img
            src="/images/logo.jpeg"
            alt="Batya Goldstein Logo"
            className="logo"
          />
        </div>
      </header>
      <main>
        {selectedCategory ? (
          <Gallery
            images={getImagesForCategory(
              selectedCategory.id as keyof typeof galleryImages
            )}
            category={selectedCategory.name}
            onBack={handleBack}
          />
        ) : (
          <CategoryGrid
            categories={categories}
            onSelectCategory={handleCategorySelect}
          />
        )}
      </main>
    </div>
  );
};

export default App;
