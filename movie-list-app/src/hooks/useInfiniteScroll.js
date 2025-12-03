import { useEffect } from "react";

export function useInfiniteScroll(ref, callback, loading) {
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) callback();
      },
      { threshold: 1 }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, callback, loading]);
}
