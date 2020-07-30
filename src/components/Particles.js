import React from "react";
import Particles from "react-particles-js";

const AppParticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 45,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: [
              "#BD10E0",
              "#B8E986",
              "#50E3C2",
              "#FFD300",
              "#E86363",
              "#000000",
              "#000080",
              "#b30000",
              "#ff1aff",
              "#b3ff66",
            ],
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#b6b2b2",
            },
          },
          opacity: {
            value: 0.5211089197812949,
            random: false,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 8.017060304327615,
            random: true,
            anim: {
              enable: true,
              speed: 12.181158184520175,
              size_min: 0.1,
              sync: true,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffc1c1",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      }}
    />
  );
};

export default AppParticles;
