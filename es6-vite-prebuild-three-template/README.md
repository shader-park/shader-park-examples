# Shader Park Vite Prebuild Plugin Template 🎉
=================

Write your Shader Park code in the spCode.sp file
You can simply paste in code from the ShaderPark web editor.

This setup uses a Vite plugin to generate the GLSL shaders at build time, so the shader-park-core library does not need to be bundled into your app. This has several benefits:
- Smaller bundle size. shader-park-core is heavy because it depends on large libraries like esprima.
- Faster initial render. Shaders are generated ahead of time.
- No need to use eval in the browser. This is more secure and follows best practices.
- Clear isolation between shaderpark code and the rest of your javascript code. 

Find out more about [Shader Park](https://shaderpark.com/).

To setup run:
```
npm i
```

To start the server:
```
npm run dev
```

To build:
```
npm run build
```

