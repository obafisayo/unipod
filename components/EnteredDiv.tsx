'use client'
import React, { useRef, useEffect, ReactNode } from "react";

interface EnteredDivProps {
  element: ReactNode;
  threshold: number;
  whenDivIsentered?: () => void;
  whenYouLeaveDiv?: () => void;
  showLeaveFunction?: boolean;
}

function EnteredDiv({ element, threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction }: EnteredDivProps) {
  const enteredDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold,
    };

    const enteredDivRefel = enteredDivRef.current;
    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          whenDivIsentered?.()
        } else {
          if (showLeaveFunction) {
            whenYouLeaveDiv?.()
          }
        }
      });
    }

    const observer = new IntersectionObserver(callback, options);

    if (enteredDivRef.current) {
      observer.observe(enteredDivRef.current);
    }

    return () => {
      if (enteredDivRefel) {
        observer.unobserve(enteredDivRefel);
      }
    };
  }, [threshold, whenDivIsentered, whenYouLeaveDiv, showLeaveFunction]);

  return (
    <div ref={enteredDivRef}>
      {element}
    </div>
  )
}
export default EnteredDiv;
