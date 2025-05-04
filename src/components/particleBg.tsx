"use client";

import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBg() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {});
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        style: {
          background: "transparent",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1"
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            push: {
              quantity: 2
            },
            repulse: {
              distance: 80,
              duration: 1
            }
          }
        },
        smooth: true,
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: false,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true
            },
            value: 80
          },
          opacity: {
            value: 0.2
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 3, max: 3 }
          }
        },
        detectRetina: true
      }}
    />
  );
}
