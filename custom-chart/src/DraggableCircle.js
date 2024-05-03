import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file for styling

const DraggableCircle = () => {
  // State to keep track of circle position
  const [position, setPosition] = useState({ x: 100, y: 100 });
  // State to keep track of mouse state
  const [isDragging, setIsDragging] = useState(false);
  const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });
  const [initialCirclePosition, setInitialCirclePosition] = useState({ x: 100, y: 100 });

  // Function to handle mouse down event
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialMousePosition({ x: e.clientX, y: e.clientY });
    setInitialCirclePosition({ x: position.x, y: position.y });
  };

  // Function to handle mouse move event
  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - initialMousePosition.x;
      const dy = e.clientY - initialMousePosition.y;
      setPosition({
        x: initialCirclePosition.x + dx,
        y: initialCirclePosition.y + dy,
      });
    }
  };

  // Function to handle mouse up event
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]); // Add isDragging to dependency array

  return (
    <div
      className="draggable-circle"
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleMouseDown}
    ></div>
  );
};

export default DraggableCircle;
