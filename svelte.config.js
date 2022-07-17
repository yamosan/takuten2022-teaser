import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";

export default {
  preprocess: sveltePreprocess({
    scss: {
      prependData: `@import 'src/styles/_breakpoint.scss';@import 'src/styles/_mixin.scss';`,
    },
    postcss: {
      plugins: [autoprefixer],
    },
  }),
};
