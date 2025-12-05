import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useEffect, useRef, useState, useCallback } from "react";
import nipplejs from "nipplejs";
import { generateReplayAssets } from "./ReplayGenerator.js";
import { Loader2, Share2, Play, RotateCcw } from "lucide-react";
class RNG {
  constructor(seed) {
    this.state = seed;
  }
  next() {
    this.state = (this.state * 1664525 + 1013904223) % 4294967296;
    return this.state / 4294967296;
  }
}
const Game = ({ onReplayGenerated }) => {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const containerRef = useRef(null);
  const requestRef = useRef();
  const stateRef = useRef({
    playerX: 50,
    obstacles: [],
    tick: 0,
    seed: Date.now(),
    inputs: {},
    // map of tick -> input value (-1, 0, 1)
    gameOver: false,
    score: 0
  });
  const inputRef = useRef(0);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") inputRef.current = -1;
      if (e.key === "ArrowRight" || e.key === "d") inputRef.current = 1;
    };
    const handleKeyUp = (e) => {
      if ((e.key === "ArrowLeft" || e.key === "a") && inputRef.current === -1) inputRef.current = 0;
      if ((e.key === "ArrowRight" || e.key === "d") && inputRef.current === 1) inputRef.current = 0;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    let manager = null;
    if (containerRef.current) {
      manager = nipplejs.create({
        zone: containerRef.current,
        mode: "static",
        position: { right: "50%", bottom: "100px" },
        color: "white",
        size: 100
      });
      manager.on("move", (evt, data) => {
        if (data.vector.x < -0.3) inputRef.current = -1;
        else if (data.vector.x > 0.3) inputRef.current = 1;
        else inputRef.current = 0;
      });
      manager.on("end", () => {
        inputRef.current = 0;
      });
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (manager) manager.destroy();
    };
  }, [gameState]);
  const startGame = () => {
    stateRef.current = {
      playerX: 50,
      obstacles: [],
      tick: 0,
      seed: Math.floor(Math.random() * 1e5),
      inputs: {},
      gameOver: false,
      score: 0,
      rng: new RNG(Math.floor(Math.random() * 1e5))
      // Use a fresh seed for RNG
    };
    stateRef.current.seed = stateRef.current.rng.state;
    setScore(0);
    setGameState("playing");
    inputRef.current = 0;
    requestRef.current = requestAnimationFrame(gameLoop);
  };
  const gameLoop = () => {
    const state = stateRef.current;
    if (state.gameOver) return;
    if (inputRef.current !== 0) {
      state.inputs[state.tick] = inputRef.current;
    }
    const SPAWN_RATE = 20;
    const SPEED = 1.5;
    const PLAYER_SPEED = 2;
    state.playerX += inputRef.current * PLAYER_SPEED;
    state.playerX = Math.max(0, Math.min(100, state.playerX));
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      let obs = state.obstacles[i];
      obs.y += SPEED;
      if (obs.y > 90 && obs.y < 98) {
        if (Math.abs(obs.x - state.playerX) < 6) {
          handleGameOver();
          return;
        }
      }
      if (obs.y > 100) {
        state.obstacles.splice(i, 1);
        state.score += 10;
        setScore(state.score);
      }
    }
    if (state.tick % SPAWN_RATE === 0) {
      const r = state.rng.next();
      state.obstacles.push({
        id: state.tick,
        x: r * 90,
        y: -10
      });
    }
    state.tick++;
    if (containerRef.current) {
      const playerEl = containerRef.current.querySelector("#player");
      if (playerEl) playerEl.style.left = state.playerX + "%";
      const obsContainer = containerRef.current.querySelector("#obstacles");
      if (obsContainer) {
        let html = "";
        for (let obs of state.obstacles) {
          html += `<div class="obstacle" style="left: ${obs.x}%; top: ${obs.y}%;"></div>`;
        }
        obsContainer.innerHTML = html;
      }
    }
    requestRef.current = requestAnimationFrame(gameLoop);
  };
  const handleGameOver = () => {
    stateRef.current.gameOver = true;
    cancelAnimationFrame(requestRef.current);
    setGameState("gameover");
  };
  const handleShareReplay = async () => {
    setGameState("uploading");
    try {
      const manifestUrl = await generateReplayAssets({
        seed: stateRef.current.seed,
        inputs: stateRef.current.inputs,
        totalFrames: stateRef.current.tick
      });
      onReplayGenerated(manifestUrl);
    } catch (e) {
      alert("Error generating replay: " + e.message);
      setGameState("gameover");
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "game-wrapper", ref: containerRef, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "game-area", children: [
      /* @__PURE__ */ jsxDEV("div", { id: "player", className: "player", style: { left: "50%" } }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 204,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { id: "obstacles" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 205,
        columnNumber: 9
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "hud", children: [
        "SCORE: ",
        score
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 206,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 203,
      columnNumber: 7
    }),
    gameState === "menu" && /* @__PURE__ */ jsxDEV("div", { className: "overlay", children: [
      /* @__PURE__ */ jsxDEV("h1", { children: "NEON DODGE" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 212,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("p", { children: "Tap left/right to move. Survive." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 213,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: startGame, children: [
        /* @__PURE__ */ jsxDEV(Play, { size: 20 }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 215,
          columnNumber: 13
        }),
        " START GAME"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 214,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 211,
      columnNumber: 9
    }),
    gameState === "gameover" && /* @__PURE__ */ jsxDEV("div", { className: "overlay", children: [
      /* @__PURE__ */ jsxDEV("h1", { style: { color: "#ef4444" }, children: "GAME OVER" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 222,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("p", { className: "final-score", children: [
        "Score: ",
        score
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 223,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("div", { className: "btn-group", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: startGame, children: [
          /* @__PURE__ */ jsxDEV(RotateCcw, { size: 20 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 226,
            columnNumber: 15
          }),
          " RETRY"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 225,
          columnNumber: 13
        }),
        /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: handleShareReplay, style: { background: "#8b5cf6" }, children: [
          /* @__PURE__ */ jsxDEV(Share2, { size: 20 }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 229,
            columnNumber: 15
          }),
          " SHARE REPLAY"
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 228,
          columnNumber: 13
        })
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 224,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 221,
      columnNumber: 9
    }),
    gameState === "uploading" && /* @__PURE__ */ jsxDEV("div", { className: "overlay", children: [
      /* @__PURE__ */ jsxDEV(Loader2, { className: "spin", size: 48, color: "#38bdf8" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 237,
        columnNumber: 11
      }),
      /* @__PURE__ */ jsxDEV("p", { children: "Generating Replay & Uploading Assets..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 238,
        columnNumber: 11
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 236,
      columnNumber: 9
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 201,
    columnNumber: 5
  });
};
export {
  Game
};
