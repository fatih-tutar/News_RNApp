import React, { useState, useEffect } from 'react';

import useNews from './app/hooks/useNews';

import Screen from './app/components/Screen';
import SearchBar from './app/components/SearchBar';
import FeaturedNews from './app/components/FeaturedNews';
import BreakingNews from './app/components/BreakingNews';
import PoliticalNews from './app/components/PoliticalNews';
import TechNews from './app/components/TechNews';
import EntertainmentNews from './app/components/EntertainmentNews';

export default function App() {
  
  const [
    featuredNews, 
    politicalNews, 
    entertainmentNews, 
    techNews, 
    breakingNews
  ] = useNews();

  return (
    <Screen>
      <SearchBar/>
      <FeaturedNews item={featuredNews}/>
      <BreakingNews data={breakingNews}/>
      <PoliticalNews data={politicalNews}/>
      <TechNews data={techNews}/>
      <EntertainmentNews data={entertainmentNews}/>
    </Screen>
  )
}