import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";

export default function ProductPage() {
  const {
    products,
    loading,
    searchText,
    setSearchText,
    selectedCategory,
    handleCategoryChange,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    uniqueCategories
  } = useProducts();


  const cart = useSelector(state => state.cart)

  if (loading) {
    return (
      <div className="h-lvh flex items-center justify-center">
        <h1 className="font-bold text-3xl">Data Loading please wait..</h1>
      </div>
    );
  }


  return (
    <div>
      <header className="shadow shadow-gray-600 p-4 flex flex-col md:flex-row items-center justify-between">
        <NavLink
          to="/dashboard"
          className="font-bold text-xl md:text-2xl mb-2 md:mb-0"
        >
          Dashboard
        </NavLink>
        <h1 className="font-bold text-xl md:text-2xl mb-2 md:mb-0">
          Product Page
        </h1>
        <div className="flex">
          <NavLink to="/cart" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span className="font-bold text-xl">{cart.length}</span>
          </NavLink>
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-5 md:px-10">
        <div className="flex gap-3 p-3 md:p-5 items-center justify-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="search the item.."
            className="w-full border border-violet-800 p-2 rounded-md"
          />
          <button
            onClick={handleSearch}
            className="bg-violet-700  text-white h-10 rounded-md px-2 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="mb-4 flex gap-4 items-center px-3 md:px-0">
          <label
            htmlFor="category-filter"
            className="whitespace-nowrap block text-md  "
          >
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="border border-violet-600 mt-1 block w-full px-2 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg rounded-md"
          >
            <option value="All">All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-x-[50px] justify-center mx-auto">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex gap-2 justify-center items-center my-10">
        {Array(totalPages)
          .fill(0)
          .map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`${
                currentPage === i + 1 ? "bg-blue-700" : "bg-violet-700"
              }  text-white  rounded-md px-2 cursor-pointer`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
}
