import React, { useEffect, useState, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ComboBox, SelectBox } from "components";
import { useGetCategoriasQuery } from "@/redux";
import { Context } from "@/App";
export const SearchCategory = () => {
  const { isCat, categorias, error, setIsCat, isFetching, productos } =
    useContext(Context);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (isFetching) {
      console.log("Cargando categorias...");
    }
    if (error) {
      console.log(error);
    }
    if (categorias) {
      setIsCat(categorias.data);
    }
  }, [categorias, isFetching, error, setIsCat]);

  const handleSelect = useCallback(
    (selectedItem) => {
      navigate(`/product/${selectedItem.idp}`);
    },
    [navigate]
  );

  const handleEnter = useCallback(() => {
    setQuery("");
  }, []);

  const handleKeyDown = useCallback(
    (event, selectedCategory) => {
      if (event.key === "Enter" && selectedCategory) {
        handleSelect(selectedCategory);
      }
    },
    [handleSelect]
  );

  return (
    <div className="inline-flex items-center border-b border-slate-200 rounded-full max-w-sm justify-between focus:shadow-primary/60 shadow-sm cursor-pointer ">
      <div className="">
        <ComboBox
          placeholder="Buscar por producto..."
          label={null}
          query={query}
          setQuery={setQuery}
          data={productos || []}
          isFetching={isFetching}
          itemTitle="proname"
          onSelect={handleSelect}
          onEnter={handleEnter}
          onKeyDown={handleKeyDown}
          navigateTo={navigate}
        />
      </div>
      <div className="">
        <SelectBox data={isCat || []} buttonText={"Categorias"} />
      </div>
    </div>
  );
};
