import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { ReplayComposition } from "./ReplayComposition.jsx";
import { Game } from "./Game.jsx";
const App = () => {
  const [mode, setMode] = useState("loading");
  const [manifestUrl, setManifestUrl] = useState(null);
  const [localData, setLocalData] = useState(null);
  const [config, setConfig] = useState({
    width: 1080,
    height: 1920,
    fps: 30,
    durationInFrames: 300
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const renderUrl = params.get("render");
    if (renderUrl) {
      setManifestUrl(renderUrl);
      fetch(renderUrl).then((r) => r.json()).then((data) => {
        if (data.config) setConfig(data.config);
        setLocalData(data);
        setMode("player");
      }).catch((e) => {
        console.error("Failed to load manifest", e);
        setMode("game");
      });
    } else {
      setMode("game");
    }
  }, []);
  const handleReplayGenerated = (url) => {
    window.location.href = `?render=${encodeURIComponent(url)}`;
  };
  if (mode === "loading") {
    return /* @__PURE__ */ jsxDEV("div", { className: "loading", children: "Initializing..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 47,
      columnNumber: 12
    });
  }
  if (mode === "player") {
    return /* @__PURE__ */ jsxDEV("div", { className: "player-wrapper", children: [
      /* @__PURE__ */ jsxDEV(
        Player,
        {
          component: ReplayComposition,
          durationInFrames: config.durationInFrames,
          fps: config.fps,
          compositionWidth: config.width,
          compositionHeight: config.height,
          controls: true,
          loop: true,
          autoPlay: true,
          inputProps: {
            manifestUrl,
            preloadedData: localData
          },
          style: { width: "100%", height: "100%" }
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 53,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: window.location.pathname,
          style: {
            position: "absolute",
            top: 20,
            left: 20,
            background: "rgba(0,0,0,0.5)",
            color: "white",
            border: "1px solid white",
            padding: "8px 16px",
            textDecoration: "none",
            zIndex: 100,
            borderRadius: "4px"
          },
          children: "Exit to Menu"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 68,
          columnNumber: 9
        }
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 52,
      columnNumber: 7
    });
  }
  return /* @__PURE__ */ jsxDEV(Game, { onReplayGenerated: handleReplayGenerated }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 89,
    columnNumber: 10
  });
};
createRoot(document.getElementById("app")).render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 92,
  columnNumber: 51
}));
