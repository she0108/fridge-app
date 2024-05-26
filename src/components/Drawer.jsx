import { useState, useRef, useEffect } from "react";

const MAX_HEIGHT = window.innerHeight - 60;
const MIN_HEIGHT = 0;

export default function Drawer({ children, isOpen, setIsOpen }) {
  const [visibleHeight, setVisibleHeight] = useState(MIN_HEIGHT);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef(null);
  const startDragY = useRef(0);

  useEffect(() => {
    if (isOpen) {
      changeHeight(MAX_HEIGHT);
    }
  }, [isOpen]);

  // 클릭 시 드로어 열림/닫힘
  const handleClick = () => {
    if (visibleHeight === MAX_HEIGHT) {
      changeHeight(MIN_HEIGHT);
    } else if (visibleHeight === MIN_HEIGHT) {
      changeHeight(MAX_HEIGHT);
    }
  };

  // PC 클릭 핸들러
  const handleMouseDown = (event) => {
    setIsDragging(true);
    startDragY.current = event.clientY;
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const offsetY = event.clientY - startDragY.current;
      setVisibleHeight(visibleHeight - offsetY);
      startDragY.current = event.clientY;
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (visibleHeight > MAX_HEIGHT / 2) {
        changeHeight(MAX_HEIGHT);
      } else {
        changeHeight(MIN_HEIGHT);
      }
    }
    setIsDragging(false);
  };

  // 모바일 터치 핸들러
  const handleTouchStart = (event) => {
    setIsDragging(true);
    startDragY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const offsetY = event.touches[0].clientY - startDragY.current;
      setVisibleHeight(visibleHeight - offsetY);
      startDragY.current = event.touches[0].clientY;
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      if (visibleHeight > MAX_HEIGHT / 2) {
        changeHeight(MAX_HEIGHT);
      } else {
        changeHeight(MIN_HEIGHT);
      }
    }
    setIsDragging(false);
  };

  // 드로어에 애니메이션 효과 적용
  const changeHeight = (height) => {
    // 애니메이션 효과를 추가하기 위해 transition 속성 추가
    if (dragRef.current) dragRef.current.style.transition = "height 0.3s ease";

    const intervalId = setInterval(() => {
      setVisibleHeight(height);
    }, 20);

    setTimeout(() => {
      clearInterval(intervalId);
      // 애니메이션 종료 후에 다시 transition 속성 추가
      if (dragRef.current) dragRef.current.style.transition = "";
      if (height === MIN_HEIGHT) setIsOpen(false);
    }, 300);
  };

  return (
    <div
      id="wrapper"
      ref={dragRef}
      style={{ height: `${visibleHeight}px` }}
      className="absolute bottom-0 left-0 w-full rounded-t-2xl bg-white flex flex-col items-center overflow-hidden shadow-[0_-1px_5px_0_rgba(0,0,0,0.1)]"
    >
      <div
        id="handle-container"
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-2/3 h-6 flex justify-center items-center cursor-grab"
      >
        <div
          id="handle"
          className="w-2/5 h-[5px] m-2.5 rounded-md bg-gray-300 cursor-grab"
        />
      </div>
      {children}
    </div>
  );
}
