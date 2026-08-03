import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

const API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImJhYmE5ZGEyLTQ2NDgtNDE1Ny1iMTUyLTc1ZGFkMWZiZGJhZCIsImlhdCI6MTc4NTcwNzcyMCwic3ViIjoiZGV2ZWxvcGVyLzllZDA1MDg5LWUwNmMtYzcxNi02ZDBjLTAxZmRkZWU1MWI3NCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxODEuOTAuODIuMzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.lUbiVY49H6sMssxAcNh6Ogy2-uluncNEreW9Q1WG0DqLY1Hpxih4M2Y5cK_Gsm-XKseFPsnJJxdHNWacDbEVbw";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/api/clashroyale': {
        target: 'https://api.clashroyale.com/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/clashroyale/, ''),
        headers: {
          'Authorization': `Bearer ${API_KEY}`
        }
      }
    }
  }
})
