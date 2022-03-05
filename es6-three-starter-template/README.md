# Welcome to the Shader Park Template🎉
=================

To setup run:
```
yarn install
```

To start the server:
```
yarn start
```

To build:
```
yarn build
```

Write your Shader Park code in the spCode.js file
Just paste your code from Shader Park into the `spCode()` function.

Note: `createSculptureWithGeometry` accepts any type of geometry and will apply the shader to the inside faces of it. `createSculpture` will automatically generate a SphereGeometry and apply the shader to it for you.


If you need to scale the size of the shader in relation to the size of your object there is a built in uniform called `_scale` that can modify the size.

You can modify it like so:
```
let mesh = createSculptureWithGeometry(geometry, spCode, () => ( {
  time: params.time,
  _scale: 2.0
} ));
```

If you change the background / renderer color you can have shader park match the same lighting by using `backgroundColor(.2, .2, .2);` in your spCode and setting the r,g, b accordingly.


Find out more about [Shader Park](https://shaderpark.com/).
