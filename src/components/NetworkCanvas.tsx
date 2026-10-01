import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

interface DataPacket {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    const parent = canvas.parentElement;
    parent?.addEventListener("mousemove", handleMouseMove);
    parent?.addEventListener("mouseleave", handleMouseLeave);

    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.35 + 0.25,
      });
    }

    const packets: DataPacket[] = [];
    const maxPackets = 8;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Adjacency connections
      const maxDistance = 150;
      const connections: [number, number][] = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            connections.push([i, j]);
            const alpha = (1 - dist / maxDistance) * 0.2;
            ctx.strokeStyle = `rgba(28, 222, 70, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Mouse interactive aura
        if (mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const mdx = particles[i].x - mouseRef.current.x;
          const mdy = particles[i].y - mouseRef.current.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 180) {
            const mAlpha = (1 - mDist / 180) * 0.45;
            ctx.strokeStyle = `rgba(28, 222, 70, ${mAlpha})`;
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        }
      }

      // Maintain active data packets traveling across connections
      if (connections.length > 0 && packets.length < maxPackets && Math.random() < 0.1) {
        const randConn = connections[Math.floor(Math.random() * connections.length)];
        packets.push({
          from: randConn[0],
          to: randConn[1],
          progress: 0,
          speed: Math.random() * 0.015 + 0.008,
        });
      }

      // Render & update data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        const p1 = particles[pkt.from];
        const p2 = particles[pkt.to];

        if (!p1 || !p2 || pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const curX = p1.x + (p2.x - p1.x) * pkt.progress;
        const curY = p1.y + (p2.y - p1.y) * pkt.progress;

        // Glowing packet with laser trail
        ctx.shadowColor = "#1CDE46";
        ctx.shadowBlur = 12;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(curX, curY, 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw and move particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(28, 222, 70, ${p.baseAlpha})`;
        ctx.shadowColor = "#1CDE46";
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      parent?.removeEventListener("mousemove", handleMouseMove);
      parent?.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-[1] opacity-80 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

export default NetworkCanvas;
