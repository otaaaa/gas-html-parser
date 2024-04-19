import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'parse',
  },
  plugins: [
    resolve(),
    commonjs(),
    terser({
      format: {
        ascii_only: true
      }
    })
  ]
}

