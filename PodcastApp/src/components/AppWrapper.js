// src/components/AppWrapper.js
import React, { useEffect, useState } from "react";

export default function AppWrapper({ children }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial check
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

useEffect(() => {
  if (isDark) {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    script.id = "tenor-script";
    document.body.appendChild(script);

    return () => {
      const oldScript = document.getElementById("tenor-script");
      if (oldScript) document.body.removeChild(oldScript);
    };
  }
}, [isDark]);


  return (
    <div className="relative">
      {/* 🌌 Tenor GIF background */}
      {isDark && (
        <div
          className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"
          style={{ pointerEvents: "none", background: "black" }} // fallback layer
        >
          <div
            className="tenor-gif-embed"
            data-postid="6506452466663437743"
            data-share-method="host"
            data-aspect-ratio="1.76596"
            data-width="100%"
          >
            <a href="https://tenor.com/view/space-wallpaper-stars-background-outerspace-blinking-stars-space-travel-gif-6506452466663437743">
              Space Wallpaper Stars Background GIF
            </a>{" "}
            from{" "}
            <a href="https://tenor.com/search/space+wallpaper-gifs">
              Space Wallpaper GIFs
            </a>
          </div>
        </div>
      )}

      {/* App content (in front of GIF) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
