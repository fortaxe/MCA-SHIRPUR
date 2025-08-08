"use client";

import React, {
    useEffect,
    useRef,
    useState,
    useCallback,
    MutableRefObject,
    CSSProperties,
  } from "react";
  
  const IsDevice = (() => {
    if (typeof navigator === "undefined") return;
  
    const ua = navigator.userAgent;
  
    return {
      info: ua,
  
      Android() {
        return /Android/i.test(ua);
      },
      BlackBerry() {
        return /BlackBerry/i.test(ua);
      },
      IEMobile() {
        return /IEMobile/i.test(ua);
      },
      iOS() {
        return /iPhone|iPad|iPod/i.test(ua);
      },
      iPad() {
        return (
          /Mac/.test(ua) &&
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2
        );
      },
      OperaMini() {
        return /Opera Mini/i.test(ua);
      },
  
      any() {
        return (
          IsDevice?.Android() ||
          IsDevice?.BlackBerry() ||
          IsDevice?.iOS() ||
          IsDevice?.iPad() ||
          IsDevice?.OperaMini() ||
          IsDevice?.IEMobile()
        );
      },
    };
  })();
  
  function useEventListener<K extends keyof DocumentEventMap>(
    eventName: K,
    handler: (event: DocumentEventMap[K]) => void,
    element: Document | HTMLElement = document
  ) {
    //@ts-ignore
    const savedHandler = useRef<(event: DocumentEventMap[K]) => void>();
  
    useEffect(() => {
      savedHandler.current = handler;
    }, [handler]);
  
    useEffect(() => {
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
  
      const eventListener = (event: Event) => {
        if (savedHandler.current) {
          savedHandler.current(event as DocumentEventMap[K]);
        }
      };
  
      element.addEventListener(eventName, eventListener);
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    }, [eventName, element]);
  }
  
  interface CursorCoreProps {
    outerStyle?: CSSProperties;
    innerStyle?: CSSProperties;
    color?: string;
    outerAlpha?: number;
    innerSize?: number;
    innerScale?: number;
    outerSize?: number;
    outerScale?: number;
    trailingSpeed?: number;
    clickables?: string[];
  }
  
  function CursorCore({
    outerStyle,
    innerStyle,
    color = "220, 90, 90",
    outerAlpha = 0.3,
    innerSize = 8,
    outerSize = 8,
    outerScale = 6,
    innerScale = 0.6,
    trailingSpeed = 8,
    clickables = [
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ],
  }: CursorCoreProps) {
    const cursorOuterRef = useRef<HTMLDivElement>(null);
    const cursorInnerRef = useRef<HTMLDivElement>(null);
      //@ts-ignore
    const requestRef = useRef<number>();
      //@ts-ignore
    const previousTimeRef = useRef<number>();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isActiveClickable, setIsActiveClickable] = useState(false);
    const endX = useRef(0);
    const endY = useRef(0);
  
    const onMouseMove = useCallback(({ clientX, clientY }: MouseEvent) => {
      setCoords({ x: clientX, y: clientY });
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.top = `${clientY}px`;
        cursorInnerRef.current.style.left = `${clientX}px`;
      }
      endX.current = clientX;
      endY.current = clientY;
    }, []);
  
    const animateOuterCursor = useCallback(
      (time: number) => {
        setCoords((prev) => {
          const newX = prev.x + (endX.current - prev.x) / trailingSpeed;
          const newY = prev.y + (endY.current - prev.y) / trailingSpeed;
          if (cursorOuterRef.current) {
            cursorOuterRef.current.style.top = `${newY}px`;
            cursorOuterRef.current.style.left = `${newX}px`;
          }
          return { x: newX, y: newY };
        });
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateOuterCursor);
      },
      [trailingSpeed]
    );
  
    useEffect(() => {
      requestRef.current = requestAnimationFrame(animateOuterCursor);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, [animateOuterCursor]);
  
    const onMouseDown = useCallback(() => setIsActive(true), []);
    const onMouseUp = useCallback(() => setIsActive(false), []);
    const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
    const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);
  
    useEventListener("mousemove", onMouseMove);
    useEventListener("mousedown", onMouseDown);
    useEventListener("mouseup", onMouseUp);
    useEventListener("mouseover", onMouseEnterViewport);
    useEventListener("mouseout", onMouseLeaveViewport);
  
    useEffect(() => {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        if (isActive) {
          cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${innerScale})`;
          cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${outerScale})`;
        } else {
          cursorInnerRef.current.style.transform =
            "translate(-50%, -50%) scale(1)";
          cursorOuterRef.current.style.transform =
            "translate(-50%, -50%) scale(1)";
        }
      }
    }, [innerScale, outerScale, isActive]);
  
    useEffect(() => {
      if (cursorInnerRef.current && cursorOuterRef.current && isActiveClickable) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
          innerScale * 1.2
        })`;
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
          outerScale * 1.4
        })`;
      }
    }, [innerScale, outerScale, isActiveClickable]);
  
    useEffect(() => {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        const opacity = isVisible ? "1" : "0";
        cursorInnerRef.current.style.opacity = opacity;
        cursorOuterRef.current.style.opacity = opacity;
      }
    }, [isVisible]);
  
    useEffect(() => {
      const clickableEls = document.querySelectorAll(clickables.join(","));
      clickableEls.forEach((el) => {
        (el as HTMLElement).style.cursor = "none";
        el.addEventListener("mouseover", () => setIsActive(true));
        el.addEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.addEventListener("mousedown", () => setIsActiveClickable(true));
        el.addEventListener("mouseup", () => setIsActive(true));
        el.addEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
  
      return () => {
        clickableEls.forEach((el) => {
          el.removeEventListener("mouseover", () => setIsActive(true));
          el.removeEventListener("click", () => {
            setIsActive(true);
            setIsActiveClickable(false);
          });
          el.removeEventListener("mousedown", () => setIsActiveClickable(true));
          el.removeEventListener("mouseup", () => setIsActive(true));
          el.removeEventListener("mouseout", () => {
            setIsActive(false);
            setIsActiveClickable(false);
          });
        });
      };
    }, [clickables]);
  
    const styles = {
      cursorInner: {
        zIndex: 999,
        display: "block",
        position: "fixed",
        borderRadius: "50%",
        width: innerSize,
        height: innerSize,
        pointerEvents: "none",
        backgroundColor: `rgba(${color}, 1)`,
        ...(innerStyle || {}),
        transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
      } as CSSProperties,
      cursorOuter: {
        zIndex: 999,
        display: "block",
        position: "fixed",
        borderRadius: "50%",
        pointerEvents: "none",
        width: outerSize,
        height: outerSize,
        backgroundColor: `rgba(${color}, ${outerAlpha})`,
        transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
        willChange: "transform",
        ...(outerStyle || {}),
      } as CSSProperties,
    };
  
    document.body.style.cursor = "none";
  
    return (
      <>
        <div ref={cursorOuterRef} style={styles.cursorOuter} />
        <div ref={cursorInnerRef} style={styles.cursorInner} />
      </>
    );
  }
  
  export interface AnimatedCursorProps extends CursorCoreProps {}
  
  function AnimatedCursor(props: AnimatedCursorProps) {
    if (typeof navigator !== "undefined" && IsDevice?.any()) {
      return <></>;
    }
    return <CursorCore {...props} />;
  }
  
  export default AnimatedCursor;
  