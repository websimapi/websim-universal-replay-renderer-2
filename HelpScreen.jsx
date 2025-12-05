import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { Play, FileJson, Code, MonitorPlay, Info } from "lucide-react";
const HelpScreen = ({ onTryDemo }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("header", { style: { marginBottom: "3rem", textAlign: "center" }, children: [
      /* @__PURE__ */ jsxDEV("h1", { style: { fontSize: "3rem", marginBottom: "1rem", color: "#38bdf8" }, children: "Universal Replay Renderer" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 8,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("p", { style: { fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#94a3b8" }, children: "A deterministic rendering engine for JSON-based video replays." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 9,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 7,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "demo-section", style: { textAlign: "center", marginBottom: "4rem", padding: "2rem", background: "linear-gradient(to bottom, #1e293b, #0f172a)", borderRadius: "16px", border: "1px solid #334155", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }, children: [
      /* @__PURE__ */ jsxDEV("h3", { style: { marginTop: 0, color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }, children: [
        /* @__PURE__ */ jsxDEV(Play, { size: 20, className: "text-sky-400" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 16,
          columnNumber: 12
        }),
        "Interactive Demo"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("p", { style: { marginBottom: "1.5rem", color: "#94a3b8" }, children: "Don't have a manifest yet? Load a generated example to see how the engine handles physics and DOM updates." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: onTryDemo, children: "Load Example Replay" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 22,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 7
    }),
    /* @__PURE__ */ jsxDEV("div", { style: { display: "grid", gap: "3rem" }, children: [
      /* @__PURE__ */ jsxDEV("section", { className: "guide-section", children: [
        /* @__PURE__ */ jsxDEV("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV(MonitorPlay, { size: 24, color: "#38bdf8" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 31,
            columnNumber: 17
          }),
          "Usage Guide"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 30,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { style: { paddingLeft: "1rem", borderLeft: "4px solid #334155" }, children: [
          /* @__PURE__ */ jsxDEV("p", { children: [
            "This page is a player. To use it, you must provide a ",
            /* @__PURE__ */ jsxDEV("strong", { children: "Render Manifest" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 36,
              columnNumber: 74
            }),
            " via the URL query string."
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Pattern:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 39,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 39,
              columnNumber: 46
            }),
            /* @__PURE__ */ jsxDEV("code", { style: { display: "block", padding: "1rem", marginTop: "0.5rem", wordBreak: "break-all" }, children: [
              window.location.origin,
              window.location.pathname,
              "?render=",
              /* @__PURE__ */ jsxDEV("strong", { children: "YOUR_JSON_URL_HERE" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 41,
                columnNumber: 83
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 40,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 38,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV(Info, { size: 16, style: { display: "inline", verticalAlign: "text-bottom" } }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 45,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("em", { children: " Ensure your JSON file and assets have CORS enabled (Access-Control-Allow-Origin: *)." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 46,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 44,
            columnNumber: 17
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 34,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 29,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("section", { className: "guide-section", children: [
        /* @__PURE__ */ jsxDEV("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV(FileJson, { size: 24, color: "#38bdf8" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 53,
            columnNumber: 17
          }),
          "Manifest Specification"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 52,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("p", { children: "The JSON file serves as the entry point. It defines the environment configuration and points to the raw code assets." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 56,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { style: { position: "relative" }, children: [
          /* @__PURE__ */ jsxDEV("span", { style: { position: "absolute", top: "10px", right: "10px", fontSize: "0.8rem", color: "#64748b" }, children: "manifest.json" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 59,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("pre", { children: /* @__PURE__ */ jsxDEV("code", { children: `{
  "assets": {
    "html": "https://example.com/game.html", // Fragment to inject into container
    "css": "https://example.com/game.css",   // Stylesheet to inject
    "js": "https://example.com/game.js"      // Script containing the renderer logic
  },
  "config": {
    "width": 1920,
    "height": 1080,
    "fps": 30,
    "durationInFrames": 900
  },
  "data": {
    // Arbitrary data passed to your JS init() function.
    // Use this for game state, event logs, seeds, etc.
    "matchId": "xyz",
    "seed": 12345,
    "ticks": [...]
  }
}` }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 60,
            columnNumber: 22
          }) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 60,
            columnNumber: 17
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 51,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("section", { className: "guide-section", children: [
        /* @__PURE__ */ jsxDEV("h2", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
          /* @__PURE__ */ jsxDEV(Code, { size: 24, color: "#38bdf8" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 85,
            columnNumber: 17
          }),
          "JavaScript Interface"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 84,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("p", { children: "Your Javascript asset must expose a specific global interface. The player will invoke these methods to render the video." }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 88,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("div", { style: { background: "#1e293b", padding: "1.5rem", borderRadius: "8px", border: "1px solid #334155" }, children: [
          /* @__PURE__ */ jsxDEV("h3", { style: { color: "#f472b6", marginTop: 0 }, children: "window.ReplayRenderer" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 93,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsxDEV("code", { style: { fontSize: "1.1rem", color: "#fff" }, children: "init(rootElement, data)" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 96,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("p", { style: { margin: "0.5rem 0 0 1rem", fontSize: "0.95rem" }, children: [
              "Called once during initialization. Use this to parse your data, find DOM elements, and setup initial state.",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 98,
                columnNumber: 132
              }),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#94a3b8" }, children: "@param HTMLElement rootElement - The container div." }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 25
              }),
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 99,
                columnNumber: 118
              }),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#94a3b8" }, children: "@param Object data - The 'data' object from your manifest." }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 100,
                columnNumber: 25
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 97,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 95,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("div", { style: { marginBottom: "2rem" }, children: [
            /* @__PURE__ */ jsxDEV("code", { style: { fontSize: "1.1rem", color: "#fff" }, children: "render(frame, fps, duration)" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 105,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("p", { style: { margin: "0.5rem 0 0 1rem", fontSize: "0.95rem" }, children: [
              "Called every frame. You must update the DOM to reflect the state at the given frame.",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 107,
                columnNumber: 109
              }),
              /* @__PURE__ */ jsxDEV("span", { style: { color: "#94a3b8" }, children: "@param number frame - Current frame number (0-indexed)." }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 108,
                columnNumber: 25
              })
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 106,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 104,
            columnNumber: 17
          }),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("code", { style: { fontSize: "1.1rem", color: "#fff" }, children: "cleanup()" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 113,
              columnNumber: 21
            }),
            /* @__PURE__ */ jsxDEV("p", { style: { margin: "0.5rem 0 0 1rem", fontSize: "0.95rem" }, children: "Called when the renderer is destroyed. Use this to remove event listeners or free memory." }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 114,
              columnNumber: 21
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 112,
            columnNumber: 17
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 92,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 83,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 27,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 5
  });
};
const generateDemoData = () => {
  const htmlContent = `
    <div class="sky"></div>
    <div class="ground"></div>
    <div id="ball" class="ball"></div>
    <div class="score-board">
      FRAME: <span id="frame-count">0</span>
    </div>
  `;
  const htmlBlob = new Blob([htmlContent], { type: "text/html" });
  const cssContent = `
    .sky { position: absolute; top: 0; left: 0; width: 100%; height: 80%; background: linear-gradient(#87CEEB, #E0F7FA); }
    .ground { position: absolute; bottom: 0; left: 0; width: 100%; height: 20%; background: #4CAF50; }
    .ball { 
      position: absolute; 
      width: 60px; height: 60px; 
      background: #ff4757; 
      border-radius: 50%;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
      transform: translate(-50%, -50%);
    }
    .score-board {
      position: absolute; top: 20px; left: 20px;
      font-family: monospace; font-size: 24px; color: white;
      text-shadow: 1px 1px 0 #000;
      z-index: 10;
    }
  `;
  const cssBlob = new Blob([cssContent], { type: "text/css" });
  const jsContent = `
    window.ReplayRenderer = {
      ball: null,
      text: null,
      
      init: function(root, data) {
        console.log("Replay Initialized", data);
        this.ball = root.querySelector('#ball');
        this.text = root.querySelector('#frame-count');
      },

      render: function(frame, fps) {
        if (!this.ball) return;
        
        // Update UI
        this.text.innerText = frame;

        // Physics Logic (Simple Bounce)
        const duration = 60; // frames per bounce
        const progress = (frame % duration) / duration;
        
        // Parabolic arc approximation
        // y = 4 * h * x * (1 - x)
        const jumpHeight = 400;
        
        // Horizontal movement
        const x = (frame * 5) % 1000; 
        
        // Vertical movement
        const heightOffset = Math.abs(Math.sin(progress * Math.PI)) * jumpHeight;
        
        const y = (1080 * 0.8) - heightOffset - 30; // Ground level - height - radius

        this.ball.style.transform = "translate(" + x + "px, " + y + "px)";
      },

      cleanup: function() {
        console.log("Replay Cleanup");
      }
    };
  `;
  const jsBlob = new Blob([jsContent], { type: "application/javascript" });
  return {
    assets: {
      html: URL.createObjectURL(htmlBlob),
      css: URL.createObjectURL(cssBlob),
      js: URL.createObjectURL(jsBlob)
    },
    config: {
      width: 1080,
      height: 1080,
      fps: 30,
      durationInFrames: 300
    },
    data: { matchId: 12345, demo: true }
  };
};
export {
  HelpScreen,
  generateDemoData
};
