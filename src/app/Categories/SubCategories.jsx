import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import ArrowLeftIcon from "../../components/icons/ArrowLeftIcon.jsx";
import PlusIcon from "../../components/icons/PlusIcon.jsx";

import Table from "../../components/Table.jsx";

import { AuthProvider } from "../../store/AuthProvider.jsx";
import getEndpoint from "../../constants/apiEndpoints.js";

export default function SubCategories() {
  const { accessToken } = useContext(AuthProvider);
  const navigate = useNavigate();

  const { state } = useLocation();
  const { categoryId } = useParams();

  const category = state?.rowData;

  if (!category) {
  }

  console.log(category);
  console.log(categoryId);

  function handleModalToggle(isVisible) {}

  return (
    <>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            to="/categories"
          >
            <ArrowLeftIcon />
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">
            {category.categoryName}
          </h2>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          type="button"
          onClick={() => handleModalToggle(true)}
        >
          <PlusIcon cssClass="mr-2 h-4 w-4" />
          Add Sub-category
        </button>
      </header>
      <Table
        //   key={doTableReRender}
        configKey="category"
        //   onDelete={handleDeleteData}
      />
    </>
  );
}
