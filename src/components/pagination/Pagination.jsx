import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { Input, ButtonDefault } from "components";
import PropTypes from "prop-types";
import { usePagination } from "@/hooks/usePagination";

export const Pagination = ({ current, setCurrent, max }) => {
  const [input, setInput] = useState(current.toString());

  const { next, previous, handleChangeInput, handleKeyDown } = usePagination(
    setInput,
    setCurrent,
    max,
    current
  );

  return (
    <div className="flex items-center border max-w-content rounded-full bg-primary justify-center mx-4 my-5 px-4 py-0 shadow-lg hover:shadow-xl transition-shadow ">
      <ButtonDefault
        background={"secondary/20"}
        styles={
          "hover:border-transparent text-primary drop-shadow-[1px_5px_2px_black] text-2xl border-[2px]"
        }
        onClick={previous}
        hover="bg-white/20"
        disabled={current === 1 ? true : false}
        icon={<MdKeyboardDoubleArrowLeft size={22} />}
      />

      <Input
        input={input}
        handleChangeInput={handleChangeInput}
        handleKeyDown={handleKeyDown}
        max={max}
        setCurrent={setCurrent}
      />

      <ButtonDefault
        background={"secondary/20"}
        styles={
          "hover:border-transparent text-primary drop-shadow-[1px_5px_2px_black] text-2xl border-[2px]"
        }
        onClick={next}
        hover="bg-white/20"
        disabled={current == max}
        icon={<MdKeyboardDoubleArrowRight size={22} />}
      />
    </div>
  );
};

Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
};
