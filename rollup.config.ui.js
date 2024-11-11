import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import jsonPlugin from '@rollup/plugin-json';

import dts from 'rollup-plugin-dts';

const packageJson = require('./package.json');

const plugins = [
	peerDepsExternal(),
	resolve(),
	replace({
		__IS_DEV__: process.env.NODE_ENV === 'development',
		preventAssignment: true,
	}),
	commonjs(),
	typescript({ tsconfig: './tsconfig.json' }),
	terser(),
	postcss(),
	jsonPlugin(),
];

const UIConfig = [
	{
		input: ['./src/index.ts'],
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
				exports: 'named',
			},
		],
		plugins,
		external: ['react', 'react-dom'],
		onwarn: (warning, warn) => {
			return;
		},
	},
	{
		input: ['./src/index.ts'],
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
				exports: 'named',
			},
		],
		plugins,
		external: ['react', 'react-dom'],
		onwarn: (warning, warn) => {
			return;
		},
	},
	{
		input: './dist/esm/types/index.d.ts',
		output: [{ file: './dist/index.d.ts', format: 'esm' }],
		external: [/\.css$/],
		plugins: [dts()],
		onwarn: (warning, warn) => {
			return;
		},
	},
];

export default UIConfig;
