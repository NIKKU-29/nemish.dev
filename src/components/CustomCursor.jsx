import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      if (!cursor) return;

      // Update cursor position
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`; // Fixed typo from e.clientX to e.clientY

      // Determine the target element
      const target = e.target;

      if (target.closest('.navbar__item')) {
        // Hide cursor when over .navbar__item
        cursor.style.transform = 'translate(-50%, -50%) scale(0)';
        cursor.style.opacity = '0';
      } else if (
        target.closest('a, button, .language-btn') ||
        target.tagName === 'I' ||
        target.tagName === 'SPAN'
      ) {
        // Enlarge and change blend mode for interactive elements
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.opacity = '1';
      } else {
        // Default cursor style
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.mixBlendMode = 'normal';
        cursor.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{
        position: 'fixed',
        width: '15px',
        height: '15px',
        background: '#fa0e45',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999999,
        transition: 'transform 0.15s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.15s ease',
        boxShadow: '0 0 15px 5px rgba(250, 14, 69, 0.6)',
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
    />
  );
};

export default CustomCursor;