export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: 'blur(10px)',
  },

  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -80,
    filter: 'blur(10px)',
  },

  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 80,
    filter: 'blur(10px)',
  },

  show: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};