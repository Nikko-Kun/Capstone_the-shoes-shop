import React, { useState, useEffect } from 'react';
import { getSearchProduct } from 'src/services/product.service';
import { Card, TCard } from 'src/components/card';
import css from "./search.module.scss"
import _ from 'lodash';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<TCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false)

  const [sortedProducts, setSortedProducts] = useState<TCard[]>([]);


  useEffect(() => {
    if (!searchTerm) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    getSearchProduct(searchTerm)
      .then((response: any) => {
        setSearchResults(response.content);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [searchTerm]);

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  // SẮP XẾP
  const sortProducts = (products: TCard[], sortOrder: 'asc' | 'desc') => {
    const sorted = _.orderBy(products, ['price'], [sortOrder]);
    setSortedProducts(sorted);
  };


  return (
    <>
      <div className={css["search-result"]}>
        <div className={css["search-text"]}>Search</div>
        <input type="text" placeholder="Product name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          className={css["search-name"]} />
        {/* <button className={css["search-search"]} onClick={handleSearchClick} >SEARCH</button> */}
        <button className={css["search-search"]} >SEARCH</button>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={css['list-card']}>
            {isSearching && searchResults && searchResults.map((product) => {
              return <div className={css['card-container']}>
                <Card key={product.id} data={product} />
              </div>
            })}
          </div>
        )}
      </div>
      <div className={css["search-title"]}>
        <p>Search result</p>
      </div>
      <div className={css["search-product"]}>
        <div className={css["search-price"]}>
          <h2>Price</h2>
          <div className={css['btn-sort']}>
            <button className={css['btn-desc']} onClick={() => sortProducts(searchResults, 'desc')}>decrease <i className="fa-solid fa-caret-down" /></button>
            <br />
            <button className={css['btn-asc']} onClick={() => sortProducts(searchResults, 'asc')}>ascending</button>
          </div>

          
        </div>
      </div>
      <div className={css['list-card']}>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <Card key={product.id} data={product} />
              ))
            ) : (
              searchResults.map((product) => (
                <Card key={product.id} data={product} />
              ))
            )}
          </div>
    </>
  );
}

export default SearchInput;
