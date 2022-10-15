import { RefObject, useEffect, useRef } from 'react';

function useEventListener<T extends HTMLElement = HTMLDivElement>(
  // eslint-disable-next-line no-undef
  eventName: keyof WindowEventMap | string,
  // eslint-disable-next-line no-unused-vars
  handler: (event: Event) => void,
  element?: RefObject<T>,
) {
  // eslint-disable-next-line no-unused-vars
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    const targetElement: T | Window = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    const eventListener = (event: Event) => {
      if (savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // eslint-disable-next-line consistent-return
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

export default useEventListener;
