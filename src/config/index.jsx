module.exports = {
  home: {
    particles: {
      number: { value: 30 },
      color: { value: ['#356285', '#134b5f', '#A4C2DB'] },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: true,
          speed: 0.4,
          opacity_min: 0.3,
          sync: true,
        },
      },
      size: {
        value: 70,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 450,
        color: '#ffffff',
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        bounce: false,
      },
    },
    retina_detect: true
  }
}