import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import Recipes from '../components/Recipes';
import styles from '../styles/RecipePage.module.css';

const RecipesPage = () => {
  return (
    <Layout>
      <Head>
        <title>Recipes | Cora Colvin</title>
        <meta name="description" content="A collection of recipes by private chef Cora Colvin" />
      </Head>
      
      
      {/* Pass featuredOnly={false} to show all recipes */}
      <Recipes featuredOnly={false} />
    </Layout>
  );
};

export default RecipesPage;