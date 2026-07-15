import { useEffect, useRef } from 'react';

const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    // options is intentionally stable — eslint-disable-next-line react-hooks/exhaustive-deps
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useScrollReveal;
