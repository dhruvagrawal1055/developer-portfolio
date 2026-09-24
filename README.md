# Dhruv Agrawal — Systems & Software Engineering Portfolio

A high-performance, developer-focused portfolio designed with a modern Cyberpunk & Terminal aesthetic. Built for **Dhruv Agrawal**, Associate Software Developer at **TransUnion**, highlighting low-latency distributed systems, modular C++ execution engines, Apache Arrow columnar pipelines, and high-concurrency cloud backend architectures.

---

## ⚡ Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS v4 + Custom Cyber Glowing Utilities & Scanline Shaders
- **Icons**: Lucide React + Custom Brand SVGs
- **Typography**: Space Grotesk (Headers), Plus Jakarta Sans (Body), Fira Code (Monospace & Terminal)
- **Audio & Visual Effects**: Web Audio API sci-fi synthesizer, Dynamic Matrix Rain Canvas, Live Interactive Terminal CLI Sandbox

---

## 🚀 Key Features

1. **Cyberpunk Hero & Live Shell**:
   - Dynamic typing role switcher.
   - Interactive micro-terminal with quick executable chips (`whoami`, `experience`, `architecture`, `skills`, `contact`).
   - Telemetry strip with real metrics (~16ms latency @ 300 req/s, 45% distributed perf gain, 10+ regions C++ engine).

2. **TransUnion Core Systems Showcase**:
   - Detailed breakdown of the modular C++ plugin architecture, Ray Serve distributed inference, Vertex AI Ray clusters, and enterprise zero-trust RBAC.

3. **Interactive Architecture Blueprint Visualizer**:
   - Step-by-step interactive diagram of dataflow from gRPC Ingress → Modular C++ Engine → Apache Arrow Zero-Copy Pipeline → Ray Serve & Vertex AI Cluster.

4. **Featured Projects & Modal Deep Dives**:
   - **Workforce Management SaaS** (Java, Spring Boot, Kafka, Redis, PostgreSQL).
   - **Modular C++ Execution Engine** (C++, Apache Arrow, Ray Serve, gRPC).
   - **Smart Notes Android Application** (Kotlin, Jetpack Compose, Room, Firebase).

5. **Technical Arsenal & Keyword Radar**:
   - Interactive categorised tabs for Languages, Distributed Systems, Frameworks, Cloud/DevOps, and Architectural Paradigms.

6. **Interactive Full Terminal Sandbox**:
   - Functional command line with autocomplete (`Tab`), history navigation (`↑/↓`), clear, help, and custom easter eggs (`sudo hire`, `matrix`, `ping transunion`).

7. **Resume Modal & Quick Download**:
   - Built-in PDF reader and one-click download for `Dhruv_Agrawal_Resume.pdf`.

8. **Keyboard Command Palette (`Cmd+K` / `Ctrl+K`)**:
   - Quick searchable shortcut modal to jump across sections, trigger matrix rain, or download resume.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Free Deployment Options

### Option 1: Vercel (Recommended)
```bash
npx vercel
```

### Option 2: GitHub Pages
1. In `vite.config.js`, set `base: '/<repo-name>/'`.
2. Run `npm run build`.
3. Push `dist` directory to `gh-pages` branch.

### Option 3: Netlify
```bash
npx netlify deploy --prod --dir=dist
```
