import React from 'react';
import { Category } from '../types';
import './CategoryGrid.scss';

interface CategoryGridProps {
  categories: Category[];
  onSelectCategory: (category: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <div
          key={category.name}
          className="category-card"
          onClick={() => onSelectCategory(category.id)}
        >
          <div className="category-image">
            <img 
              src={category.image.src} 
              alt={category.name}
              loading="lazy"
            />
          </div>
          <div className="category-title">
            <h3>{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid; 