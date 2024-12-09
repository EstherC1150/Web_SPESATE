"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

const useInViewAnimate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" }); // 반 이상 보일때 동작

  return { ref, isInView };
};

export default useInViewAnimate;
