import { useEffect, useState } from "react";

export const usePagination = (setInput, setCurrent, max, current) => {
  const goToPage = (page) => {
    const newPage = parseInt(page);
    if (newPage > 0 && newPage <= max) {
      setCurrent(newPage);
      setInput(newPage.toString());
    }
  };
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      goToPage(event.target.value);
    }
  };

  const next = () => {
    const newCurrent = current + 1;
    goToPage(newCurrent);
  };

  const previous = () => {
    const newCurrent = current - 1;
    goToPage(newCurrent);
  };

  return {
    handleKeyDown,
    next,
    previous,
    handleChangeInput,
  };
};
