import React, { useState, useEffect } from 'react';
import styles from '../styles/Recipes.module.css';
import { fetchFromSanity, urlForImage } from '../lib/sanity';
import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';

const Recipes = ({ featuredOnly = true, maxItems = 6 }) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Modify query to filter by isFavorite if featuredOnly is true
        const filterCondition = featuredOnly ? 'isFavorite == true' : '';
        const limitClause = featuredOnly ? `[0...${maxItems}]` : '';
        
        const query = `*[_type == "recipe" ${filterCondition ? '&& ' + filterCondition : ''}] | order(publishedAt desc) ${limitClause} {
          _id,
          title,
          slug,
          description,
          thumbnailImage,
          "pdfUrl": recipePdf.asset->url,
          category,
          isFavorite,
          publishedAt
        }`;
        
        const data = await fetchFromSanity(query);
        setRecipes(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to load recipes');
        setIsLoading(false);
      }
    };
    
    fetchRecipes();
  }, [featuredOnly, maxItems]);
  
  // Function to open PDF in new window
  const openRecipePdf = (pdfUrl, title) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', `Recipe: ${title}`);
    } else {
      alert('PDF not available for this recipe');
    }
  };
  
  // Handle loading state
  if (isLoading) {
    return (
      <div className={styles.recipesContainer}>
        <h2 className={styles.sectionTitle}>
          {featuredOnly ? "Featured Recipes" : "All Recipes"}
        </h2>
        <div className={styles.loadingContainer}>
          <p>Loading recipes...</p>
        </div>
      </div>
    );
  }
  
  // Handle error state
  if (error) {
    return (
      <div className={styles.recipesContainer}>
        <h2 className={styles.sectionTitle}>
          {featuredOnly ? "Featured Recipes" : "All Recipes"}
        </h2>
        <div className={styles.errorContainer}>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className={styles.retryButton}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // No recipes found
  if (recipes.length === 0) {
    return (
      <div className={styles.recipesContainer}>
        <h2 className={styles.sectionTitle}>
          {featuredOnly ? "Featured Recipes" : "All Recipes"}
        </h2>
        <p className={styles.noContent}>
          {featuredOnly 
            ? "No featured recipes available yet. Check back soon for culinary inspiration!" 
            : "No recipes available yet. Check back soon for culinary inspiration!"}
        </p>
      </div>
    );
  }
  
  return (
    <div className={styles.recipesContainer} id="recipes">
      <h2 className={styles.sectionTitle}>
        {featuredOnly ? "Featured Recipes" : "Recipe Collection"}
      </h2>
      <div className={styles.introText}>
        <p>
          {featuredOnly 
            ? "A selection of my favorite recipes for you to download and enjoy at home."
            : "Browse and download my complete collection of recipes for inspiration in your own kitchen."}
        </p>
      </div>
      
      <div className={styles.recipeGrid}>
        {recipes.map((recipe) => (
          <div 
            key={recipe._id} 
            className={styles.recipeCard}
            onClick={() => openRecipePdf(recipe.pdfUrl, recipe.title)}
          >
            <div className={styles.recipeImageWrapper}>
              {recipe.thumbnailImage ? (
                <img 
                  src={urlForImage(recipe.thumbnailImage).width(400).height(300).url()} 
                  alt={recipe.title}
                  className={styles.recipeThumbnail}
                />
              ) : (
                <div className={styles.recipePlaceholder}>
                  <FaFilePdf className={styles.pdfIcon} />
                </div>
              )}
              {recipe.isFavorite && <span className={styles.favoriteTag}>Featured</span>}
            </div>
            
            <div className={styles.recipeInfo}>
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              {recipe.description && (
                <p className={styles.recipeDescription}>{recipe.description}</p>
              )}
              <div className={styles.recipeViewPdf}>
                View Recipe PDF <span className={styles.pdfLinkIcon}>→</span>
              </div>
              {recipe.category && (
                <span className={styles.recipeCategory}>{recipe.category}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {featuredOnly && recipes.length > 0 && (
        <div className={styles.viewAllContainer}>
          <Link href="/recipes" className={styles.viewAllButton}>
            View All Recipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Recipes;
