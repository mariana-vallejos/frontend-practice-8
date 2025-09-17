import { useEffect, useState } from "react";

type Size = {
  width: number;
  height: number;
};

const WindowTracker = () => {
  const [sizeWindow, setSizeWindow] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setSizeWindow({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <h2>Current size window</h2>
      <p>Current width: {sizeWindow?.width} px</p>
      <p>Current width: {sizeWindow?.height} px</p>
    </section>
  );
};

export default WindowTracker;
