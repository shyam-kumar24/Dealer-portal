import { useState, useEffect } from "react";
import { GlobalContext } from "../context";
import { useContext } from "react";

export default function useProducts() {
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
  const itemsPerPage = 6;

  // Get unique categories
  const uniqueCategories = [...new Set(itemList.map((item) => item.category))];

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItemList.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredItemList.length / itemsPerPage);

  // Fetch products on mount
  useEffect(() => {
    if(itemList.length === 0 && !loading){
        fetchProduct();
    }
  }, [itemList.length, loading]);

  // Handle category filter change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes

    if (category === "All") {
      setFilteredItemList(itemList);
    } else {
      const filtered = itemList.filter((item) => item.category === category);
      setFilteredItemList(filtered);
    }
  };

  // Handle search
  const handleSearch = () => {
    const filtered = itemList.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredItemList(filtered);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return {
    products: currentItems,
    loading,
    searchText,
    setSearchText,
    selectedCategory,
    handleCategoryChange,
    handleSearch,
    currentPage,
    totalPages,
    handlePageChange,
    uniqueCategories,
  };
}
