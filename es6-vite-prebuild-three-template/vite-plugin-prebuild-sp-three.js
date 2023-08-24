const fs = require('fs');
const sp = require('shader-park-core/dist/shader-park-core.cjs.js');

// sp vite plugin
function preBuildShaderParkThreejs() {
    return {
        name: 'prebuild-shader-park-threejs',
        resolveId(id) {
            if (id.endsWith('.sp')) {
              return id;  // this plugin will intercept all .sp files
            }
        },
        load(id) {
            if (id.endsWith('.sp')) {
                const code = fs.readFileSync(id, 'utf-8');
                // replace the contents with generated glsl components
                return `export default ${
                    JSON.stringify(sp.sculptToThreeJSShaderSource(code))
                }`;
            }
        }
    };
}

module.exports = preBuildShaderParkThreejs;
