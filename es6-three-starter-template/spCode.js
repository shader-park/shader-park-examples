// This function will be converted into a string so
// the scope is limited to this function only.

// To pass external data use the 'input' function. See other examples.

export function spCode()  {
  // Put your Shader Park Code here
  rotateY(-0.1 * time);
  let n = noise(getSpace() * 40 + time + 10000000);
  color(vec3(0, 0, .5) + normal * .2);
  metal(n);
  shine(n);
  sphere(0.5 + n * nsin(time) * 3);
};