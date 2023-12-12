interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listItem: string[];
  title: string;
  onClickItem: (value: string) => void;
}

const Dropdown = ({
  isOpen,
  setIsOpen,
  listItem,
  title,
  onClickItem,
}: Props) => {
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex ml-5">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-between px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full mr-6 rounded-xl"
        id="dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {title}
        {/* Heroicon name: solid/chevron-down */}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          id="dropdown-menu"
          aria-labelledby="dropdown-button"
          role="menu"
        >
          <div className="py-1" role="none">
            {listItem.map((item, idx) => (
              <p
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => {
                  onClickItem(item);
                  closeDropdown();
                }}
                key={`${item} - ${idx}`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Close the dropdown when clicking outside of it */}
      {isOpen && (
        <div className="fixed inset-0 h-full w-full" onClick={closeDropdown} />
      )}
    </div>
  );
};

export default Dropdown;
