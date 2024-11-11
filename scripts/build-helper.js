/* eslint-disable no-console */
const { resolve, join, basename } = require('path');
const { readFile, writeFile, copy } = require('fs-extra');
const packagePath = process.cwd();
const distPath = join(packagePath, './dist');

const writeJson = (targetPath, obj) => writeFile(targetPath, JSON.stringify(obj, null, 2), 'utf8');

async function createPackageFile() {
	const packageData = await readFile(resolve(packagePath, './package.json'), 'utf8');
	const { scripts, devDependencies, files, ...packageOthers } = JSON.parse(packageData);
	const newPackageData = {
		...packageOthers,
		types: './index.d.ts',
		main: './cjs/index.js',
		module: './esm/index.js',
		peerDependencies: {
			react: '^18.2.0',
			'react-dom': '^18.2.0',
			'react-router-dom': '^6.15.0',
		},
	};

	const targetPath = resolve(distPath, './package.json');
	const targetPathIcons = resolve(distPath + '/icons', './package.json');
	const targetPathHooks = resolve(distPath + '/hooks', './package.json');
	const targetPathUtils = resolve(distPath + '/utils', './package.json');

	const IconsPackage = {
		name: '@sadegh1379/es-core/icons',
		version: packageOthers.version,
		private: false,
		main: './cjs/index.js',
		module: './esm/index.js',
		types: './index.d.ts',
	};
	const HooksPackage = {
		name: '@sadegh1379/es-core/hooks',
		version: packageOthers.version,
		private: false,
		main: './cjs/index.js',
		module: './esm/index.js',
		types: './index.d.ts',
	};
	const UtilsPackage = {
		name: '@sadegh1379/es-core/utils',
		version: packageOthers.version,
		private: false,
		main: './cjs/index.js',
		module: './esm/index.js',
		types: './index.d.ts',
	};

	await writeJson(targetPath, newPackageData);
	await writeJson(targetPathIcons, IconsPackage);
	await writeJson(targetPathHooks, HooksPackage);
	await writeJson(targetPathUtils, UtilsPackage);
	console.log(`Created package.json in ${targetPath}`);
}

async function includeFileInBuild(file) {
	const sourcePath = resolve(packagePath, file);
	const targetPath = resolve(distPath, basename(file));
	await copy(sourcePath, targetPath);
	console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function run() {
	try {
		await createPackageFile();
		await includeFileInBuild('./src/core/css');
		await includeFileInBuild('./src/core/font');
		// await includeFileInBuild('../../LICENSE');
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}

run();
