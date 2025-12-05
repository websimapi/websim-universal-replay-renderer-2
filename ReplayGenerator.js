export const generateReplayAssets = async (gameData) => {
  // 1. Replay JS Logic
  const jsContent = `
    class RNG {
      constructor(seed) { this.state = seed; }
      next() {
        this.state = (this.state * 1664525 + 1013904223) % 4294967296;
        return this.state / 4294967296;
      }
    }

    window.ReplayRenderer = {
      state: null,
      dom: {},
      
      init: function(root, data) {
        this.data = data;
        this.root = root;
        
        root.innerHTML = '<div class="game-area"><div id="player" class="player"></div><div id="obstacles"></div><div class="hud">SCORE: <span id="score">0</span></div></div>';
        
        this.dom.player = root.querySelector('#player');
        this.dom.obstaclesContainer = root.querySelector('#obstacles');
        this.dom.score = root.querySelector('#score');
        
        this.resetState();
      },

      resetState: function() {
        this.state = {
          tick: 0,
          playerX: 50,
          score: 0,
          obstacles: [], 
          rng: new RNG(this.data.seed)
        };
      },

      simulateStep: function(targetFrame) {
        const SPAWN_RATE = 20; 
        const SPEED = 1.5; 
        const PLAYER_SPEED = 2; 
        
        while (this.state.tick < targetFrame) {
          const tick = this.state.tick;
          const input = this.data.inputs[tick] || 0; 

          this.state.playerX += input * PLAYER_SPEED;
          this.state.playerX = Math.max(0, Math.min(100, this.state.playerX));

          for (let i = this.state.obstacles.length - 1; i >= 0; i--) {
            let obs = this.state.obstacles[i];
            obs.y += SPEED;
            if (obs.y > 100) {
              this.state.obstacles.splice(i, 1);
              this.state.score += 10;
            }
          }

          if (tick % SPAWN_RATE === 0) {
            const r = this.state.rng.next();
            this.state.obstacles.push({
              id: tick,
              x: r * 90, 
              y: -10
            });
          }

          this.state.tick++;
        }
      },

      render: function(frame, fps) {
        if (!this.root) return;

        if (frame < this.state.tick) {
          this.resetState();
        }

        this.simulateStep(frame);

        if (this.dom.player) this.dom.player.style.left = this.state.playerX + '%';
        if (this.dom.score) this.dom.score.innerText = this.state.score;
        
        let html = '';
        for (let obs of this.state.obstacles) {
          html += '<div class="obstacle" style="left: ' + obs.x + '%; top: ' + obs.y + '%;"></div>';
        }
        if (this.dom.obstaclesContainer) this.dom.obstaclesContainer.innerHTML = html;
      },

      cleanup: function() {
        if(this.root) this.root.innerHTML = '';
      }
    };
  `;

  const cssContent = `
    body { margin: 0; background: #000; overflow: hidden; }
    .game-area {
      position: relative;
      width: 100%;
      height: 100%;
      background: #020617;
      overflow: hidden;
    }
    .player {
      position: absolute;
      bottom: 10%;
      width: 6%;
      height: 4%;
      background: #38bdf8;
      box-shadow: 0 0 15px #38bdf8;
      border-radius: 4px;
      transform: translateX(-50%);
    }
    .obstacle {
      position: absolute;
      width: 8%;
      height: 5%;
      background: #ef4444;
      border-radius: 50%;
      box-shadow: 0 0 10px #ef4444;
    }
    .hud {
      position: absolute;
      top: 40px;
      left: 20px;
      font-family: monospace;
      font-size: 48px;
      color: white;
      z-index: 10;
      font-weight: bold;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    }
  `;

  const htmlContent = '<!-- Replay -->';

  try {
    const [htmlUrl, cssUrl, jsUrl] = await Promise.all([
      window.websim.upload(new File([htmlContent], "replay.html", { type: "text/html" })),
      window.websim.upload(new File([cssContent], "replay.css", { type: "text/css" })),
      window.websim.upload(new File([jsContent], "replay.js", { type: "application/javascript" }))
    ]);

    const manifest = {
      assets: { html: htmlUrl, css: cssUrl, js: jsUrl },
      config: { width: 1080, height: 1920, fps: 30, durationInFrames: gameData.totalFrames },
      data: { seed: gameData.seed, inputs: gameData.inputs }
    };

    const manifestUrl = await window.websim.upload(
      new File([JSON.stringify(manifest, null, 2)], "manifest.json", { type: "application/json" })
    );

    return manifestUrl;
  } catch (e) {
    console.error("Upload failed", e);
    throw e;
  }
};