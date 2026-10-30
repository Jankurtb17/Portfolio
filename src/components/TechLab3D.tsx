import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RotateCw, Sparkles, Zap, CreditCard, Laptop } from 'lucide-react';

export default function TechLab3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [sceneMode, setSceneMode] = useState<'badge' | 'workstation'>('badge');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isRotating, setIsRotating] = useState(true);

  // References for mutable animation loop data without triggering re-renders
  const stateRef = useRef({
    sceneMode: 'badge' as 'badge' | 'workstation',
    wireframe: false,
    rotating: true,
    speed: 1,
    mouseX: 0,
    mouseY: 0,
    targetMouseX: 0,
    targetMouseY: 0,
  });

  stateRef.current.sceneMode = sceneMode;
  stateRef.current.wireframe = wireframeMode;
  stateRef.current.rotating = isRotating;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect software WebGL to adapt performance gracefully
    const isSoftwareGl = (() => {
      try {
        const gl = document.createElement('canvas').getContext('webgl2');
        if (!gl) return true;
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
        const gpu = String(gl.getParameter(param));
        gl.getExtension('WEBGL_lose_context')?.loseContext();
        return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      } catch {
        return false;
      }
    })();

    const width = container.clientWidth || 480;
    const height = container.clientHeight || 450;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 5.2);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isSoftwareGl,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = !isSoftwareGl;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3.2;
    controls.maxDistance = 8.0;
    controls.target.set(0, 1.2, 0);

    let isUserInteracting = false;
    controls.addEventListener('start', () => {
      isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
      isUserInteracting = false;
    });

    // 5. Lighting Rig (Key, Fill, Rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x29a587, 0x11161d, 1.0);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = !isSoftwareGl;
    scene.add(keyLight);

    const cyanRim = new THREE.DirectionalLight(0x29a587, 2.6);
    cyanRim.position.set(-4, 3, -3);
    scene.add(cyanRim);

    const underGlow = new THREE.PointLight(0x29a587, 2.0, 5);
    underGlow.position.set(0, 0.5, 0);
    scene.add(underGlow);

    // Ground Shadow Disc
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 256;
    const sCtx = shadowCanvas.getContext('2d')!;
    const gradient = sCtx.createRadialGradient(128, 128, 10, 128, 128, 120);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.65)');
    gradient.addColorStop(0.5, 'rgba(16, 22, 28, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = gradient;
    sCtx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowGeo = new THREE.PlaneGeometry(4.5, 4.5);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -0.01;
    scene.add(shadowMesh);

    // =============================================================
    // 3D HOLOGRAPHIC ID BADGE GROUP (JAN KURT'S PHOTO IN 3D)
    // =============================================================
    const badgeContainer = new THREE.Group();
    badgeContainer.position.set(0, 1.25, 0);
    scene.add(badgeContainer);

    // Canvas for the front of the ID badge
    const badgeFrontCanvas = document.createElement('canvas');
    badgeFrontCanvas.width = 1024;
    badgeFrontCanvas.height = 1536;
    const bCtx = badgeFrontCanvas.getContext('2d')!;

    // Canvas for the back of the badge
    const badgeBackCanvas = document.createElement('canvas');
    badgeBackCanvas.width = 1024;
    badgeBackCanvas.height = 1536;
    const bbCtx = badgeBackCanvas.getContext('2d')!;

    const badgeFrontTex = new THREE.CanvasTexture(badgeFrontCanvas);
    badgeFrontTex.colorSpace = THREE.SRGBColorSpace;
    badgeFrontTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const badgeBackTex = new THREE.CanvasTexture(badgeBackCanvas);
    badgeBackTex.colorSpace = THREE.SRGBColorSpace;
    badgeBackTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Render Back of the Badge
    const renderBadgeBack = () => {
      bbCtx.fillStyle = '#11151c';
      bbCtx.fillRect(0, 0, 1024, 1536);

      // Top clip cutout slot
      bbCtx.fillStyle = '#0a0d12';
      bbCtx.fillRect(362, 40, 300, 32);

      // Magnetic Stripe
      bbCtx.fillStyle = '#1c222c';
      bbCtx.fillRect(0, 160, 1024, 180);

      // IBM Watermark
      bbCtx.fillStyle = 'rgba(41, 165, 135, 0.08)';
      bbCtx.font = 'bold 160px sans-serif';
      bbCtx.textAlign = 'center';
      bbCtx.fillText('IBM', 512, 700);

      // Core Competencies section
      bbCtx.fillStyle = '#ffffff';
      bbCtx.font = 'bold 36px "Inter", sans-serif';
      bbCtx.textAlign = 'center';
      bbCtx.fillText('AUTHORIZED FULL-STACK DEVELOPER', 512, 440);

      bbCtx.fillStyle = '#29a587';
      bbCtx.font = 'bold 26px "Inter", sans-serif';
      bbCtx.fillText('SECURITY CLEARANCE: LEVEL 4', 512, 490);

      const badges = [
        'Vue.js 3 Production',
        'React 19 & TypeScript',
        'Python & FastAPI',
        'Node.js & Express',
        'AWS CloudWatch / S3',
        'Generative AI Workflows',
        'Docker Containers',
      ];

      badges.forEach((b, i) => {
        const y = 560 + i * 85;
        bbCtx.fillStyle = '#1a2029';
        bbCtx.roundRect(160, y, 704, 65, 16);
        bbCtx.fill();
        bbCtx.strokeStyle = 'rgba(41, 165, 135, 0.35)';
        bbCtx.lineWidth = 2;
        bbCtx.stroke();

        bbCtx.fillStyle = '#e2e8f0';
        bbCtx.font = 'bold 28px "Inter", sans-serif';
        bbCtx.textAlign = 'center';
        bbCtx.fillText(b, 512, y + 42);
      });

      // Bottom Barcode lines
      const bcY = 1220;
      bbCtx.fillStyle = '#ffffff';
      for (let x = 160; x < 860; x += 12) {
        const barWidth = (x % 5 === 0) ? 6 : (x % 3 === 0 ? 4 : 2);
        bbCtx.fillRect(x, bcY, barWidth, 120);
      }

      bbCtx.fillStyle = '#94a3b8';
      bbCtx.font = '24px monospace';
      bbCtx.fillText('JK-IBM-2026-EXP-FULLSTACK-05M', 512, 1380);

      badgeBackTex.needsUpdate = true;
    };
    renderBadgeBack();

    // Render Front of the Badge with user's real uploaded photo
    const profileImg = new Image();
    profileImg.src = '/assets/aistudio/Bayaras_id_c0c5923e.jpg';

    const renderBadgeFront = (loadedImg?: HTMLImageElement) => {
      // Background gradient
      const bgGrad = bCtx.createLinearGradient(0, 0, 1024, 1536);
      bgGrad.addColorStop(0, '#151a22');
      bgGrad.addColorStop(0.5, '#0e1218');
      bgGrad.addColorStop(1, '#131821');
      bCtx.fillStyle = bgGrad;
      bCtx.fillRect(0, 0, 1024, 1536);

      // Outer holographic border
      bCtx.strokeStyle = '#29a587';
      bCtx.lineWidth = 14;
      bCtx.roundRect(14, 14, 996, 1508, 48);
      bCtx.stroke();

      // Top clip cutout slot
      bCtx.fillStyle = '#0a0d12';
      bCtx.roundRect(380, 40, 264, 30, 15);
      bCtx.fill();
      bCtx.strokeStyle = 'rgba(255,255,255,0.2)';
      bCtx.lineWidth = 2;
      bCtx.stroke();

      // Top IBM Header Badge
      bCtx.fillStyle = '#0062ff';
      bCtx.font = '900 68px "Inter", sans-serif';
      bCtx.textAlign = 'left';
      bCtx.fillText('IBM', 90, 160);

      bCtx.fillStyle = '#ffffff';
      bCtx.font = 'bold 30px "Inter", sans-serif';
      bCtx.fillText('Application Developer', 240, 138);

      bCtx.fillStyle = '#29a587';
      bCtx.font = 'bold 24px "Inter", sans-serif';
      bCtx.fillText('Experience FullStack • 5 Months', 240, 172);

      // Profile Photo Frame
      const photoX = 162;
      const photoY = 230;
      const photoW = 700;
      const photoH = 700;

      // Glow behind photo
      bCtx.fillStyle = 'rgba(41, 165, 135, 0.15)';
      bCtx.roundRect(photoX - 10, photoY - 10, photoW + 20, photoH + 20, 36);
      bCtx.fill();

      // Draw Photo
      bCtx.save();
      bCtx.beginPath();
      bCtx.roundRect(photoX, photoY, photoW, photoH, 28);
      bCtx.clip();

      if (loadedImg && loadedImg.complete) {
        bCtx.drawImage(loadedImg, photoX, photoY, photoW, photoH);
      } else {
        bCtx.fillStyle = '#1e2430';
        bCtx.fillRect(photoX, photoY, photoW, photoH);
        bCtx.fillStyle = '#29a587';
        bCtx.font = 'bold 40px "Inter", sans-serif';
        bCtx.textAlign = 'center';
        bCtx.fillText('Loading 3D Photo...', 512, 580);
      }
      bCtx.restore();

      // Photo border
      bCtx.strokeStyle = '#29a587';
      bCtx.lineWidth = 6;
      bCtx.roundRect(photoX, photoY, photoW, photoH, 28);
      bCtx.stroke();

      // Gold Security Chip
      bCtx.fillStyle = '#d4af37';
      bCtx.roundRect(162, 970, 110, 80, 12);
      bCtx.fill();
      bCtx.strokeStyle = '#856b1a';
      bCtx.lineWidth = 3;
      bCtx.stroke();
      // Chip lines
      bCtx.fillStyle = '#856b1a';
      bCtx.fillRect(195, 970, 4, 80);
      bCtx.fillRect(235, 970, 4, 80);
      bCtx.fillRect(162, 1010, 110, 4);

      // Name & Title
      bCtx.fillStyle = '#ffffff';
      bCtx.font = '800 60px "Inter", sans-serif';
      bCtx.textAlign = 'left';
      bCtx.fillText('JAN KURT BAYARAS', 162, 1130);

      bCtx.fillStyle = '#29a587';
      bCtx.font = 'bold 32px "Inter", sans-serif';
      bCtx.fillText('APPLICATION DEVELOPER', 162, 1180);

      bCtx.fillStyle = '#94a3b8';
      bCtx.font = '600 28px "Inter", sans-serif';
      bCtx.fillText('EXPERIENCE FULLSTACK — IBM', 162, 1222);

      // Status pill
      bCtx.fillStyle = 'rgba(41, 165, 135, 0.2)';
      bCtx.roundRect(162, 1260, 320, 56, 28);
      bCtx.fill();
      bCtx.strokeStyle = '#29a587';
      bCtx.lineWidth = 2;
      bCtx.stroke();

      bCtx.fillStyle = '#29a587';
      bCtx.beginPath();
      bCtx.arc(195, 1288, 8, 0, Math.PI * 2);
      bCtx.fill();

      bCtx.fillStyle = '#ffffff';
      bCtx.font = 'bold 24px "Inter", sans-serif';
      bCtx.fillText('ACTIVE EMPLOYEE', 220, 1296);

      // Bottom ID code
      bCtx.fillStyle = '#64748b';
      bCtx.font = '22px monospace';
      bCtx.fillText('IBM-PH • CLOUD & APP ENG • 2026', 162, 1400);

      badgeFrontTex.needsUpdate = true;
    };

    renderBadgeFront();

    profileImg.onload = () => {
      renderBadgeFront(profileImg);
    };

    // 3D Badge Body Geometry (Multi-material: front, back, sides)
    const badgeW = 2.0;
    const badgeH = 3.0;
    const badgeD = 0.06;
    const badgeGeo = new THREE.BoxGeometry(badgeW, badgeH, badgeD);

    const sideMat = new THREE.MeshStandardMaterial({
      color: 0x1d222a,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x29a587,
      emissiveIntensity: 0.2,
    });

    const frontMat = new THREE.MeshStandardMaterial({
      map: badgeFrontTex,
      roughness: 0.25,
      metalness: 0.35,
      emissive: 0xffffff,
      emissiveMap: badgeFrontTex,
      emissiveIntensity: 0.25,
    });

    const backMat = new THREE.MeshStandardMaterial({
      map: badgeBackTex,
      roughness: 0.3,
      metalness: 0.3,
      emissive: 0xffffff,
      emissiveMap: badgeBackTex,
      emissiveIntensity: 0.2,
    });

    // BoxGeometry material array order: [right, left, top, bottom, front, back]
    const badgeMaterials = [sideMat, sideMat, sideMat, sideMat, frontMat, backMat];
    const badgeMesh = new THREE.Mesh(badgeGeo, badgeMaterials);
    badgeMesh.castShadow = true;
    badgeContainer.add(badgeMesh);

    // 3D Lanyard Clip Hook at top
    const clipGroup = new THREE.Group();
    clipGroup.position.set(0, badgeH / 2 + 0.18, 0);

    const clipMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.95,
      roughness: 0.2,
    });
    const clipMesh = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.035, 16, 32), clipMat);
    clipMesh.rotation.x = Math.PI / 2;
    clipGroup.add(clipMesh);

    const strapGeo = new THREE.BoxGeometry(0.4, 0.5, 0.03);
    const strapMat = new THREE.MeshStandardMaterial({
      color: 0x0062ff, // IBM Blue lanyard strap
      roughness: 0.8,
    });
    const strapMesh = new THREE.Mesh(strapGeo, strapMat);
    strapMesh.position.y = 0.35;
    clipGroup.add(strapMesh);

    badgeContainer.add(clipGroup);

    // Glowing Hologram Orbital Rings around the Badge
    const badgeRingMat = new THREE.MeshStandardMaterial({
      color: 0x29a587,
      emissive: 0x29a587,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    const badgeRing1 = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.018, 16, 80), badgeRingMat);
    badgeRing1.rotation.x = Math.PI / 2.3;
    const badgeRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.015, 16, 80), badgeRingMat);
    badgeRing2.rotation.y = Math.PI / 3;
    badgeContainer.add(badgeRing1, badgeRing2);

    // =============================================================
    // 3D WORKSTATION GROUP (LAPTOP + CORE + SATELLITES)
    // =============================================================
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Procedural 3D Developer Workstation
    const laptopGroup = new THREE.Group();
    rootGroup.add(laptopGroup);

    // Base chassis
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x1d222a,
      metalness: 0.85,
      roughness: 0.25,
    });
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, baseMat);
    baseMesh.position.y = 0.04;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // Keyboard well & keys
    const keyWellGeo = new THREE.BoxGeometry(2.1, 0.01, 0.85);
    const keyWellMat = new THREE.MeshStandardMaterial({
      color: 0x12161c,
      metalness: 0.5,
      roughness: 0.7,
    });
    const keyWell = new THREE.Mesh(keyWellGeo, keyWellMat);
    keyWell.position.set(0, 0.085, -0.15);
    laptopGroup.add(keyWell);

    // Trackpad
    const padGeo = new THREE.BoxGeometry(0.75, 0.005, 0.45);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x242b35,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x29a587,
      emissiveIntensity: 0.12,
    });
    const trackpad = new THREE.Mesh(padGeo, padMat);
    trackpad.position.set(0, 0.085, 0.52);
    laptopGroup.add(trackpad);

    // Procedural Screen Texture (Live Code Canvas)
    const codeCanvas = document.createElement('canvas');
    codeCanvas.width = 1024;
    codeCanvas.height = 640;
    const cCtx = codeCanvas.getContext('2d')!;

    const renderCodeTexture = (time: number) => {
      cCtx.fillStyle = '#161b22';
      cCtx.fillRect(0, 0, 1024, 640);

      // IDE Title bar
      cCtx.fillStyle = '#0d1117';
      cCtx.fillRect(0, 0, 1024, 46);

      // Window control dots
      cCtx.fillStyle = '#ff5f56';
      cCtx.beginPath();
      cCtx.arc(28, 23, 7, 0, Math.PI * 2);
      cCtx.fill();

      cCtx.fillStyle = '#ffbd2e';
      cCtx.beginPath();
      cCtx.arc(52, 23, 7, 0, Math.PI * 2);
      cCtx.fill();

      cCtx.fillStyle = '#27c93f';
      cCtx.beginPath();
      cCtx.arc(76, 23, 7, 0, Math.PI * 2);
      cCtx.fill();

      cCtx.fillStyle = '#8b949e';
      cCtx.font = 'bold 18px monospace';
      cCtx.fillText('JanKurt.config.ts — IBM Experience FullStack', 110, 29);

      cCtx.font = '20px "Fira Code", monospace';
      const lines = [
        { text: 'import { ApplicationDeveloper, Enterprise } from "@ibm/systems";', color: '#ff7b72' },
        { text: '', color: '#fff' },
        { text: 'export const developer = new ApplicationDeveloper({', color: '#79c0ff' },
        { text: '  name: "Jan Kurt Bayaras",', color: '#a5d6ff' },
        { text: '  company: "IBM",', color: '#7ee787' },
        { text: '  position: "Application Developer - Experience FullStack",', color: '#ffa657' },
        { text: '  tenure: "5 months",', color: '#7ee787' },
        { text: '  stack: ["Vue 3", "React 19", "Python/FastAPI", "Node.js", "Docker", "AWS"],', color: '#a5d6ff' },
        { text: '  mission: "Enterprise Scalability & Next-Gen Cloud UIs",', color: '#ffa657' },
        { text: '  status: "ACTIVE_DEPLOYMENT",', color: '#29a587' },
        { text: '});', color: '#79c0ff' },
      ];

      lines.forEach((line, idx) => {
        cCtx.fillStyle = '#484f58';
        cCtx.fillText(String(idx + 1).padStart(2, '0'), 30, 90 + idx * 36);

        cCtx.fillStyle = line.color;
        cCtx.fillText(line.text, 80, 90 + idx * 36);
      });

      cCtx.fillStyle = '#0d1117';
      cCtx.fillRect(0, 560, 1024, 80);
      cCtx.fillStyle = '#29a587';
      const dots = '.'.repeat(Math.floor((time * 2) % 4));
      cCtx.fillText(`⚡ IBM Cloud Engine Online | Verified 60 FPS | Compiling${dots}`, 30, 610);
    };

    renderCodeTexture(0);
    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    codeTexture.colorSpace = THREE.SRGBColorSpace;
    codeTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    // Laptop Lid
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.08, -0.78);
    lidGroup.rotation.x = -Math.PI / 14;
    laptopGroup.add(lidGroup);

    const lidBezelGeo = new THREE.BoxGeometry(2.4, 1.5, 0.05);
    const lidBezelMat = new THREE.MeshStandardMaterial({
      color: 0x1d222a,
      metalness: 0.9,
      roughness: 0.2,
    });
    const lidBezel = new THREE.Mesh(lidBezelGeo, lidBezelMat);
    lidBezel.position.set(0, 0.75, 0);
    lidBezel.castShadow = true;
    lidGroup.add(lidBezel);

    const screenGeo = new THREE.PlaneGeometry(2.28, 1.38);
    const screenMat = new THREE.MeshStandardMaterial({
      map: codeTexture,
      roughness: 0.2,
      metalness: 0.1,
      emissive: 0xffffff,
      emissiveMap: codeTexture,
      emissiveIntensity: 0.55,
    });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 0.75, 0.026);
    lidGroup.add(screenMesh);

    // Holographic Cyber Core
    const holoGroup = new THREE.Group();
    holoGroup.position.set(0, 1.75, 0.2);
    rootGroup.add(holoGroup);

    const coreGeo = new THREE.IcosahedronGeometry(0.35, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x29a587,
      emissive: 0x29a587,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    holoGroup.add(coreMesh);

    const cageGeo = new THREE.IcosahedronGeometry(0.55, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x4eedc4,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    holoGroup.add(cageMesh);

    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x29a587,
      emissive: 0x29a587,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.018, 16, 64), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.016, 16, 64), ringMat);
    ring2.rotation.x = Math.PI / 3;
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(0.98, 0.014, 16, 64), ringMat);
    ring3.rotation.y = Math.PI / 4;
    holoGroup.add(ring1, ring2, ring3);

    // Orbiting Tech Badges
    const techLabels = ['IBM FullStack', 'Vue.js 3', 'React 19', 'FastAPI', 'Node.js', 'Docker & AWS'];
    const badgeMeshes: THREE.Group[] = [];

    techLabels.forEach((label, i) => {
      const bGrp = new THREE.Group();
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 256;
      bCanvas.height = 80;
      const ctx = bCanvas.getContext('2d')!;

      ctx.fillStyle = 'rgba(29, 34, 42, 0.9)';
      ctx.roundRect(4, 4, 248, 72, 36);
      ctx.fill();
      ctx.strokeStyle = label.includes('IBM') ? '#0062ff' : '#29a587';
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 128, 40);

      const bTex = new THREE.CanvasTexture(bCanvas);
      bTex.colorSpace = THREE.SRGBColorSpace;

      const pGeo = new THREE.PlaneGeometry(0.85, 0.28);
      const pMat = new THREE.MeshBasicMaterial({
        map: bTex,
        transparent: true,
        side: THREE.DoubleSide,
      });
      bGrp.add(new THREE.Mesh(pGeo, pMat));

      const stemGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.35);
      const stemMat = new THREE.MeshBasicMaterial({ color: 0x29a587, transparent: true, opacity: 0.5 });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = -0.22;
      bGrp.add(stem);

      bGrp.userData = { label, angle: (i / techLabels.length) * Math.PI * 2, radius: 1.65 + (i % 2) * 0.25 };
      rootGroup.add(bGrp);
      badgeMeshes.push(bGrp);
    });

    // Ambient Star / Cyber Dust Particles
    const particleCount = isSoftwareGl ? 80 : 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorTeal = new THREE.Color(0x29a587);
    const colorCyan = new THREE.Color(0x0062ff);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 8;
      particlePositions[i * 3 + 1] = Math.random() * 4.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const pickColor = Math.random() > 0.4 ? colorTeal : (Math.random() > 0.5 ? colorCyan : colorWhite);
      particleColors[i * 3] = pickColor.r;
      particleColors[i * 3 + 1] = pickColor.g;
      particleColors[i * 3 + 2] = pickColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Pointer move listener for parallax
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.targetMouseX = nx;
      stateRef.current.targetMouseY = ny;
    };
    container.addEventListener('mousemove', handlePointerMove);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let lastCodeUpdateTime = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsed = clock.getElapsedTime();

      // Smooth pointer parallax
      stateRef.current.mouseX += (stateRef.current.targetMouseX - stateRef.current.mouseX) * 0.05;
      stateRef.current.mouseY += (stateRef.current.targetMouseY - stateRef.current.mouseY) * 0.05;

      const currentMode = stateRef.current.sceneMode;
      const rotSpeed = stateRef.current.rotating ? stateRef.current.speed : 0;

      // Toggle group visibilities
      badgeContainer.visible = currentMode === 'badge';
      rootGroup.visible = currentMode === 'workstation';

      if (currentMode === 'badge') {
        // Floating Badge Animation
        badgeContainer.position.y = 1.35 + Math.sin(elapsed * 1.8) * 0.06;

        if (stateRef.current.rotating) {
          // Slow continuous gentle spin so user sees front and back of badge
          badgeMesh.rotation.y += delta * 0.35 * rotSpeed;
        }

        // Rotate rings around badge
        badgeRing1.rotation.z += delta * 0.6 * rotSpeed;
        badgeRing2.rotation.x += delta * 0.5 * rotSpeed;

        if (!isUserInteracting) {
          badgeContainer.rotation.y = THREE.MathUtils.lerp(
            badgeContainer.rotation.y,
            stateRef.current.mouseX * 0.3,
            0.05
          );
          badgeContainer.rotation.x = THREE.MathUtils.lerp(
            badgeContainer.rotation.x,
            -stateRef.current.mouseY * 0.2,
            0.05
          );
        }
      } else {
        // Workstation Animation
        if (elapsed - lastCodeUpdateTime > 0.25) {
          renderCodeTexture(elapsed);
          codeTexture.needsUpdate = true;
          lastCodeUpdateTime = elapsed;
        }

        coreMesh.rotation.y += delta * 0.8 * rotSpeed;
        coreMesh.rotation.x += delta * 0.4 * rotSpeed;
        cageMesh.rotation.y -= delta * 0.6 * rotSpeed;
        ring1.rotation.z += delta * 0.9 * rotSpeed;
        ring2.rotation.x += delta * 0.7 * rotSpeed;

        holoGroup.position.y = 1.75 + Math.sin(elapsed * 2) * 0.08;

        badgeMeshes.forEach((badge, i) => {
          const u = badge.userData;
          if (stateRef.current.rotating) {
            u.angle += delta * 0.45 * (i % 2 === 0 ? 1 : 1.15);
          }
          const bx = Math.cos(u.angle) * u.radius;
          const bz = Math.sin(u.angle) * u.radius;
          const by = 1.75 + Math.sin(elapsed * 1.5 + i) * 0.35;
          badge.position.set(bx, by, bz);
          badge.quaternion.copy(camera.quaternion);
        });

        if (!isUserInteracting) {
          rootGroup.rotation.y = THREE.MathUtils.lerp(
            rootGroup.rotation.y,
            stateRef.current.mouseX * 0.25,
            0.05
          );
          rootGroup.rotation.x = THREE.MathUtils.lerp(
            rootGroup.rotation.x,
            -stateRef.current.mouseY * 0.15,
            0.05
          );
        }
      }

      // Wireframe state
      const isW = stateRef.current.wireframe;
      frontMat.wireframe = isW;
      sideMat.wireframe = isW;
      baseMat.wireframe = isW;
      coreMat.wireframe = isW;

      particleCloud.rotation.y = elapsed * 0.04;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(animationFrameId);

      controls.dispose();
      renderer.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      badgeGeo.dispose();
      badgeFrontTex.dispose();
      badgeBackTex.dispose();
      sideMat.dispose();
      frontMat.dispose();
      backMat.dispose();
      baseGeo.dispose();
      baseMat.dispose();
      keyWellGeo.dispose();
      keyWellMat.dispose();
      padGeo.dispose();
      padMat.dispose();
      lidBezelGeo.dispose();
      lidBezelMat.dispose();
      screenGeo.dispose();
      screenMat.dispose();
      codeTexture.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      cageGeo.dispose();
      cageMat.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[450px] lg:h-[530px] rounded-2xl overflow-hidden border border-white/10 bg-[#161a20]/60 backdrop-blur-md shadow-2xl flex flex-col justify-between">
      {/* Top Header Tag */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
        <div className="flex items-center gap-2 bg-[#1d222a]/90 border border-[#29a587]/40 px-3 py-1.5 rounded-full pointer-events-auto shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-[#29a587] animate-pulse"></span>
          <span className="text-xs uppercase font-bold tracking-wider text-white">
            {sceneMode === 'badge' ? '3D Hologram Developer Badge' : '3D Developer Workstation'}
          </span>
        </div>
        <div className="text-xs text-gray-300 bg-[#1d222a]/90 px-2.5 py-1 rounded-md border border-white/5 pointer-events-auto hidden sm:block">
          Drag to Orbit 360° &bull; Scroll to Zoom
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Bottom Control Dock with 3D Scene Switcher */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 w-[94%] max-w-[540px]">
        <div className="bg-[#1d222a]/95 border border-white/10 backdrop-blur-md rounded-xl p-2 px-3 flex flex-wrap items-center justify-between gap-2 shadow-2xl text-xs">
          {/* Scene selector */}
          <div className="flex items-center gap-1.5 bg-[#12161f] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setSceneMode('badge')}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
                sceneMode === 'badge'
                  ? 'bg-[#29a587] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>3D ID Badge</span>
            </button>
            <button
              onClick={() => setSceneMode('workstation')}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1.5 font-bold transition-all cursor-pointer ${
                sceneMode === 'workstation'
                  ? 'bg-[#29a587] text-white shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>3D Workstation</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                isRotating
                  ? 'bg-white/15 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
              title="Toggle Auto Spin"
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">{isRotating ? 'Spinning' : 'Paused'}</span>
            </button>

            <button
              onClick={() => setWireframeMode(!wireframeMode)}
              className={`px-2.5 py-1 rounded-md flex items-center gap-1 font-medium transition-colors cursor-pointer ${
                wireframeMode
                  ? 'bg-[#29a587] text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white'
              }`}
              title="Toggle Wireframe Hologram"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{wireframeMode ? 'Wireframe' : 'Rendered'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
