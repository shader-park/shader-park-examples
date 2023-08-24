// This code will be converted into GLSL shaders
// at build time, which enabled much more lightweight
// deployment. Also avoids having to eval in the browser.

// Put your Shader Park Code here
const sz = 0.15
rotateX(0.5*PI)
const s = getSpace()
const r = length(vec3(s.x, 0, s.z))
const rtp = getSpherical()
const rots = 80*nsin(time)+10
const i = repeatRadial(rots)
color(normal*0.5+0.5)
displace(3*sz, 0, 0)
rotateZ(rtp.z+time)
box(sz, sz, sz*0.2)
