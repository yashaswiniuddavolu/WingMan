import { useEffect, useState } from "react";

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  delay: number;
}

export function StarBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate static/twinkling stars
    const newStars: Star[] = [];
    for (let i = 0; i < 70; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 5,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 3; i++) {
      newShootingStars.push({
        id: i,
        top: Math.random() * 50, // Start from top half
        left: Math.random() * 50, // Start from left half
        delay: Math.random() * 10 + 5, // Random delay between 5-15s
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e3a8a] via-[#020617] to-[#020617]">
      {/* Background Gradient Overlays for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20" />
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-[twinkle_3s_ease-in-out_infinite]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
          }}
        />
      ))}
      
      {/* Drifting Particles (Simulated moving stars) */}
      {stars.slice(0, 10).map((star) => (
         <div
          key={`drift-${star.id}`}
          className="absolute rounded-full bg-sky-300 animate-[drift_20s_linear_infinite]"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity * 0.5,
            animationDuration: `${star.animationDuration * 5}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}

      {/* Nebulas / Glows for "Dark Blue & Sky Blue" theme */}
      <div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] bg-sky-600/20 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '10s' }} />

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
            key={star.id}
            className="absolute h-[1px] w-[100px] bg-gradient-to-r from-transparent via-sky-200 to-transparent animate-[shooting-star_5s_linear_infinite]"
            style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                opacity: 0.8
            }}
        />
      ))}
    </div>
  );
}
