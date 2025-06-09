import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function ProductPage() {
  const {
    fetchProduct,
    itemList,
    loading,
    filteredItemList,
    setFilteredItemList,
  } = useContext(GlobalContext);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;
  // pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItemsList = filteredItemList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalNoOfPages = Math.ceil(itemList.length / itemPerPage);
  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const { cart } = useSelector((state) => state);

  let uniqueCategory = [...new Set(itemList.map((item) => item.category))];

  useEffect(() => {
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="h-lvh flex items-center justify-center">
        <h1 className="font-bold text-3xl">Data Loading please wait..</h1>
      </div>
    );
  }

  const handleChange = (e) => {
    let category = e.target.value;
    setSelectedCategory(category);
    const filteredCategoryList = itemList.filter(
      (item) => item.category === category
    );
    setFilteredItemList(filteredCategoryList);
    if (category === "All") setFilteredItemList(itemList);
  };

  return (
    <div>
      <header className="shadow shadow-gray-600 p-4 flex  items-center justify-between">
        <NavLink to="/dashboard" className="font-bold text-2xl ">
          Dashboard
        </NavLink>
        <h1 className="font-bold text-2xl">Product Page</h1>
        <div className="flex pr-10">
          <NavLink to="/cart" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          </NavLink>
          <span className="font-bold text-2xl mt-[-10px]">{cart.length}</span>
        </div>
      </header>
      <div className="flex gap-20 px-10">
        <div className="flex gap-3 p-5 items-center justify-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="search the item.."
            className="w-full border border-violet-800 p-2 rounded-md"
          />
          <button
            onClick={() => {
              const filteredName = itemList.filter((item) =>
                item.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredItemList(filteredName);
            }}
            className="bg-violet-700  text-white h-10 rounded-md px-2 cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="mb-4 flex gap-4 mt-4 items-center">
          <label
            htmlFor="category-filter"
            className="whitespace-nowrap block text-md  "
          >
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleChange}
            className="border border-violet-600 mt-1 block w-full px-2 py-2 text-base  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg rounded-md"
          >
            <option value="All">All Categories</option>
            {uniqueCategory.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-fit grid grid-cols-3 gap-x-[50px] justify-center mx-auto">
        {currentItemsList &&
          currentItemsList.length &&
          currentItemsList.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
      </div>
      <div className="flex gap-2 justify-center items-center my-10">
        {Array(totalNoOfPages)
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
