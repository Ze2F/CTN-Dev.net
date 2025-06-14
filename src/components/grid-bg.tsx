import React, { useState, useEffect, useRef, useCallback } from 'react';

interface GridItemProps {
  index: number;
  mousePosition: { x: number; y: number } | null;
  itemRef: React.RefObject<HTMLDivElement | null>;
}

const GridItem: React.FC<GridItemProps> = ({ index, mousePosition, itemRef }) => {
  const defaultStyle = 'bg-background';
  const activeStyle = 'bg-foreground opacity-25 shadow-[0px_0px_4px_4px_rgba(0,_0,_0,_0.1)] shadow-primary-x';
  const [scale, setScale] = useState(1);
  const [style, setStyle] = useState(defaultStyle);

  const calculateDistance = useCallback(() => {
    if (!mousePosition || !itemRef.current) {
      setScale(1);
      setStyle(defaultStyle);
      return;
    }

    const { x: mouseX, y: mouseY } = mousePosition;
    const rect = itemRef.current.getBoundingClientRect();
    const itemCenterX = rect.left + rect.width / 2;
    const itemCenterY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
    );

    const maxDistance = 200;
    const minScale = 0.4;
    const maxScale = 0.8;

    if (distance < maxDistance) {
      const normalizedDistance = distance / maxDistance;
      const newScale = maxScale - (maxScale - minScale) * normalizedDistance;
      setScale(newScale);

      setStyle(activeStyle);
    } else {
      setScale(1);
      setStyle(defaultStyle);
    }
  }, [mousePosition, itemRef]);

  useEffect(() => {
    calculateDistance();
  }, [calculateDistance]);

  return (
    <div
      ref={itemRef}
      className={`
        aspect-square 
        transform
        transition-all 
        duration-1000
        ease-out 
        ${style} 
      `}
      style={{
        transform: `scale(${scale})`,
        zIndex: scale > 1 ? 10 : 0,
      }}
    />
  );
};

const GridBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const [numCols, setNumCols] = useState(0);
  const [numRows, setNumRows] = useState(0);
  const [gridItems, setGridItems] = useState<React.RefObject<HTMLDivElement | null>[]>([]);

  const updateGridDimensions = useCallback(() => {
    if (gridContainerRef.current) {
      const containerWidth = gridContainerRef.current.offsetWidth;
      const containerHeight = gridContainerRef.current.offsetHeight;
      const itemSize = 40;

      const cols = Math.floor(containerWidth / itemSize);
      const rows = Math.floor(containerHeight / itemSize);

      setNumCols(cols);
      setNumRows(rows);

      const newGridItems: React.RefObject<HTMLDivElement | null>[] = [];
      for (let i = 0; i < cols * rows; i++) {
        newGridItems.push(React.createRef<HTMLDivElement>());
      }
      setGridItems(newGridItems);
    }
  }, []);

  useEffect(() => {
    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);
    return () => window.removeEventListener('resize', updateGridDimensions);
  }, [updateGridDimensions]);


  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const totalGridItems = numCols * numRows;

  return (
    <div
      ref={gridContainerRef}
      className="fixed inset-0 grid bg-background z-0"
      style={{
        gridTemplateColumns: `repeat(${numCols}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
      }}
    >
      {gridItems.slice(0, totalGridItems).map((itemRef, i) => (
        <GridItem
          key={i}
          index={i}
          mousePosition={mousePosition}
          itemRef={itemRef}
        />
      ))}
    </div>
  );
};

export default GridBackground;