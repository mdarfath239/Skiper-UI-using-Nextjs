"use client";

import { createRef, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ImageMouseTrailProps {
  items: string[];
  children?: React.ReactNode;
  className?: string;
  imgClass?: string;
  distance?: number;
  maxNumberOfImages?: number;
  fadeAnimation?: boolean;
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef(items.map(() => createRef<HTMLDivElement>()));
  const currentZIndexRef = useRef(1);
  const globalIndexRef = useRef(0);
  const lastRef = useRef({ x: 0, y: 0 });

  const activate = (image: HTMLDivElement, x: number, y: number) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const relativeX = x - containerRect.left;
    const relativeY = y - containerRect.top;

    image.style.left = `${relativeX}px`;
    image.style.top = `${relativeY}px`;

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1;
    }

    image.style.zIndex = String(currentZIndexRef.current);
    currentZIndexRef.current++;

    image.dataset.status = "active";

    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive";
      }, 1500);
    }

    lastRef.current = { x, y };
  };

  const deactivate = (image: HTMLDivElement) => {
    image.dataset.status = "inactive";
  };

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - lastRef.current.x, y - lastRef.current.y);
  };
  const handleOnMove = (e: React.MouseEvent) => {
    const clientX = e.clientX;
    const clientY = e.clientY;
  
    if (distanceFromLast(clientX, clientY) > window.innerWidth / distance) {
      const lead =
        refs.current[globalIndexRef.current % refs.current.length].current;
  
      const tailIndex =
        (globalIndexRef.current - maxNumberOfImages + refs.current.length) %
        refs.current.length;
      const tail = refs.current[tailIndex]?.current;
  
      if (lead) activate(lead, clientX, clientY);
      if (tail) deactivate(tail);
  
      globalIndexRef.current++;
    }
  };
  

  return (
    <section
    onMouseMove={handleOnMove}
    ref={containerRef}
    className={cn(
      "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg",
      className
    )}
  >
    {items.map((item, index) => (
      <div
        key={index}
        ref={refs.current[index]}
        data-status="inactive"
        className={cn(
          "absolute -translate-x-1/2 -translate-y-1/2 scale-0 rounded-3xl overflow-hidden transition-transform duration-300 opacity-0 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500",
          imgClass
        )}
      >
        <img
          src={item}
          alt={`image-${index}`}
          className="object-cover w-full h-full"
        />
      </div>
    ))}

    {children}
  </section>
  );
}
