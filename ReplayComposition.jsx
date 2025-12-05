import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useRef, useState } from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig, continueRender, delayRender } from "remotion";
const ReplayComposition = ({ manifestUrl, preloadedData }) => {
  const [assets, setAssets] = useState(null);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const styleRef = useRef(null);
  const [handle] = useState(() => delayRender());
  const frame = useCurrentFrame();
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const instanceId = useRef("replay-" + Math.random().toString(36).substr(2, 9)).current;
  useEffect(() => {
    const loadAssets = async () => {
      try {
        let data = preloadedData;
        if (!data && manifestUrl) {
          const res = await fetch(manifestUrl);
          if (!res.ok) throw new Error("Failed to load render manifest JSON");
          data = await res.json();
        }
        if (!data) throw new Error("No render data provided");
        const [htmlRes, cssRes, jsRes] = await Promise.all([
          fetch(data.assets.html).then((r) => r.text()),
          fetch(data.assets.css).then((r) => r.text()),
          fetch(data.assets.js).then((r) => r.text())
        ]);
        setAssets({
          html: htmlRes,
          css: cssRes,
          js: jsRes,
          replayData: data.data
        });
        continueRender(handle);
      } catch (err) {
        console.error(err);
        setError(err.message);
        continueRender(handle);
      }
    };
    loadAssets();
  }, [manifestUrl, preloadedData, handle]);
  useEffect(() => {
    if (!assets || !containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = assets.html;
    if (!styleRef.current) {
      const style = document.createElement("style");
      style.innerHTML = assets.css;
      document.head.appendChild(style);
      styleRef.current = style;
    }
    try {
      if (window[instanceId]) {
        if (window[instanceId].cleanup) window[instanceId].cleanup();
      }
      const script = document.createElement("script");
      script.type = "module";
      script.text = `
        const REPLAY_DATA = ${JSON.stringify(assets.replayData)};
        const ROOT_ID = "${instanceId}";

        ${assets.js}

        // The user script should have defined window.ReplayRenderer or similar
        // We attach it to our specific instance key
        if (window.ReplayRenderer) {
          window["${instanceId}"] = window.ReplayRenderer;
          // Initialize
          const root = document.getElementById("${instanceId}");
          window["${instanceId}"].init(root, REPLAY_DATA);
        } else {
          console.error("The external JS did not define window.ReplayRenderer");
        }
      `;
      document.body.appendChild(script);
    } catch (e) {
      setError("Script Execution Error: " + e.message);
    }
    return () => {
      if (styleRef.current) styleRef.current.remove();
      if (window[instanceId] && window[instanceId].cleanup) {
        window[instanceId].cleanup();
      }
      delete window[instanceId];
      container.innerHTML = "";
    };
  }, [assets]);
  useEffect(() => {
    if (!assets || !window[instanceId]) return;
    try {
      window[instanceId].render(frame, fps, durationInFrames);
    } catch (e) {
      console.warn("Frame Render Error:", e);
    }
  }, [frame, assets, fps, durationInFrames]);
  if (error) {
    return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { background: "#330000", color: "red", alignItems: "center", justifyContent: "center" }, children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Render Error" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 140,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("p", { children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 141,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 139,
      columnNumber: 7
    });
  }
  if (!assets) return null;
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#fff" }, children: /* @__PURE__ */ jsxDEV(
    "div",
    {
      id: instanceId,
      ref: containerRef,
      style: { width: "100%", height: "100%", position: "relative", overflow: "hidden" }
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 151,
      columnNumber: 7
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 149,
    columnNumber: 5
  });
};
export {
  ReplayComposition
};
