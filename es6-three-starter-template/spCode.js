// This function will be converted into a string so
// the scope is limited to this function only.

// To pass external data use the 'input' function. See other examples.

export function spCode()  {
  // Put your Shader Park Code here
  rotateY(mouse.x * PI / 2 + time*.5);
  rotateX(mouse.y * PI / 2);
  metal(.5);
  shine(.4);
  color(getRayDirection()+.2);
  rotateY(getRayDirection().y*4+time)
  boxFrame(vec3(.4), .02);
  expand(.02);
  blend(nsin(time)*.6)
  sphere(.2);
};