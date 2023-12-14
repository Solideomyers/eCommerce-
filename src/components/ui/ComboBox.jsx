import clsx from "clsx";
import { useCombobox } from "downshift";
import { useId, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Spinner } from "../spinning/Spinner";

export const ComboBox = ({
  placeholder,
  label,
  onEnter,
  onSelect,
  query,
  setQuery,
  data,
  isFetching,
  itemTitle = "proname",
  itemSubtitle,
  navigateTo,
}) => {
  const id = useId();

  const filterValue =
    query === ""
      ? data
      : data.filter((producto) =>
          producto.proname
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  console.log(filterValue);
  const cb = useCombobox({
    id,
    onSelectedItemChange: ({ selectedItem }) => {
      if (onSelect && typeof onSelect === "function") {
        onSelect(selectedItem);
      }
    },
    items: query === "" ? [] : filterValue || [],
    itemToString: (item) => (item ? item[itemTitle] : ""),
    onInputValueChange: (changes) => {
      setQuery(changes.inputValue ?? "");
    },
  });

  useEffect(() => {
    if (cb.selectedItem) {
      navigateTo(`/product/${cb.selectedItem.idp}`);
      setQuery("");
    }
  }, [cb.selectedItem, navigateTo, setQuery]);

  const displayMenu = cb.isOpen && query !== "" && filterValue?.length > 0;

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && cb.selectedItem) {
      if (navigateTo && typeof navigateTo === "function") {
        navigateTo(`/category/${cb.selectedItem.id}`);
      }
    }
  };

  return (
    <div className="relative rounded-s-full w-full">
      {label && (
        <label className="mb-1 px-1 text-sm text-neutral-700" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          {...cb.getInputProps({
            id,
            value: query,
            className: clsx("w-full px-4 text-lg outline-none", {
              "rounded-s-full rounded-b-0": displayMenu,
              "rounded-s-full": !displayMenu,
            }),
            "aria-label": placeholder,
            placeholder,
            name: "query",
            onKeyDown: (event) => handleKeyDown(event, cb.selectedItem),
          })}
        />
        {isFetching && <Spinner />}
      </div>
      <ul
        {...cb.getMenuProps({
          className: clsx(
            "absolute top-10 z-[999999999] h-60 w-full overflow-y-scroll overscroll-y-none animate-scaleIn rounded-2xl border border-t-0 border-slate-500 bg-white shadow-lg",
            { hidden: !displayMenu, "mb-2": displayMenu }
          ),
        })}
      >
        {displayMenu &&
          filterValue.map((item, index) => (
            <li
              className={clsx(
                "flex cursor-pointer z-50 flex-col gap-1 border-b p-2 text-base font-normal text-gray-700",
                {
                  "bg-primary text-white ease-linear duration-75":
                    cb.highlightedIndex === index,
                }
              )}
              key={index}
              {...cb.getItemProps({ item, index })}
            >
              <span>{item[itemTitle]}</span>
              {itemSubtitle && <span>{item[itemSubtitle]}</span>}
            </li>
          ))}
      </ul>
    </div>
  );
};

ComboBox.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  onSelect: PropTypes.func,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  itemTitle: PropTypes.string,
  itemSubtitle: PropTypes.string,
  navigateTo: PropTypes.func,
};

export default ComboBox;
