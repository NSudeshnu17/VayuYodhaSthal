// Vayu Yodha Sthal — Premium Audio-Guided Tour PWA (Complete & Optimized)

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";

/* ============================== ENHANCED THEME & STYLES ============================== */
const css = String.raw`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap');

:root {
  --primary: #2563eb;
  --primary-dark: #1e40af;
  --accent: #f59e0b;
  --success: #10b981;
  --danger: #ef4444;
  --saffron: #FF9933;
  --green: #138808;
  --white: #FFFFFF;
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-300: #cbd5e1;
  --slate-500: #64748b;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-900: #0f172a;
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --radius: 16px;
  --radius-lg: 24px;
  --radius-full: 9999px;
}

* { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0;
}

html { 
  scroll-behavior: smooth;
}

html, body, #root { 
  height: 100%; 
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(to bottom, #f8fafc, #e0f2fe);
  color: var(--slate-900);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 { 
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
}

h4 {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
}

p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--slate-600);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
}

.section {
  padding: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-header h2 {
  margin-bottom: 12px;
}

.section-header p {
  max-width: 700px;
  margin: 0 auto;
  font-size: 18px;
}

.hero {
  position: relative;
  background: linear-gradient(135deg, #00258e 0%, #0951c6 50%, #0065e1 100%);
  padding: 64px 24px 80px;
  text-align: center;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.05)" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') bottom/cover no-repeat;
  opacity: 0.3;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 24px;
  animation: fadeInDown 0.6s ease-out;
}

.hero-iaf-logo {
  width: 300px;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem;
}

.hero h1 {
  color: white;
  margin-bottom: 16px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 300;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  animation: fadeInUp 1s ease-out;
}

.hero-description {
  max-width: 700px;
  margin: 0 auto 40px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  line-height: 1.8;
  animation: fadeInUp 1.2s ease-out;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 1.4s ease-out;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: var(--radius-full);
  font-size: 15px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.18), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.btn:hover::before {
  transform: translateX(100%);
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb, #1da0d8);
  color: white;
  box-shadow: 0 12px 35px rgba(37, 99, 235, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 45px rgba(37, 99, 235, 0.55);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.7);
}

.btn-icon {
  width: 44px;
  height: 44px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--slate-100);
  color: var(--slate-700);
  border-radius: var(--radius-full);
}

.btn-icon:hover {
  background: var(--slate-200);
  transform: scale(1.05);
}

.btn-icon-primary {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-full);
  border: 3px solid rgba(255,255,255,0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary), #3b82f6);
  color: white;
  box-shadow: 0 8px 30px rgba(37, 99, 235, 0.3);
}

.btn-icon-primary:hover {
  box-shadow: 0 12px 40px rgba(37, 99, 235, 0.4);
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
  justify-content: center;
  animation: fadeIn 1.6s ease-out;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(15,23,42,0.18);
  color: rgba(255,255,255,0.9);
  font-size: 12px;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--slate-200);
  padding: 12px 0;
  transition: all 0.3s ease;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: var(--primary);
  cursor: pointer;
  transition: transform 0.2s;
}

.nav-brand:hover {
  transform: scale(1.02);
}

.flag {
  display: flex;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: var(--shadow);
  height: 32px;
  width: 80px;
}

.flag-saffron { background: var(--saffron); flex: 1; }
.flag-white { background: white; flex: 1; position: relative; }
.flag-green { background: var(--green); flex: 1; }

.ashoka-chakra {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border: 2px solid #000080;
  border-radius: 50%;
}

.card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-2px);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.about-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.about-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius);
  background: linear-gradient(135deg, #2563eb, #3b82f6);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.about-card h4 {
  margin-bottom: 12px;
  color: var(--slate-900);
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 32px;
}

.map-container {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.map-placeholder {
  text-align: center;
  padding: 40px;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.location-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
}

.location-card h4 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--slate-100);
}

.info-item:last-child {
  border-bottom: none;
}

.info-item-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

.tour-page-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 2.4fr);
  gap: 24px;
  align-items: flex-start;
}

.park-map-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 24px;
  border: 1px solid var(--slate-200);
  box-shadow: var(--shadow-lg);
  position: sticky;
  top: 90px;
}

.park-map-card h4 {
  margin-bottom: 4px;
}

.park-map-subtitle {
  font-size: 13px;
  color: var(--slate-500);
}

.park-map {
  margin-top: 16px;
  background: var(--slate-50);
  border-radius: 22px;
  padding: 24px 16px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.park-map-track {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.park-map-track::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 2px dashed var(--slate-300);
  opacity: 0.7;
}

.park-node-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.park-node {
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 3px solid var(--slate-300);
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--slate-700);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.park-node:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

.park-node.completed {
  background: #eff6ff;
  border-color: #2563eb;
  color: #1d4ed8;
}

.park-node.current {
  background: #f97316;
  border-color: #fbbf24;
  color: white;
  box-shadow: 0 10px 28px rgba(248, 158, 47, 0.6);
  animation: pulse 2s infinite;
}

.park-node.upcoming {
  background: white;
  border-color: var(--slate-300);
  color: var(--slate-600);
}

.park-node-label {
  font-size: 11px;
  color: var(--slate-500);
}

.park-node-label-current {
  font-size: 12px;
  font-weight: 600;
  color: #2563eb;
  padding: 4px 10px;
  border-radius: 999px;
  background: white;
  border: 1px solid #bfdbfe;
  box-shadow: var(--shadow-sm);
}

.park-map-legend {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--slate-600);
}

.park-map-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
}

.legend-dot-completed { background: #2563eb; }
.legend-dot-current { background: #fbbf24; }
.legend-dot-upcoming { background: #cbd5e1; }

.tour-main-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tour-main-header-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.tour-chip {
  border-radius: 999px;
  border: 1px solid var(--slate-200);
  background: white;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: var(--shadow-sm);
}

.tour-main-progress {
  flex: 1;
  min-width: 220px;
}

.tour-main-progress-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 12px;
  color: var(--slate-600);
}

.tour-main-progress-bar {
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: var(--slate-200);
  overflow: hidden;
}

.tour-main-progress-bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #2563eb, #4f46e5);
  transition: width 0.3s ease;
}

.tour-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--slate-200);
  animation: fadeInUp 0.5s ease-out;
}

.tour-header {
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  padding: 28px 28px 26px;
  color: white;
}

.tour-title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 6px;
  color: white;
}

.tour-subtitle {
  font-size: 16px;
  opacity: 0.95;
  color: rgba(255,255,255,0.9);
}

.tour-content {
  padding: 28px 28px 24px;
}

.tour-description {
  background: var(--slate-50);
  padding: 24px;
  border-radius: var(--radius);
  margin: 24px 0;
  border-left: 4px solid var(--primary);
}

.audio-player {
  background: linear-gradient(135deg, var(--slate-50), white);
  border-radius: var(--radius);
  padding: 24px 24px 22px;
  margin: 16px 0 8px;
  border: 1px solid var(--slate-200);
}

.audio-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.audio-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--slate-600);
  display: flex;
  align-items: center;
  gap: 8px;
}

.audio-duration {
  font-size: 14px;
  color: var(--slate-600);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.progress-bar {
  height: 8px;
  background: var(--slate-200);
  border-radius: var(--radius-full);
  overflow: hidden;
  margin: 16px 0;
  cursor: pointer;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #3b82f6);
  border-radius: var(--radius-full);
  transition: width 0.1s linear;
  position: relative;
  box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
}

.progress-fill::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.time-info {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--slate-600);
  margin-top: 6px;
}

.controls {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
}

.audio-status {
  background: #fef3c7;
  border: 1px solid #fbbf24;
  border-radius: var(--radius);
  padding: 12px 16px;
  margin: 12px 0;
  font-size: 14px;
  color: #92400e;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stops-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 24px;
}

.stop-card {
  background: white;
  border: 2px solid var(--slate-200);
  border-radius: 18px;
  padding: 18px 18px 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
}

.stop-card:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stop-card.active {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  border-color: transparent;
  box-shadow: 0 14px 30px rgba(37, 99, 235, 0.45);
  color: white;
}

.stop-number {
  font-size: 12px;
  font-weight: 600;
  color: var(--slate-600);
  margin-bottom: 6px;
}

.stop-name {
  font-size: 15px;
  font-weight: 600;
  color: var(--slate-900);
  line-height: 1.4;
}

.stop-card.active .stop-number,
.stop-card.active .stop-name {
  color: white;
}

.stop-status {
  margin-top: 8px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.stop-status-visited {
  color: var(--success);
}

.stop-status-ongoing {
  color: #fed7aa;
}

.stop-status-upcoming {
  color: var(--slate-500);
}

.tour-bottom-actions {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tour-action-btn {
  flex: 0 0 auto;
  border-radius: 999px;
  padding: 10px 18px;
  border: 1px solid var(--slate-200);
  background: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s ease;
}

.tour-action-btn:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

.tour-action-btn-primary {
  background: linear-gradient(135deg, #f59e0b, #f97316);
  color: white;
  border-color: transparent;
  box-shadow: 0 10px 26px rgba(245, 158, 11, 0.5);
}

.tour-info-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.tour-info-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 22px 22px 20px;
  border: 1px solid var(--slate-200);
  box-shadow: var(--shadow-lg);
}

.tour-info-card h4 {
  margin-bottom: 6px;
}

.tour-info-tag {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--slate-500);
  margin-bottom: 8px;
}

.tour-info-card ul {
  margin: 10px 0 0;
  padding-left: 18px;
  font-size: 14px;
  color: var(--slate-600);
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
  margin-top: 32px;
}

.hero-card {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  animation: fadeInUp 0.5s ease-out;
}

.hero-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.hero-card-header {
  height: auto;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-card-header img {
  width: 100%;
  height: auto;
  object-fit: contain;
  opacity: 0.9;
}

.award-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-size: 13px;
  font-weight: 700;
  backdrop-filter: blur(10px);
  z-index: 1;
}

.PVC { 
  background: linear-gradient(135deg, #f59e0b, #fbbf24);
  color: white;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
}

.MVC { 
  background: linear-gradient(135deg, #a855f7, #c084fc);
  color: white;
  box-shadow: 0 4px 15px rgba(168, 85, 247, 0.4);
}

.AC { 
  background: linear-gradient(135deg, #22d3ee, #67e8f9);
  color: white;
  box-shadow: 0 4px 15px rgba(34, 211, 238, 0.4);
}

.hero-fav-btn {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 36px;
  height: 36px;
  border-radius: 999px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(15,23,42,0.7);
  color: white;
  cursor: pointer;
  z-index: 2;
  transition: all 0.2s ease;
}

.hero-fav-btn:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.4);
  background: rgba(15,23,42,0.9);
}

.hero-card-body {
  padding: 24px;
}

.hero-card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--slate-900);
}

.hero-card-rank {
  font-size: 14px;
  color: var(--slate-600);
  margin-bottom: 12px;
}

.hero-card-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--slate-500);
  padding-top: 12px;
  border-top: 1px solid var(--slate-200);
}

.hero-modal-header-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
}

.hero-modal-title-block h2 {
  margin: 0;
}

.hero-modal-subtitle {
  font-size: 14px;
  color: var(--slate-600);
}

.hero-modal-meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 20px 0;
}

.hero-meta-box {
  padding: 10px 12px;
  border-radius: 12px;
  background: var(--slate-50);
  border: 1px solid var(--slate-200);
  font-size: 13px;
}

.hero-meta-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--slate-500);
  margin-bottom: 4px;
}

.hero-meta-value {
  font-weight: 600;
  color: var(--slate-800);
}

.hero-modal-image {
  border-radius: 18px;
  overflow: hidden;
  max-height: none;
  margin-bottom: 20px;
}

.hero-modal-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.hero-section-heading {
  font-size: 15px;
  font-weight: 700;
  color: var(--slate-800);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 8px;
}

.hero-story {
  background: var(--slate-50);
  border-radius: 16px;
  border: 1px solid var(--slate-200);
  padding: 16px 18px;
  font-size: 14px;
  margin-bottom: 16px;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 24px;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  animation: scaleIn 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid var(--slate-200);
}

.close-btn {
  background: var(--slate-100);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: var(--slate-200);
  transform: scale(1.1);
}

.quiz-progress {
  font-size: 14px;
  color: var(--slate-600);
  margin-bottom: 16px;
}

.quiz-question {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
  color: var(--slate-900);
  line-height: 1.4;
}

.quiz-option {
  display: block;
  width: 100%;
  text-align: left;
  padding: 18px 24px;
  margin: 12px 0;
  border: 2px solid var(--slate-200);
  border-radius: var(--radius);
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  position: relative;
}

.quiz-option:hover:not(:disabled) {
  background: var(--slate-50);
  border-color: var(--primary);
  transform: translateX(4px);
}

.quiz-option.selected {
  background: #eff6ff;
  border-color: var(--primary);
}

.quiz-option.correct {
  background: #dcfce7;
  border-color: var(--success);
  color: #166534;
}

.quiz-option.incorrect {
  background: #fee2e2;
  border-color: var(--danger);
  color: #991b1b;
}

.quiz-option:disabled {
  cursor: not-allowed;
}

.quiz-explanation {
  background: #eff6ff;
  padding: 20px;
  border-radius: var(--radius);
  margin-top: 24px;
  border-left: 4px solid var(--primary);
}

.quiz-result {
  text-align: center;
  padding: 40px 0;
}

.quiz-emoji {
  font-size: 80px;
  margin-bottom: 24px;
}

.quiz-score {
  font-size: 36px;
  font-weight: 700;
  color: var(--success);
  margin: 24px 0;
}

.photo-spots {
  background: white;
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
}

.photo-spot {
  background: linear-gradient(135deg, #fef3c7, #fef9c3);
  border: 2px solid #fbbf24;
  border-radius: var(--radius);
  padding: 20px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
}

.photo-spot:hover {
  transform: translateX(4px);
  box-shadow: var(--shadow);
}

.photo-spot-icon {
  font-size: 32px;
  flex-shrink: 0;
}

.photo-spot-content h4 {
  color: #92400e;
  margin-bottom: 4px;
}

.photo-spot-content p {
  font-size: 14px;
  color: #92400e;
  margin: 0;
}

/* --- NEW: Heritage gallery styles --- */

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.gallery-item {
  background: white;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.gallery-caption {
  padding: 12px 14px;
  font-size: 14px;
  color: var(--slate-700);
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.video-card {
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--slate-200);
  overflow: hidden;
}

.video-responsive {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-responsive iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.footer {
  text-align: center;
  padding: 48px 24px;
  margin-top: 80px;
  background: white;
  border-top: 1px solid var(--slate-200);
}

.footer-content {
  color: var(--slate-600);
  font-size: 14px;
  line-height: 1.8;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.pulse {
  animation: pulse 2s infinite;
}

@media (max-width: 1024px) {
  .tour-page-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  
  .park-map-card {
    position: static;
  }
  
  .location-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  h1 { font-size: 40px; }
  h2 { font-size: 28px; }
  .hero { padding: 80px 24px 60px; }
  .hero-subtitle { font-size: 20px; }
  .hero-description { font-size: 16px; }
  .tour-title { font-size: 26px; }
  .hero-grid { grid-template-columns: 1fr; }
  .stops-grid { grid-template-columns: 1fr; }
  .modal-content { padding: 24px; }
  .section { padding: 60px 0; }
  .about-grid {
    grid-template-columns: 1fr;
  }
}
`;

/* ======================= ICONS ======================= */
const Icon = React.memo(
  ({
    name,
    size = 20,
    color = "currentColor",
  }: {
    name: string;
    size?: number;
    color?: string;
  }) => {
    const props = {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: 2,
      strokeLinecap: "round" as const,
      strokeLinejoin: "round" as const,
    };

    const icons: Record<string, React.ReactElement> = {
      play: (
        <svg {...props}>
          <polygon points="5 3 19 12 5 21 5 3" fill={color} stroke="none" />
        </svg>
      ),
      pause: (
        <svg {...props}>
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        </svg>
      ),
      next: (
        <svg {...props}>
          <polygon points="5 4 15 12 5 20 5 4" />
          <line x1="19" y1="5" x2="19" y2="19" />
        </svg>
      ),
      prev: (
        <svg {...props}>
          <polygon points="19 20 9 12 19 4 19 20" />
          <line x1="5" y1="19" x2="5" y2="5" />
        </svg>
      ),
      home: (
        <svg {...props}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      star: (
        <svg {...props}>
          <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            fill={color}
            stroke={color}
          />
        </svg>
      ),
      close: (
        <svg {...props}>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ),
      camera: (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      medal: (
        <svg {...props}>
          <circle cx="12" cy="10" r="6" />
          <path d="M8 14l-2 8 6-2 6 2-2-8" />
        </svg>
      ),
      music: (
        <svg {...props}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
      users: (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      award: (
        <svg {...props}>
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
      headphones: (
        <svg {...props}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <rect x="2" y="14" width="4" height="6" rx="1" />
          <rect x="18" y="14" width="4" height="6" rx="1" />
        </svg>
      ),
      clock: (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 16 14" />
        </svg>
      ),
      mapPin: (
        <svg {...props}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      phone: (
        <svg {...props}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      mail: (
        <svg {...props}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      info: (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      ),
      shield: (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    };

    return icons[name] || null;
  }
);

/* ======================= DATA ======================= */

interface ResourceLink {
  label: string;
  url: string;
}

interface Hero {
  id: string;
  name: string;
  rank: string;
  service: string;
  lifespan: string;
  award: "PVC" | "MVC" | "AC";
  date: string;
  operation?: string;
  intro: string;
  image?: string;
  citation?: string;
  resources?: ResourceLink[];
}

interface Stop {
  id: string;
  title: string;
  subtitle: string;
  duration: number;
  audioFile: string;
  description: string;
  photoSpot?: boolean;
}

interface Quiz {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const HEROES: Hero[] = [
  {
    id: "sekhon",
    name: "Nirmal Jit Singh Sekhon",
    rank: "Flying Officer",
    service: "Indian Air Force",
    lifespan: "1943 – 1971",
    award: "PVC",
    date: "14 December 1971",
    operation: "Indo–Pak War 1971, defence of Srinagar",
    intro:
      "Flying Officer Nirmal Jit Singh Sekhon, a young Gnat pilot of No. 18 Squadron, is the only officer of the Indian Air Force to be awarded the Param Vir Chakra. On the morning of 14 December 1971 he scrambled alone against a formation of Pakistani Sabre jets attacking Srinagar airfield and, though heavily outnumbered, pressed home his attack with fearless determination, sacrificing his life to shield the valley and his comrades.",
    image: "images/NJS-Sekhon.png",
    citation:
      "For displaying supreme courage, flying skill and determination in the face of overwhelming odds while defending Srinagar airfield on 14 December 1971, Flying Officer Nirmal Jit Singh Sekhon was posthumously awarded the Param Vir Chakra.",
    resources: [
      {
        label: "Official PVC citation (IAF website)",
        url: "https://indianairforce.nic.in/content/flying-officer-nirmal-jit-singh-sekhon",
      },
      {
        label: "Documentary on Sekhon’s last sortie (YouTube)",
        url: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      },
    ],
  },
  {
    id: "mehar-singh",
    name: "Mehar Singh",
    rank: "Air Commodore",
    service: "Indian Air Force",
    lifespan: "1915 – 1952",
    award: "MVC",
    date: "1950",
    operation: "Jammu & Kashmir Operations 1947–48",
    intro:
      "Air Commodore Mehar Singh was a legendary pioneer of the IAF, leading some of the earliest and most dangerous air operations into the mountains of Jammu & Kashmir in 1947–48. He personally flew into unprepared high-altitude airstrips like Leh and Poonch, often in bad weather and under the threat of enemy fire, opening vital lifelines that saved garrisons and civilians alike.",
    image: "images/Mehar-singh.jpg",
  },
  {
    id: "minoo-engineer",
    name: "Minoo Merwan Engineer",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1921 – 1997",
    award: "MVC",
    date: "1950",
    operation: "Jammu & Kashmir Operations 1947–48",
    intro:
      "Wing Commander Minoo Merwan Engineer was a highly decorated fighter pilot who had already distinguished himself in the Second World War. During the 1947–48 Kashmir operations he led daring missions in treacherous terrain, using his skill and leadership to provide close air support and ensure that Indian troops on the ground could hold vital positions in the face of determined enemy attacks.",
    image: "images/MM-engineer.png",
  },
  {
    id: "noronha",
    name: "Sidney Basil Noronha",
    rank: "Squadron Leader",
    service: "Indian Air Force",
    lifespan: "1922 – 1952",
    award: "MVC",
    date: "1950",
    operation: "Jammu & Kashmir Operations 1947–48",
    intro:
      "Squadron Leader Sidney Basil Noronha was a bomber pilot who repeatedly flew hazardous sorties over enemy-held areas in Jammu & Kashmir. Operating from difficult forward bases and facing rugged mountains, primitive navigation aids and heavy ground fire, he struck at key enemy positions with precision and calm courage that inspired his squadron.",
    image: "images/Sidney-noronha.jpg",
  },
  {
    id: "moolgavkar",
    name: "Hrushikesh Moolgavkar",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1926 – 2015",
    award: "MVC",
    date: "1950",
    operation: "Jammu & Kashmir Operations 1947–48",
    intro:
      "Wing Commander Hrushikesh Moolgavkar, who would later become Chief of the Air Staff, earned the Maha Vir Chakra for his fearless leadership in the early Kashmir air operations. Flying repeated missions over mountainous terrain, he led his pilots in close support of hard-pressed troops and helped turn the tide in favour of India at a critical stage of the conflict.",
    image: "images/hrushikesh-moolgavkar.jpg",
  },
  {
    id: "jagmohan-nath",
    name: "Jag Mohan Nath",
    rank: "Squadron Leader",
    service: "Indian Air Force",
    lifespan: "1930 – 2023",
    award: "MVC",
    date: "1963",
    operation: "High-risk strategic reconnaissance",
    intro:
      "Squadron Leader Jag Mohan Nath was a legendary photo-reconnaissance pilot who flew deep, unarmed missions over hostile territory. Again and again he took his aircraft alone over enemy defenses at great personal risk, bringing back priceless intelligence that shaped India’s battle plans and saved countless lives on the ground.",
    image: "images/jagmohan-nath-iaf.jpg",
  },
  {
    id: "goodman",
    name: "William MacDonald Goodman",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1920 – 2015",
    award: "MVC",
    date: "1965",
    operation: "Indo–Pak War 1965",
    intro:
      "Wing Commander William MacDonald Goodman commanded a bomber squadron during the 1965 war. He led his crews on repeated night and day attacks against heavily defended targets, often flying through intense anti-aircraft fire, and his cool leadership and accuracy inflicted serious damage on the enemy’s war-making capability.",
    image: "images/MVC06-Goodmn.jpg",
  },
  {
    id: "prem-pal-singh",
    name: "Prem Pal Singh",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1929 – 2020",
    award: "MVC",
    date: "1965",
    operation: "Indo–Pak War 1965",
    intro:
      "Wing Commander Prem Pal Singh commanded an operational bomber squadron during the 1965 conflict. Between 6 and 9 September his formation struck vital enemy airfields and infrastructure again and again, undeterred by heavy ground fire, and his determination and flying skill significantly weakened the enemy’s ability to sustain air operations.",
    image: "images/Mvcprempal.jpg",
  },
  {
    id: "padmanabha-gautam",
    name: "Padmanabha Gautam",
    rank: "Squadron Leader",
    service: "Indian Air Force",
    lifespan: "1933 – 1966",
    award: "MVC",
    date: "1965",
    operation: "Indo–Pak War 1965",
    intro:
      "Squadron Leader Padmanabha Gautam was a Canberra pilot who flew deep-penetration bombing missions into hostile territory during the 1965 war. He repeatedly led his aircraft against well-defended targets at low level, pressing home his attacks with complete disregard for personal safety until he was ultimately killed in action.",
    image: "images/Wg.-Cdr.-Padmanabha-Gautam.jpg",
  },
  {
    id: "benegal",
    name: "Ramesh Sakharam Benegal",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1926 – 2003",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971 (Eastern Sector)",
    intro:
      "Wing Commander Ramesh Sakharam Benegal led a bomber squadron tasked with crippling enemy forces in East Pakistan in 1971. Night after night he flew long missions through bad weather and heavy ground fire, guiding his crews to vital bridges, airfields and troop concentrations whose destruction hastened the liberation of Bangladesh.",
    image: "images/Benegal-1.jpg",
  },
  {
    id: "vb-vasisht",
    name: "Vidya Bhushan Vasisht",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1934 – 2012",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Vidya Bhushan Vasisht distinguished himself as a leader of strike operations in the 1971 war. He personally flew numerous sorties over heavily defended targets, calmly directing his formation under fire and ensuring that each mission achieved its aim with precision.",
    image: "images/VB Vashisht.jpg",
  },
  {
    id: "mangat",
    name: "Harcharan Singh Mangat",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1933 – 2010",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Harcharan Singh Mangat was a combat leader whose unit saw intense action in 1971. He consistently chose the most dangerous tasks for himself, attacking defended airfields and troop concentrations and inspiring his pilots by leading from the front.",
    image: "images/harcharansinghmanget.jpg",
  },
  {
    id: "banerji",
    name: "Madhabendra Banerji",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1934 – 2005",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Madhabendra Banerji commanded a fighter-bomber squadron during the 1971 operations. Under his leadership the unit carried out repeated attacks against enemy armour, gun positions and supply lines, often at low level and under intense fire, playing a decisive role in blunting enemy advances.",
    image: "images/madhabendra banerji.jpg",
  },
  {
    id: "parker",
    name: "Cecil Vivian Parker",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1923 – 2004",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Cecil Vivian Parker led a Hunter squadron that spearheaded many of the IAF’s ground-attack missions in the western sector in 1971. With cool professionalism he flew low-level strikes against enemy armour and artillery, disregarding heavy fire to destroy positions that threatened Indian troops.",
    image: "images/cecil-parker.jpg",
  },
  {
    id: "bhardwaj",
    name: "Ravinder Nath Bhardwaj",
    rank: "Squadron Leader",
    service: "Indian Air Force",
    lifespan: "1937 – 1971",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Squadron Leader Ravinder Nath Bhardwaj was a courageous strike pilot in 1971. He flew multiple hazardous missions at low altitude against strongly defended enemy targets and continued his attacks even after his aircraft was hit, displaying gallantry of the highest order.",
    image: "images/ravindranath-baradwwaj.jpg",
  },
  {
    id: "sk-kaul",
    name: "Swaroop Krishna Kaul",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1935 – 2019",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Swaroop Krishna Kaul, later an Air Marshal, commanded a MiG squadron in the western sector during the 1971 war. He personally led deep strike and escort missions into enemy territory, often in the face of strong opposition, and his tactical acumen and personal bravery contributed greatly to achieving air superiority.",
    image: "images/swaroop kaul.jpg",
  },
  {
    id: "talwar",
    name: "Man Mohan Bir Singh Talwar",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1932 – 2012",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Man Mohan Bir Singh Talwar led his squadron with exceptional courage during the 1971 conflict. Undertaking mission after mission over defended targets, he demonstrated cool judgement under fire and an unwavering commitment to support the soldiers fighting on the ground.",
    image: "images/man mohan talwar.jpg",
  },
  {
    id: "d-costa",
    name: "Albert D’Costa",
    rank: "Wing Commander",
    service: "Indian Air Force",
    lifespan: "1934 – 2012",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971",
    intro:
      "Wing Commander Albert D’Costa was a fighter-bomber leader who carried out several key strikes during the 1971 war. He repeatedly led his formation into heavily defended areas, attacking gun positions, fuel dumps and armour and ensuring that his squadron always completed its tasks despite strong opposition.",
    image: "images/allan dcosta.jpg",
  },
  {
    id: "chandan-singh",
    name: "Chandan Singh",
    rank: "Group Captain",
    service: "Indian Air Force",
    lifespan: "1925 – 2020",
    award: "MVC",
    date: "1971",
    operation: "Indo–Pak War 1971, Eastern Sector",
    intro:
      "Group Captain Chandan Singh masterminded and personally supervised daring transport and helicopter operations in the eastern theatre in 1971. He played a central role in the famous heliborne assault at Sylhet and in sustaining forward troops across rivers and marshes, often flying in marginal weather and under enemy fire.",
    image: "images/chandan-singh.jpg",
  },
  {
    id: "devayya",
    name: "Ajjamada Boppayya Devayya",
    rank: "Squadron Leader",
    service: "Indian Air Force",
    lifespan: "1932 – 1965",
    award: "MVC",
    date: "1965 (posthumous recognition)",
    operation: "Indo–Pak War 1965",
    intro:
      "Squadron Leader A. B. Devayya flew a Mystère fighter-bomber during the 1965 war. On a deep strike mission over Pakistan he engaged an enemy Sabre in a fierce dogfight, shooting it down at the cost of his own life. His gallantry came to light years later through Pakistani records, and he was awarded the Maha Vir Chakra posthumously.",
    image: "images/Devayya.jpeg",
  },
  {
    id: "nirala",
    name: "Jyoti Prakash Nirala",
    rank: "Corporal (Garud Commando)",
    service: "Indian Air Force",
    lifespan: "1986 – 2017",
    award: "AC",
    date: "18 November 2017",
    operation: "Counter-terrorist operation, Jammu & Kashmir",
    intro:
      "Corporal Jyoti Prakash Nirala was a Garud commando who laid down his life while fighting terrorists in Bandipora district of Jammu & Kashmir in November 2017. Despite heavy hostile fire he held his ground in an exposed position, killing and injuring multiple terrorists and shielding his team until he was fatally wounded, earning the Ashoka Chakra for supreme peacetime valour.",
    image: "images/Corporal-Jyoti-Prakash-Nirala-pp.jpg",
  },
];

const TOUR_STOPS: Stop[] = [
  {
    id: "entrance",
    title: "Welcome to Vayu Yodha Sthal",
    subtitle: "Eternal Air Warriors Park",
    duration: 120,
    audioFile: "audio/stop00_introduction.mp3",
    description:
      "Welcome to Vayu Yodha Sthal at the Air Force Academy, Dundigal. This sacred space honors the valor and sacrifice of our air warriors. The park features statues crafted from pristine Makrana marble, positioned to catch sunlight throughout the day, symbolizing how our heroes continue to illuminate our path.",
    photoSpot: true,
  },
  {
    id: "sekhon",
    title: "Flying Officer Nirmal Jit Singh Sekhon",
    subtitle: "Param Vir Chakra – Defence of Srinagar (1971)",
    duration: 240,
    audioFile: "audio/stop01_sekhon.mp3",
    description:
      "At this stop we honour Flying Officer Nirmal Jit Singh Sekhon, the only Indian Air Force officer awarded the Param Vir Chakra. On 14 December 1971, he scrambled alone in his Gnat against a formation of Pakistani Sabres over Srinagar, fighting bravely while outnumbered and laying down his life to protect the valley and his comrades.",
    photoSpot: true,
  },
  {
    id: "mehar-singh",
    title: "Air Commodore Mehar Singh",
    subtitle: "Maha Vir Chakra – Pioneer of Air Operations in J&K",
    duration: 210,
    audioFile: "audio/stop02_mehar_singh.mp3",
    description:
      "Air Commodore Mehar Singh led some of the earliest and most dangerous air operations into Jammu & Kashmir in 1947–48. Personally flying into rough, high-altitude airstrips like Leh and Poonch, often in bad weather and under threat of enemy fire, he opened vital lifelines that saved isolated garrisons and civilians.",
    photoSpot: true,
  },
  {
    id: "minoo-engineer",
    title: "Wing Commander Minoo Merwan Engineer",
    subtitle: "Maha Vir Chakra – Fighter Leader in the Mountains",
    duration: 210,
    audioFile: "audio/stop03_minoo_engineer.mp3",
    description:
      "Wing Commander Minoo Merwan Engineer, a highly decorated World War II veteran, led daring missions over the mountains of Jammu & Kashmir during the 1947–48 operations. His calm leadership and superb flying provided close air support that helped Indian troops hold vital positions against heavy odds.",
    photoSpot: true,
  },
  {
    id: "noronha",
    title: "Squadron Leader Sidney Basil Noronha",
    subtitle: "Maha Vir Chakra – Courage under Fire",
    duration: 210,
    audioFile: "audio/stop04_noronha.mp3",
    description:
      "Squadron Leader Sidney Basil Noronha flew hazardous bomber sorties over enemy-held areas in Jammu & Kashmir. Operating from primitive forward bases and facing rugged terrain and ground fire, he repeatedly attacked key enemy positions with precision and cool determination.",
    photoSpot: true,
  },
  {
    id: "moolgavkar",
    title: "Wing Commander Hrushikesh Moolgavkar",
    subtitle: "Maha Vir Chakra – Future Chief in Combat",
    duration: 210,
    audioFile: "audio/stop05_moolgavkar.mp3",
    description:
      "Wing Commander Hrushikesh Moolgavkar, who later became Chief of the Air Staff, earned the Maha Vir Chakra for fearless leadership in the Kashmir operations of 1947–48. He led numerous missions over treacherous mountains, giving crucial air support that helped turn the tide of the conflict.",
    photoSpot: true,
  },
  {
    id: "jagmohan-nath",
    title: "Squadron Leader Jag Mohan Nath",
    subtitle: "Maha Vir Chakra – Legendary Reconnaissance Pilot",
    duration: 210,
    audioFile: "audio/stop06_jagmohan_nath.mp3",
    description:
      "Squadron Leader Jag Mohan Nath became a legend for his deep, unarmed reconnaissance missions over hostile territory. Flying alone over enemy defences again and again, he brought back priceless intelligence that shaped India’s battle plans and saved countless lives.",
    photoSpot: true,
  },
  {
    id: "goodman",
    title: "Wing Commander William MacDonald Goodman",
    subtitle: "Maha Vir Chakra – Bomber Leader of 1965",
    duration: 210,
    audioFile: "audio/stop07_goodman.mp3",
    description:
      "Wing Commander William MacDonald Goodman commanded a bomber squadron during the 1965 Indo–Pak war. He led his crews on repeated strikes against heavily defended targets by day and night, flying through intense anti-aircraft fire and inflicting serious damage on the enemy’s war-fighting capability.",
    photoSpot: true,
  },
  {
    id: "prem-pal-singh",
    title: "Wing Commander Prem Pal Singh",
    subtitle: "Maha Vir Chakra – Precision Night Raider",
    duration: 210,
    audioFile: "audio/stop08_prem_pal_singh.mp3",
    description:
      "Wing Commander Prem Pal Singh led an operational bomber squadron in 1965. Between 6 and 9 September his formations repeatedly struck vital airfields and infrastructure in enemy territory, pressing home attacks through heavy ground fire with determination and skill.",
    photoSpot: true,
  },
  {
    id: "padmanabha-gautam",
    title: "Squadron Leader Padmanabha Gautam",
    subtitle: "Maha Vir Chakra – Deep Penetration Strikes",
    duration: 210,
    audioFile: "audio/stop09_padmanabha_gautam.mp3",
    description:
      "Squadron Leader Padmanabha Gautam flew Canberra bombers on deep-penetration missions during the 1965 war. He repeatedly led low-level attacks against well-defended targets deep inside hostile territory, showing complete disregard for personal safety until he was killed in action.",
    photoSpot: true,
  },
  {
    id: "benegal",
    title: "Wing Commander Ramesh Sakharam Benegal",
    subtitle: "Maha Vir Chakra – 1971 Eastern Front",
    duration: 210,
    audioFile: "audio/stop10_benegal.mp3",
    description:
      "Wing Commander Ramesh Sakharam Benegal commanded a bomber squadron in the eastern theatre in 1971. Night after night he led long missions through bad weather and heavy ground fire, destroying bridges, airfields and troop concentrations that hastened the liberation of Bangladesh.",
    photoSpot: true,
  },
  {
    id: "vb-vasisht",
    title: "Wing Commander Vidya Bhushan Vasisht",
    subtitle: "Maha Vir Chakra – Strike Leader of 1971",
    duration: 210,
    audioFile: "audio/stop11_vb_vasisht.mp3",
    description:
      "Wing Commander Vidya Bhushan Vasisht distinguished himself as a strike leader in the 1971 war. He personally flew numerous sorties over strongly defended targets, calmly directing his formation under fire and ensuring each mission achieved its aim with precision.",
    photoSpot: true,
  },
  {
    id: "mangat",
    title: "Wing Commander Harcharan Singh Mangat",
    subtitle: "Maha Vir Chakra – Leading from the Front",
    duration: 210,
    audioFile: "audio/stop12_mangat.mp3",
    description:
      "Wing Commander Harcharan Singh Mangat’s unit saw intense combat in 1971. He consistently chose the most dangerous tasks for himself, attacking defended airfields and troop concentrations and inspiring his pilots by leading from the front.",
    photoSpot: true,
  },
  {
    id: "banerji",
    title: "Wing Commander Madhabendra Banerji",
    subtitle: "Maha Vir Chakra – Armour & Gun-Post Destroyer",
    duration: 210,
    audioFile: "audio/stop13_banerji.mp3",
    description:
      "Wing Commander Madhabendra Banerji commanded a fighter-bomber squadron in 1971. Under his leadership the unit carried out repeated low-level attacks on enemy armour, gun positions and supply lines, decisively blunting enemy advances.",
    photoSpot: true,
  },
  {
    id: "parker",
    title: "Wing Commander Cecil Vivian Parker",
    subtitle: "Maha Vir Chakra – Hunter Squadron Commander",
    duration: 210,
    audioFile: "audio/stop14_parker.mp3",
    description:
      "Wing Commander Cecil Vivian Parker led a Hunter squadron that spearheaded many ground-attack missions in the western sector in 1971. He flew low-level strikes against enemy armour and artillery, disregarding heavy fire to destroy positions threatening Indian troops.",
    photoSpot: true,
  },
  {
    id: "bhardwaj",
    title: "Squadron Leader Ravinder Nath Bhardwaj",
    subtitle: "Maha Vir Chakra – Courage in the Face of Fire",
    duration: 210,
    audioFile: "audio/stop15_bhardwaj.mp3",
    description:
      "Squadron Leader Ravinder Nath Bhardwaj flew hazardous low-altitude missions against strongly defended enemy targets in 1971. Even after his aircraft was hit, he continued his attack with gallantry of the highest order.",
    photoSpot: true,
  },
  {
    id: "sk-kaul",
    title: "Wing Commander Swaroop Krishna Kaul",
    subtitle: "Maha Vir Chakra – MiG Squadron Commander",
    duration: 210,
    audioFile: "audio/stop16_sk_kaul.mp3",
    description:
      "Wing Commander Swaroop Krishna Kaul, later an Air Marshal, commanded a MiG squadron in the western sector in 1971. He led deep strike and escort missions into enemy territory, often against strong opposition, and his tactical skill helped the IAF secure air superiority.",
    photoSpot: true,
  },
  {
    id: "talwar",
    title: "Wing Commander Man Mohan Bir Singh Talwar",
    subtitle: "Maha Vir Chakra – Determined Strike Pilot",
    duration: 210,
    audioFile: "audio/stop17_talwar.mp3",
    description:
      "Wing Commander Man Mohan Bir Singh Talwar led his squadron with exceptional courage in 1971. Mission after mission, he flew over defended targets with cool judgement under fire, fully committed to supporting soldiers fighting on the ground.",
    photoSpot: true,
  },
  {
    id: "d-costa",
    title: "Wing Commander Albert D’Costa",
    subtitle: "Maha Vir Chakra – Fighter-Bomber Leader",
    duration: 210,
    audioFile: "audio/stop18_dcosta.mp3",
    description:
      "Wing Commander Albert D’Costa carried out several key strikes during the 1971 war. He repeatedly led his formation into heavily defended areas, attacking gun positions, fuel dumps and armour and ensuring his squadron always completed its tasks.",
    photoSpot: true,
  },
  {
    id: "chandan-singh",
    title: "Group Captain Chandan Singh",
    subtitle: "Maha Vir Chakra – Master of Airlift & Heliborne Ops",
    duration: 210,
    audioFile: "audio/stop19_chandan_singh.mp3",
    description:
      "Group Captain Chandan Singh masterminded daring transport and helicopter operations in the eastern theatre in 1971. He played a central role in the famous heliborne assault at Sylhet and in sustaining forward troops across rivers and marshes under enemy fire.",
    photoSpot: true,
  },
  {
    id: "devayya",
    title: "Squadron Leader A. B. Devayya",
    subtitle: "Maha Vir Chakra – Posthumous Hero of 1965",
    duration: 210,
    audioFile: "audio/stop20_devayya.mp3",
    description:
      "Squadron Leader A. B. Devayya flew a Mystère fighter-bomber during the 1965 war. On a deep strike mission he engaged an enemy Sabre in a fierce dogfight, shooting it down at the cost of his own life. His gallantry came to light years later through enemy records, leading to a posthumous Maha Vir Chakra.",
    photoSpot: true,
  },
  {
    id: "nirala",
    title: "Corporal Jyoti Prakash Nirala",
    subtitle: "Ashoka Chakra – Garud Commando in J&K",
    duration: 210,
    audioFile: "audio/stop21_nirala.mp3",
    description:
      "Corporal Jyoti Prakash Nirala, a Garud commando, laid down his life fighting terrorists in Bandipora district of Jammu & Kashmir in November 2017. Holding an exposed position under heavy fire, he killed and injured multiple terrorists while shielding his team, earning the Ashoka Chakra for supreme peacetime valour.",
    photoSpot: true,
  },
];

const QUIZ_QUESTIONS: Quiz[] = [
  {
    id: "q1",
    question:
      "Who is the only Indian Air Force officer to receive the Param Vir Chakra?",
    options: [
      "Wing Commander Rakesh Sharma",
      "Flying Officer Nirmaljit Singh Sekhon",
      "Squadron Leader Ajay Ahuja",
      "Group Captain Dilbagh Singh",
    ],
    correct: 1,
    explanation:
      "Flying Officer Nirmaljit Singh Sekhon is the only IAF officer awarded the Param Vir Chakra for his supreme sacrifice on 14 December 1971.",
  },
  {
    id: "q2",
    question: "In which war did Flying Officer Sekhon make his supreme sacrifice?",
    options: [
      "1962 Indo-China War",
      "1965 Indo-Pakistan War",
      "1971 Indo-Pakistan War",
      "1999 Kargil War",
    ],
    correct: 2,
    explanation:
      "Flying Officer Sekhon sacrificed his life during the 1971 Indo-Pakistan War while defending Srinagar airfield.",
  },
  {
    id: "q3",
    question: "What does the lotus-shaped arena in the park symbolize?",
    options: ["Victory in war", "Peace emerging from conflict", "Air superiority", "National unity"],
    correct: 1,
    explanation:
      "The lotus arena symbolizes how peace emerges from conflict, like a lotus blooming in muddy water.",
  },
  {
    id: "q4",
    question: "Which aircraft did Flying Officer Sekhon fly during his last mission?",
    options: ["MiG-21", "Folland Gnat", "Hunter", "Vampire"],
    correct: 1,
    explanation:
      "Flying Officer Sekhon flew the Folland Gnat fighter aircraft during his heroic last mission.",
  },
  {
    id: "q5",
    question: "What is the Ashoka Chakra awarded for?",
    options: [
      "Wartime gallantry",
      "Peacetime valor",
      "Distinguished service",
      "Long service",
    ],
    correct: 1,
    explanation:
      "The Ashoka Chakra is awarded for conspicuous bravery and valor displayed during peacetime.",
  },
];

const PHOTO_SPOTS = [
  {
    id: "ps1",
    name: "Main Entrance",
    description: "Capture the grand entrance with IAF emblem",
    icon: "📸",
  },
  {
    id: "ps2",
    name: "Sekhon Statue",
    description: "Best angle: Front-left with sunlight",
    icon: "🌅",
  },
  {
    id: "ps3",
    name: "Lotus Arena Panorama",
    description: "360° view of the entire memorial",
    icon: "🔄",
  },
  {
    id: "ps4",
    name: "Tricolor Backdrop",
    description: "Perfect for group photos with flag",
    icon: "🇮🇳",
  },
  {
    id: "ps5",
    name: "Sunset Point",
    description: "Golden hour photography spot",
    icon: "🌇",
  },
];

/* --- NEW: gallery data --- */

const GALLERY_PHOTOS = [
  {
    id: "g1",
    src: "images/gallery-entrance.jpg",
    alt: "Vayu Yodha Sthal main entrance",
    caption: "Main entrance to Vayu Yodha Sthal",
  },
  {
    id: "g2",
    src: "images/gallery-lotus-arena.jpg",
    alt: "Lotus-shaped memorial arena",
    caption: "Lotus-shaped arena symbolising peace emerging from conflict",
  },
  {
    id: "g3",
    src: "images/gallery-statues-row.jpg",
    alt: "Row of marble statues",
    caption: "Makrana marble statues of decorated air warriors",
  },
];

const GALLERY_VIDEOS = [
  {
    id: "v1",
    title: "Walkthrough of Vayu Yodha Sthal",
    embedUrl: "https://www.youtube.com/watch?v=coJZrZkg7hk",
  },
  {
    id: "v2",
    title: "IAF Heritage & Gallantry",
    embedUrl: "https://youtu.be/OkjDuzUEsBY?si=tT-9uWDrCDXTh10q",
  },
];

/* ======================= UTILITY FUNCTIONS ======================= */
const formatMinutesFromSeconds = (seconds: number): string => {
  const mins = Math.round(seconds / 60);
  return `${mins} min`;
};

const formatTime = (time: number): string => {
  if (!time || Number.isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/* ======================= COMPONENTS ======================= */

const AudioPlayer = React.memo(
  ({
    stop,
    onNext,
    onPrevious,
    autoStart = true,
  }: {
    stop: Stop;
    onNext: () => void;
    onPrevious: () => void;
    autoStart?: boolean;
  }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(stop.duration);
       const [audioError, setAudioError] = useState<string | null>(null);
    const attemptedAutoplayRef = useRef(false);

    useEffect(() => {
      setCurrentTime(0);
      setAudioError(null);
      setIsPlaying(false);
      attemptedAutoplayRef.current = false;
    }, [stop.id]);

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      const handleLoaded = () => {
        const actualDuration = audio.duration;
        if (actualDuration && !isNaN(actualDuration)) {
          setDuration(actualDuration);
        }
      };

      const handleCanPlay = () => {
        if (autoStart && !attemptedAutoplayRef.current) {
          attemptedAutoplayRef.current = true;

          const playPromise = audio.play();

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
                setAudioError(null);
              })
              .catch((error) => {
                console.warn("Autoplay blocked:", error.message);
                setIsPlaying(false);
                setAudioError("Tap the play button to continue");
              });
          }
        }
      };

      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime || 0);
      };

      const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
        setTimeout(() => {
          onNext();
        }, 500);
      };

      const handleError = () => {
        console.error("Audio error for:", stop.audioFile);
        setIsPlaying(false);
        setAudioError(`Cannot load audio file: ${stop.audioFile}`);
      };

      const handlePlay = () => {
        setIsPlaying(true);
        setAudioError(null);
      };

      const handlePause = () => {
        setIsPlaying(false);
      };

      audio.addEventListener("loadedmetadata", handleLoaded);
      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("error", handleError);
      audio.addEventListener("play", handlePlay);
      audio.addEventListener("pause", handlePause);

      audio.load();

      return () => {
        audio.removeEventListener("loadedmetadata", handleLoaded);
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("play", handlePlay);
        audio.removeEventListener("pause", handlePause);
      };
    }, [stop.id, stop.audioFile, autoStart, onNext]);

    const togglePlay = useCallback(() => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying) {
        audio.pause();
      } else {
        const playPromise = audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setAudioError(null);
            })
            .catch((error) => {
              console.error("Playback error:", error);
              setIsPlaying(false);
              setAudioError("Unable to play audio");
            });
        }
      }
    }, [isPlaying]);

    const handleProgressClick = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = percent * duration;
        audio.currentTime = newTime;
        setCurrentTime(newTime);
      },
      [duration]
    );

    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
      <div className="audio-player">
        <audio ref={audioRef} src={stop.audioFile} preload="auto" />

        {audioError && <div className="audio-status">⚠️ {audioError}</div>}

        <div className="audio-info">
          <div className="audio-label">
            <Icon name="music" size={18} />
            Audio narration
          </div>
          <div className="audio-duration">
            <Icon name="clock" size={16} />
            {formatMinutesFromSeconds(stop.duration)}
          </div>
        </div>

        <div className="progress-bar" onClick={handleProgressClick}>
          <div
            className="progress-fill"
            style={{ width: `${progressPercent || 0}%` }}
          />
        </div>

        <div className="time-info">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <div className="controls">
          <button className="btn-icon" onClick={onPrevious} aria-label="Previous">
            <Icon name="prev" size={20} />
          </button>
          <button
            className="btn-icon-primary pulse"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            <Icon name={isPlaying ? "pause" : "play"} size={28} />
          </button>
          <button className="btn-icon" onClick={onNext} aria-label="Next">
            <Icon name="next" size={20} />
          </button>
        </div>
      </div>
    );
  }
);

const QuizModal = React.memo(
  ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answered, setAnswered] = useState(false);

    const question = QUIZ_QUESTIONS[currentQuestion];

    const handleAnswer = useCallback(
      (index: number) => {
        if (answered) return;
        setSelectedAnswer(index);
        setAnswered(true);
        if (index === question.correct) {
          setScore((prev) => prev + 1);
        }
        setTimeout(() => setShowResult(true), 500);
      },
      [answered, question.correct]
    );

    const nextQuestion = useCallback(() => {
      if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setAnswered(false);
      }
    }, [currentQuestion]);

    const resetQuiz = useCallback(() => {
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setAnswered(false);
    }, []);

    if (!isOpen) return null;

    const isComplete = currentQuestion === QUIZ_QUESTIONS.length - 1 && showResult;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Knowledge Quiz</h2>
            <button className="close-btn" onClick={onClose} aria-label="Close">
              <Icon name="close" size={20} />
            </button>
          </div>

          {!isComplete ? (
            <>
              <div className="quiz-progress">
                Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
              </div>

              <h3 className="quiz-question">{question.question}</h3>

              <div>
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    className={`quiz-option ${
                      selectedAnswer === index ? "selected" : ""
                    } ${
                      showResult && index === question.correct ? "correct" : ""
                    } ${
                      showResult &&
                      selectedAnswer === index &&
                      index !== question.correct
                        ? "incorrect"
                        : ""
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showResult && (
                <div className="quiz-explanation">
                  <p
                    style={{
                      margin: 0,
                      fontWeight: 600,
                      marginBottom: "12px",
                      color:
                        selectedAnswer === question.correct
                          ? "#059669"
                          : "#dc2626",
                    }}
                  >
                    {selectedAnswer === question.correct
                      ? "✓ Correct!"
                      : "✗ Incorrect"}
                  </p>
                  <p style={{ margin: 0, fontSize: "15px" }}>
                    {question.explanation}
                  </p>
                  {currentQuestion < QUIZ_QUESTIONS.length - 1 && (
                    <button
                      className="btn btn-primary"
                      onClick={nextQuestion}
                      style={{ marginTop: "20px", width: "100%" }}
                    >
                      Next Question
                    </button>
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="quiz-result">
              <div className="quiz-emoji">🏆</div>
              <h3>Quiz Complete!</h3>
              <div className="quiz-score">
                Score: {score}/{QUIZ_QUESTIONS.length}
              </div>
              <p
                style={{ color: "var(--slate-600)", marginBottom: "32px" }}
              >
                {score === QUIZ_QUESTIONS.length
                  ? "Perfect! You truly know our heroes!"
                  : score >= QUIZ_QUESTIONS.length * 0.7
                  ? "Great job! You have good knowledge about our air warriors."
                  : "Keep learning about our brave heroes!"}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <button className="btn btn-primary" onClick={resetQuiz}>
                  Try Again
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={onClose}
                  style={{ color: "var(--slate-700)" }}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

const HeroModal = React.memo(
  ({ hero, onClose }: { hero: Hero | null; onClose: () => void }) => {
    if (!hero) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div className="hero-modal-header-row">
              <div className="hero-modal-title-block">
                <h2>
                  {hero.rank} {hero.name}
                </h2>
                <div className="hero-modal-subtitle">
                  {hero.service} • {hero.lifespan}
                </div>
              </div>
            </div>
            <button className="close-btn" onClick={onClose} aria-label="Close">
              <Icon name="close" size={20} />
            </button>
          </div>

          {hero.image && (
            <div className="hero-modal-image">
              <img src={hero.image} alt={hero.name} />
            </div>
          )}

          <div className="hero-modal-meta-grid">
            <div className="hero-meta-box">
              <div className="hero-meta-label">Gallantry Award</div>
              <div className="hero-meta-value">
                {hero.award === "AC" ? "Ashoka Chakra" : hero.award}
              </div>
            </div>
            <div className="hero-meta-box">
              <div className="hero-meta-label">Operation / Mission</div>
              <div className="hero-meta-value">{hero.operation || "—"}</div>
            </div>
            <div className="hero-meta-box">
              <div className="hero-meta-label">Key Year / Date</div>
              <div className="hero-meta-value">{hero.date}</div>
            </div>
            <div className="hero-meta-box">
              <div className="hero-meta-label">Service</div>
              <div className="hero-meta-value">Indian Air Force</div>
            </div>
          </div>

          <div style={{ marginTop: "12px" }}>
            <div className="hero-section-heading">Introduction</div>
            <div className="hero-story">
              <p style={{ margin: 0 }}>{hero.intro}</p>
            </div>
          </div>

          {hero.citation && (
            <div style={{ marginTop: "16px" }}>
              <div className="hero-section-heading">Official Citation</div>
              <div className="hero-story">
                <p style={{ margin: 0, whiteSpace: "pre-line" }}>
                  {hero.citation}
                </p>
              </div>
            </div>
          )}

          {hero.resources && hero.resources.length > 0 && (
            <div style={{ marginTop: "16px" }}>
              <div className="hero-section-heading">Media & Resources</div>
              <div className="hero-story">
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "18px",
                    fontSize: "14px",
                  }}
                >
                  {hero.resources.map((res) => (
                    <li key={res.url} style={{ marginBottom: "8px" }}>
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--primary)",
                          textDecoration: "none",
                          fontWeight: 600,
                        }}
                      >
                        {res.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

const HeroCard = React.memo(
  ({
    hero,
    onClick,
    isFavorite,
    onToggleFavorite,
  }: {
    hero: Hero;
    onClick: () => void;
    isFavorite: boolean;
    onToggleFavorite: () => void;
  }) => {
    return (
      <div className="hero-card" onClick={onClick}>
        <div className="hero-card-header">
          <button
            className="hero-fav-btn"
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            aria-label="Toggle favourite"
          >
            <Icon
              name="star"
              size={18}
              color={isFavorite ? "#fbbf24" : "#e5e7eb"}
            />
          </button>
          <span className={`award-badge ${hero.award}`}>
            {hero.award === "AC" ? "Ashoka Chakra" : hero.award}
          </span>
          {hero.image && <img src={hero.image} alt={hero.name} />}
        </div>
        <div className="hero-card-body">
          <h3 className="hero-card-title">
            {hero.rank} {hero.name}
          </h3>
          <p className="hero-card-rank">{hero.service}</p>
          <div className="hero-card-meta">
            <span>📅 {hero.date}</span>
            {hero.operation && (
              <>
                <span>•</span>
                <span>{hero.operation}</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
);

const PhotoSpots = React.memo(() => {
  return (
    <div className="photo-spots">
      <h3
        style={{
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Icon name="camera" color="#f59e0b" />
        Recommended Photo Spots
      </h3>
      {PHOTO_SPOTS.map((spot) => (
        <div key={spot.id} className="photo-spot">
          <div className="photo-spot-icon">{spot.icon}</div>
          <div className="photo-spot-content">
            <h4>{spot.name}</h4>
            <p>{spot.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
});

/* --- NEW: Heritage gallery component --- */
const HeritageGallery = React.memo(() => {
  return (
    <section className="section" id="gallery" style={{ background: "white" }}>
      <div className="container">
        <div className="section-header">
          <h2>Heritage Gallery</h2>
          <p>
            Glimpses of Vayu Yodha Sthal and curated videos that bring the
            memorial to life.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_PHOTOS.map((photo) => (
            <div key={photo.id} className="gallery-item">
              <img src={photo.src} alt={photo.alt} />
              <div className="gallery-caption">{photo.caption}</div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: "32px", marginBottom: "16px" }}>
          Videos & documentaries
        </h3>
        <div className="video-grid">
          {GALLERY_VIDEOS.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-responsive">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="gallery-caption">{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const ParkMap = React.memo(
  ({
    currentStop,
    onStopClick,
  }: {
    currentStop: number;
    onStopClick: (index: number) => void;
  }) => {
    return (
      <div className="park-map-card">
        <h4>Park Map</h4>
        <p className="park-map-subtitle">Visual route of all tour stops</p>
        <div className="park-map">
          <div className="park-map-track">
            {TOUR_STOPS.map((stop, index) => {
              let status: "completed" | "current" | "upcoming";
              if (index < currentStop) status = "completed";
              else if (index === currentStop) status = "current";
              else status = "upcoming";

              return (
                <div key={stop.id} className="park-node-wrapper">
                  <button
                    type="button"
                    className={`park-node ${status}`}
                    title={stop.title}
                    onClick={() => onStopClick(index)}
                    aria-label={`Go to stop ${index + 1}: ${stop.title}`}
                  >
                    {index + 1}
                  </button>
                  {status === "current" ? (
                    <div className="park-node-label-current">You are here</div>
                  ) : (
                    <div className="park-node-label">
                      {status === "completed"
                        ? "Completed"
                        : status === "upcoming"
                        ? "Upcoming"
                        : "Current"}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="park-map-legend">
            <div className="park-map-legend-item">
              <span className="legend-dot legend-dot-completed" />
              <span>Completed</span>
            </div>
            <div className="park-map-legend-item">
              <span className="legend-dot legend-dot-current" />
              <span>Current</span>
            </div>
            <div className="park-map-legend-item">
              <span className="legend-dot legend-dot-upcoming" />
              <span>Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

/* ======================= MAIN APP ======================= */
export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "tour" | "heroes">(
    "home"
  );
  const [currentStop, setCurrentStop] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const goToStop = useCallback((index: number) => {
    if (index >= 0 && index < TOUR_STOPS.length) {
      setCurrentStop(index);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const nextStop = useCallback(
    () => goToStop(currentStop + 1),
    [currentStop, goToStop]
  );
  const prevStop = useCallback(
    () => goToStop(currentStop - 1),
    [currentStop, goToStop]
  );

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) newFavorites.delete(id);
      else newFavorites.add(id);
      return newFavorites;
    });
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const favouriteCount = favorites.size;
  const completionPercent = Math.round(
    ((currentStop + 1) / TOUR_STOPS.length) * 100
  );
  const totalTourDuration = useMemo(
    () => TOUR_STOPS.reduce((sum, stop) => sum + stop.duration, 0),
    []
  );

  return (
    <>
      <style>{css}</style>

      {currentPage !== "home" && (
        <nav className="nav">
          <div className="container">
            <div className="nav-content">
              <button
                className="btn btn-icon"
                onClick={() => setCurrentPage("home")}
                aria-label="Home"
              >
                <Icon name="home" size={20} />
              </button>

              <div
                className="nav-brand"
                onClick={() => setCurrentPage("home")}
              >
                Vayu Yodha Sthal
              </div>

              <button
                className="btn btn-icon"
                onClick={() =>
                  toggleFavorite(
                    currentPage === "tour"
                      ? TOUR_STOPS[currentStop].id
                      : "page"
                  )
                }
                aria-label="Toggle favourite"
              >
                <Icon
                  name="star"
                  size={20}
                  color={
                    favorites.has(
                      currentPage === "tour"
                        ? TOUR_STOPS[currentStop].id
                        : "page"
                    )
                      ? "#fbbf24"
                      : "currentColor"
                  }
                />
              </button>
            </div>
          </div>
        </nav>
      )}

      {currentPage === "home" && (
        <>
          <div className="hero">
            <div className="hero-content">
              <img
                src="images/iaf-logo.svg"
                alt="Indian Air Force Emblem"
                className="hero-iaf-logo"
              />

              <div className="hero-badge">
                <Icon name="medal" size={18} />
                Indian Air Force Heritage
              </div>

              <h1>Vayu Yodha Sthal</h1>

              <p className="hero-subtitle">
                वायु योद्धा स्थल • Eternal Air Warriors Park
              </p>
              <p className="hero-description">
                Experience an immersive audio-guided journey through valor and
                sacrifice. Walk among the statues of our decorated air warriors
                who defended our skies with unmatched courage and made the
                supreme sacrifice for our nation.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentStop(0);
                    setCurrentPage("tour");
                  }}
                >
                  <Icon name="play" size={20} />
                  Start Audio Tour
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setCurrentPage("heroes")}
                >
                  <Icon name="users" size={20} />
                  View Heroes
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowQuiz(true)}
                >
                  <Icon name="award" size={20} />
                  Take Quiz
                </button>
              </div>

              <div className="pill-row">
                <div className="pill">
                  <Icon name="headphones" size={14} />
                  Best with headphones
                </div>
                <div className="pill">
                  <Icon name="clock" size={14} />
                  Full tour ~ {formatMinutesFromSeconds(totalTourDuration)}
                </div>
                <div className="pill">
                  <Icon name="users" size={14} />
                  {HEROES.length} featured heroes
                </div>
              </div>
            </div>
          </div>

          <section className="section" id="about">
            <div className="container">
              <div className="section-header">
                <h2>About Vayu Yodha Sthal</h2>
                <p>
                  A sacred memorial dedicated to honoring the supreme sacrifice and
                  extraordinary valor of Indian Air Force personnel
                </p>
              </div>

              <div className="about-grid">
                <div className="about-card">
                  <div className="about-icon">
                    <Icon name="shield" size={32} color="white" />
                  </div>
                  <h4>Our Mission</h4>
                  <p>
                    To preserve and celebrate the legacy of our air warriors through
                    an immersive, educational experience that inspires future
                    generations to value courage, duty, and patriotism.
                  </p>
                </div>

                <div className="about-card">
                  <div className="about-icon">
                    <Icon name="medal" size={32} color="white" />
                  </div>
                  <h4>The Memorial</h4>
                  <p>
                    Featuring pristine Makrana marble statues and busts of decorated
                    heroes, the park is designed with a lotus-shaped arena
                    symbolizing peace emerging from conflict.
                  </p>
                </div>

                <div className="about-card">
                  <div className="about-icon">
                    <Icon name="headphones" size={32} color="white" />
                  </div>
                  <h4>Audio Experience</h4>
                  <p>
                    Our guided audio tour brings history to life with expertly
                    narrated stories and historical context at each stop
                    throughout the memorial park.
                  </p>
                </div>

                <div className="about-card">
                  <div className="about-icon">
                    <Icon name="users" size={32} color="white" />
                  </div>
                  <h4>Visitor Info</h4>
                  <p>
                    Open to military personnel, cadets, and authorized visitors.
                    Guided tours available by appointment. Respectful attire and
                    conduct required at all times.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="section"
            id="location"
            style={{ background: "white" }}
          >
            <div className="container">
              <div className="section-header">
                <h2>Locate Us</h2>
                <p>Visit Vayu Yodha Sthal at the Air Force Academy, Dundigal</p>
              </div>

              <div className="location-grid">
                <div className="map-container">
                  <div className="map-placeholder">
                    <Icon name="mapPin" size={64} color="var(--primary)" />
                    <h4
                      style={{
                        marginTop: "16px",
                        color: "var(--slate-700)",
                      }}
                    >
                      Air Force Academy
                    </h4>
                    <p
                      style={{
                        maxWidth: "300px",
                        margin: "8px auto",
                      }}
                    >
                      Dundigal, Hyderabad, Telangana 500043
                    </p>
                    <button
                      className="btn btn-primary"
                      style={{ marginTop: "16px" }}
                      onClick={() =>
                        window.open(
                          "https://maps.google.com/?q=Air+Force+Academy+Dundigal",
                          "_blank"
                        )
                      }
                    >
                      <Icon name="mapPin" size={18} />
                      Open in Maps
                    </button>
                  </div>
                </div>

                <div className="location-info">
                  <div className="location-card">
                    <h4>
                      <Icon name="mapPin" color="var(--primary)" />
                      Address
                    </h4>
                    <div className="info-item">
                      <div className="info-item-icon">
                        <Icon name="mapPin" size={20} />
                      </div>
                      <div>
                        <strong>Air Force Academy, Dundigal</strong>
                        <br />
                        Hyderabad, Telangana 500043
                        <br />
                        India
                      </div>
                    </div>
                  </div>

                  <div className="location-card">
                    <h4>
                      <Icon name="clock" color="var(--primary)" />
                      Visiting Hours
                    </h4>
                    <div className="info-item">
                      <div className="info-item-icon">
                        <Icon name="clock" size={20} />
                      </div>
                      <div>
                        <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                        <br />
                        <strong>Saturday - Sunday:</strong> By Appointment
                        <br />
                        <small style={{ color: "var(--slate-500)" }}>
                          Closed on national holidays
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="location-card">
                    <h4>
                      <Icon name="phone" color="var(--primary)" />
                      Contact
                    </h4>
                    <div className="info-item">
                      <div className="info-item-icon">
                        <Icon name="phone" size={20} />
                      </div>
                      <div>
                        <strong>Phone:</strong> +91-XXX-XXX-XXXX
                      </div>
                    </div>
                    <div className="info-item">
                      <div className="info-item-icon">
                        <Icon name="mail" size={20} />
                      </div>
                      <div>
                        <strong>Email:</strong> info@afa.nic.in
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <HeritageGallery />

          <div
            className="container"
            style={{ marginTop: "40px", marginBottom: "24px" }}
          >
            <div className="card">
              <h3>How to use this audio guide</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                  marginTop: "24px",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon name="play" size={18} color="var(--primary)" />
                    Start at the entrance
                  </h4>
                  <p style={{ marginTop: 4, fontSize: "14px" }}>
                    Walk to the park entrance and tap{" "}
                    <strong>Start Audio Tour</strong>. Keep your phone volume at
                    a comfortable level.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon name="mapPin" size={18} color="var(--primary)" />
                    Follow the stop numbers
                  </h4>
                  <p style={{ marginTop: 4, fontSize: "14px" }}>
                    Each statue/zone has a matching stop number. Tap that stop
                    card on the app to hear the correct narration.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon name="award" size={18} color="var(--primary)" />
                    Use quiz & heroes view
                  </h4>
                  <p style={{ marginTop: 4, fontSize: "14px" }}>
                    After the walk, open <strong>View Heroes</strong> and the{" "}
                    <strong>Quiz</strong> to revisit stories and learn more
                    about their journeys.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "16px",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <Icon name="star" size={18} color="var(--primary)" />
                    Favourites
                  </h4>
                  <p style={{ marginTop: 4, fontSize: "14px" }}>
                    Mark any stop or hero as a favourite using the ⭐ icon. You
                    have {favouriteCount} favourite item
                    {favouriteCount === 1 ? "" : "s"} saved.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container" style={{ marginBottom: "64px" }}>
            <PhotoSpots />
          </div>
        </>
      )}

      {currentPage === "tour" && (
        <div
          className="container"
          style={{ marginTop: "32px", marginBottom: "64px" }}
        >
          <div className="tour-page-grid">
            <ParkMap currentStop={currentStop} onStopClick={goToStop} />

            <div className="tour-main-column">
              <div className="tour-main-header-row">
                <button className="tour-chip">
                  Stop {currentStop + 1} of {TOUR_STOPS.length}
                </button>
                <div className="tour-main-progress">
                  <div className="tour-main-progress-top">
                    <span>Full Tour</span>
                    <span>{completionPercent}% Complete</span>
                  </div>
                  <div className="tour-main-progress-bar">
                    <div
                      className="tour-main-progress-bar-fill"
                      style={{ width: `${completionPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="tour-card">
                <div className="tour-header">
                  <h2 className="tour-title">
                    {TOUR_STOPS[currentStop].title}
                  </h2>
                  <p className="tour-subtitle">
                    {TOUR_STOPS[currentStop].subtitle}
                  </p>
                </div>

                <div className="tour-content">
                  {TOUR_STOPS[currentStop].photoSpot && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background:
                          "linear-gradient(135deg, #fef3c7, #fde68a)",
                        padding: "10px 16px",
                        borderRadius: 999,
                        border: "1px solid #fbbf24",
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#92400e",
                      }}
                    >
                      <Icon name="camera" size={18} />
                      Photo spot! Great location for pictures
                    </div>
                  )}

                  <div className="tour-description">
                    <p style={{ margin: 0 }}>
                      {TOUR_STOPS[currentStop].description}
                    </p>
                  </div>

                  <AudioPlayer
                    stop={TOUR_STOPS[currentStop]}
                    onNext={nextStop}
                    onPrevious={prevStop}
                    autoStart={true}
                  />
                </div>
              </div>

              <div className="stops-grid">
                {TOUR_STOPS.map((stop, index) => {
                  let status: "visited" | "ongoing" | "upcoming";
                  if (index < currentStop) status = "visited";
                  else if (index === currentStop) status = "ongoing";
                  else status = "upcoming";

                  const label =
                    status === "visited"
                      ? "Completed"
                      : status === "ongoing"
                      ? "Current"
                      : "Upcoming";

                  return (
                    <div
                      key={stop.id}
                      className={`stop-card ${
                        index === currentStop ? "active" : ""
                      }`}
                      onClick={() => goToStop(index)}
                    >
                      <div className="stop-number">Stop {index + 1}</div>
                      <div className="stop-name">{stop.title}</div>
                      <div className={`stop-status stop-status-${status}`}>
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="tour-bottom-actions">
                <button
                  className="tour-action-btn"
                  onClick={() => {
                    setCurrentPage("home");
                    setTimeout(() => scrollToSection("location"), 100);
                  }}
                >
                  <Icon name="mapPin" size={16} />
                  Location
                </button>
                <button
                  className="tour-action-btn"
                  onClick={() => setCurrentPage("heroes")}
                >
                  <Icon name="users" size={16} />
                  View Heroes
                </button>
                <button
                  className="tour-action-btn tour-action-btn-primary"
                  onClick={() => setShowQuiz(true)}
                >
                  <Icon name="award" size={16} />
                  Take Quiz
                </button>
              </div>

              <div className="tour-info-grid">
                <div className="tour-info-card">
                  <div className="tour-info-tag">Tour Overview</div>
                  <h4>Navigate the park with confidence</h4>
                  <p style={{ marginTop: 6 }}>
                    Each audio stop is aligned with a physical marker or statue
                    inside Vayu Yodha Sthal.
                  </p>
                  <ul>
                    <li>
                      Follow the stop numbers in order for the full story.
                    </li>
                    <li>
                      You can always jump to any stop from the cards above.
                    </li>
                    <li>
                      The park map on the left shows which stops are completed,
                      current, or upcoming.
                    </li>
                  </ul>
                </div>
                <div className="tour-info-card">
                  <div className="tour-info-tag">After the Tour</div>
                  <h4>Keep the memories alive</h4>
                  <p style={{ marginTop: 6 }}>
                    Once you complete the walk, take a moment to reflect and
                    explore more.
                  </p>
                  <ul>
                    <li>
                      Open <strong>Heroes</strong> to read brief introductions
                      to each air warrior.
                    </li>
                    <li>
                      Attempt the <strong>Quiz</strong> to test what you
                      remember.
                    </li>
                    <li>
                      Revisit your favourite stops anytime using the ⭐ icons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === "heroes" && (
        <div
          className="container"
          style={{ marginTop: "32px", marginBottom: "64px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h1 style={{ marginBottom: "16px" }}>Our Heroes</h1>
            <p style={{ maxWidth: "700px", margin: "0 auto" }}>
              Honoring the brave souls who sacrificed everything for our
              nation's freedom and sovereignty. Tap a hero card to read a short
              introduction to their life, service and gallant actions.
            </p>
          </div>

          <div className="hero-grid">
            {HEROES.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                isFavorite={favorites.has(hero.id)}
                onToggleFavorite={() => toggleFavorite(hero.id)}
                onClick={() => setSelectedHero(hero)}
              />
            ))}
          </div>
        </div>
      )}

      <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
      <HeroModal hero={selectedHero} onClose={() => setSelectedHero(null)} />

      <footer className="footer">
        <div className="footer-content">
          <div style={{ fontWeight: 600, marginBottom: "8px" }}>
            Indian Air Force Academy • Vayu Yodha Sthal
          </div>
          <div>Honoring the eternal sacrifice of our air warriors</div>
          <div
            style={{
              marginTop: "16px",
              fontSize: "12px",
              color: "var(--slate-500)",
            }}
          >
            © 2025 Indian Air Force. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
