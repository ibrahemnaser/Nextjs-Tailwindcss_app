import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.asPath && setLoading(true);
    };
    const handleComplete = (url) => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath]);
  return (
    loading && (
      <section className="fixed top-0 bg-white z-[200] w-full h-full flex items-center justify-center">
        <div className="animate-spin bg-black shadow-lg w-14 h-14 border rounded-md"></div>
      </section>
    )
  );
};

export default Loading;
