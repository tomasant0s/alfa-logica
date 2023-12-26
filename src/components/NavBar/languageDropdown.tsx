import { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import br from '@/assets/br.png';
import en from '@/assets/usa.png';

interface DropdownProps {
  options: string[];
}

const flagMapping: Record<string, StaticImageData> = {
  PT: br,
  EN: en,
};

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center items-center w-full rounded-md border border-primary shadow-sm bg-primary px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {selectedOption || 'PT'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path fillRule="evenodd" d="M10 14l6-6H4l6 6z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1 flex flex-col items-center" role="none"> 
              {options.map((option, index) => (
                <div key={index}>
                  <Link href={`/${option.toLowerCase()}`} passHref>
                    <button
                      onClick={() => selectOption(option)}
                      className="flex items-center justify-start px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black cursor-pointer w-full text-left" 
                      role="menuitem"
                    >
                      <div className="mr-2">
                        <Image src={flagMapping[option]} alt={''} width={24} height={24} />
                      </div>
                      {option}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
