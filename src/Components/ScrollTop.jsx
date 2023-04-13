import { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-500 fixed bottom-12 right-10 z-50 p-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-200`}
      onClick={handleClick}
    >
      <FaArrowAltCircleUp size={24} />
    </button>
  );
}

export default ScrollToTopButton;
