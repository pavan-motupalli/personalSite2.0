module.exports = {
    home: {
      particles: {
        number: { value: 10 },
        color: { value: ['#0be779', '#008a3e', '#a3ffce'] },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.3,
            sync: true,
          },
        },
        size: {
          "random": {
            "enable": true,
            "minimumValue": 100
          },
          "value": {
            "min": 100,
            "max": 160
          },
          "animation": {
            "minimumValue": 40
          }
        },
        line_linked: {
          enable: false,
          distance: 450,
          color: '#ffffff',
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 4,
          direction: 'none',
          random: true,
          straight: false,
          bounce: false,
        },
        shape: {"options": {
          "polygon": {
            "sides": 6
          },
          "star": {
            "sides": 6
          }
        }, 
        type: 'polygon'},
      },
      interactivity: {
        detect_on: 'canvas',
        // activate
        events: {
          onhover: {
            enable: true,
            mode: ['bubble'],
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            size: 17,
            duration: 1,
            opacity: 0.8,
            speed: 1,
          },
        },
      },
      retina_detect: true,
    },
}