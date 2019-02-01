const pkg = require('./package');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const replace = require('rollup-plugin-replace');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

const banner = `/*!
 * DOM Display Detector React
 * version: ${pkg.version}
 *  author: ${pkg.author.name} <${pkg.author.email}>
 * website: ${pkg.author.url}
 *  github: ${pkg.repository.url}
 * license: ${pkg.license}
*/
`;

module.exports = {
    input: './src/index.jsx',
    output: [
        {
            banner,
            file: 'dist/dom-display-detector.js',
            format: 'umd',
            name: 'ResponsiveImageGallery'
        },
        {
            banner,
            file: 'dist/dom-display-detector.common.js',
            format: 'cjs'
        },
        {
            banner,
            file: 'dist/dom-display-detector.esm.js',
            format: 'es'
        }
    ],
    plugins: [
        peerDepsExternal(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs({
            include: [
                'node_modules/**',
            ],
            namedExports: {
                'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement', 'cloneElement'],
                'node_modules/react-dom/index.js': ['findDOMNode']
            }
        }),
        babel({
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ]
        })
    ]
};