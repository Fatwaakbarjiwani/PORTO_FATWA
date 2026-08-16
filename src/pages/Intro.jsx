import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";
import LoadingWave from "../components/LoadingWave";
// import GUI from "lil-gui"; // Uncomment if you want to use GUI controls

gsap.registerPlugin(ScrollTrigger);

// Vertex shader as a string
const vertShader = `
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
        vUv = a_position;
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`;

// Fragment shader as a string
const fragShader = `
    precision mediump float;
    varying vec2 vUv;
    uniform vec2 u_resolution;
    uniform float u_scroll_progr;
    uniform float u_col_width;
    uniform float u_seed;
    uniform float u_scale;
    uniform float u_time;
    uniform float u_speed;
    uniform float u_opacity;
    uniform vec3 u_color;
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
    float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x = a0.x * x0.x + h.x * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
    }
    float get_l(vec2 v) {
        return 1. - clamp(0., 1., length(v));
    }
    float rand(float n) {
        return fract(sin(n) * 43758.5453123);
    }
    void main() {
        float scale = .001 * u_scale;
        float speed = .001 * u_speed;
        vec2 uv = vUv;
        uv.x *= (scale * u_resolution.x);
        vec2 noise_uv = uv;
        noise_uv *= 5.;
        noise_uv.y *= (.25 * scale * u_resolution.y);
        noise_uv += vec2(0., u_time * 1.5 * speed);
        float shape = 0.;
        shape += snoise(noise_uv);
        shape = clamp(.5 + .5 * shape, 0., 1.);
        shape *= pow(.5 * uv.y + .7 + pow(u_scroll_progr, 2.) + (.4 * u_scroll_progr * (1. - pow(vUv.x - .2, 2.))), 10.);
        shape = clamp(shape, 0., 1.);
        float dots = 0.;
        float bars = 0.;
        float light = 0.;
        const int num_col = 9;
        for (int i = 0; i < num_col; i++) {
            vec2 col_uv = vUv;
            float start_time_offset = rand(100. * (float(i) + u_seed));
            float c_t = fract(u_time * speed + start_time_offset);
            float drop_time = .2 + .6 * rand(10. * (float(i) + u_seed));
            float before_drop_normal = c_t / drop_time;
            float before_drop_t = pow(before_drop_normal, .4) * drop_time;
            float after_drop_normal = max(0., c_t - drop_time) / (1. - drop_time);
            float after_drop_t_dot = 3. * pow(after_drop_normal, 2.) * (1. - drop_time);
            float after_drop_t_bar = pow(after_drop_normal, 2.) * (drop_time);
            float eased_drop_t = step(c_t, drop_time) * before_drop_t;
            eased_drop_t += step(drop_time, c_t) * (drop_time + after_drop_t_dot);
            col_uv.y += (1. + 3. * rand(15. * float(i))) * u_scroll_progr;
            col_uv.x *= (u_resolution.x / u_resolution.y);
            col_uv *= (7. * scale * u_resolution.y);
            col_uv.x += (u_col_width * (.5 * float(num_col) - float(i)));
            vec2 dot_uv = col_uv;
            dot_uv.y += 4. * (eased_drop_t - .5);
            float dot = get_l(dot_uv);
            dot = pow(dot, 4.);
            float drop_grow = step(c_t, drop_time) * pow(before_drop_normal, .4);
            drop_grow += step(drop_time, c_t) * mix(1., .8, clamp(7. * after_drop_normal, 0., 1.));
            dot *= drop_grow;
            dot *= step(.5, drop_time);
            dots += dot;
            vec2 bar_uv = col_uv;
            bar_uv.y += step(c_t, drop_time) * 4. * (before_drop_t - .5);
            bar_uv.y += step(drop_time, c_t) * 4. * (drop_time - after_drop_t_bar - .5);
            float bar = smoothstep(-.5, 0., bar_uv.x) * (1. - smoothstep(0., .5, bar_uv.x));
            bar = pow(bar, 4.);
            light += bar * smoothstep(.0, .1, -bar_uv.x);
            float bar_mask = smoothstep(-.2, .2, bar_uv.y);
            bar *= bar_mask;
            bars += bar;
        }
        shape += bars;
        shape = clamp(shape, 0., 1.);
        shape += dots;
        float gooey = smoothstep(.48, .5, shape);
        gooey -= .1 * smoothstep(.5, .6, shape);
        vec3 color = u_color;
        color.r += .2 * (1. - vUv.y) * (1. - u_scroll_progr);
        color *= gooey;
        color = mix(color, vec3(1.), max(0., 1. - 2. * vUv.y) * light * smoothstep(.1, .7, snoise(.5 * uv)) * (smoothstep(.49, .6, shape) - smoothstep(.6, 1., shape)));
        gl_FragColor = vec4(color, gooey);
    }
`;

export default function Intro({ onFinish }) {
  const [showLoading, setShowLoading] = useState(false);
  const canvasRef = useRef(null);
  const pageRef = useRef(null);
  const scrollMsgRef = useRef(null);
  const scrollArrowRef = useRef(null);
  const textOverlayRef = useRef(null);
  const animationFrameRef = useRef();
  const uniformsRef = useRef({});
  const glRef = useRef();
  const paramsRef = useRef({
    scrollProgress: 0,
    colWidth: 0.7,
    speed: 1.0,
    scale: 0.35,
    seed: 0.5, //0.231
    // color: [0.235, 0.635, 0.062],
    color: [0.02, 0.018, 0.049],
    pageColor: "#fff0e5",
  });

  // Helper: create shader
  function createShader(gl, sourceCode, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, sourceCode);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(
        "An error occurred compiling the shaders: " +
          gl.getShaderInfoLog(shader)
      );
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // Helper: create shader program
  function createShaderProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "Unable to initialize the shader program: " +
          gl.getProgramInfoLog(program)
      );
      return null;
    }
    return program;
  }

  // Helper: get uniforms
  function getUniforms(gl, program) {
    let uniforms = {};
    let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      let uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }
    return uniforms;
  }

  // WebGL and GSAP setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      alert("WebGL is not supported by your browser.");
      return;
    }
    glRef.current = gl;

    // Compile shaders
    const vertexShader = createShader(gl, vertShader, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fragShader, gl.FRAGMENT_SHADER);
    const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(shaderProgram);

    // Set up uniforms
    const uniforms = getUniforms(gl, shaderProgram);
    uniformsRef.current = uniforms;

    // Set up geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Set initial uniforms
    const params = paramsRef.current;
    gl.uniform1f(uniforms.u_col_width, params.colWidth);
    gl.uniform1f(uniforms.u_speed, params.speed);
    gl.uniform1f(uniforms.u_scale, params.scale);
    gl.uniform1f(uniforms.u_seed, params.seed);
    gl.uniform3f(
      uniforms.u_color,
      params.color[0],
      params.color[1],
      params.color[2]
    );
    gl.uniform1f(uniforms.u_opacity, 1.0);

    // Resize canvas
    function resizeCanvas() {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Render loop
    function render() {
      const currentTime = performance.now() * 0.15;
      const params = paramsRef.current;
      // Selalu update uniform setiap frame!
      gl.uniform1f(uniforms.u_time, currentTime);
      gl.uniform1f(uniforms.u_scroll_progr, params.scrollProgress);
      gl.uniform1f(uniforms.u_col_width, params.colWidth);
      gl.uniform1f(uniforms.u_speed, params.speed);
      gl.uniform1f(uniforms.u_scale, params.scale);
      gl.uniform1f(uniforms.u_seed, params.seed);
      gl.uniform3f(
        uniforms.u_color,
        params.color[0],
        params.color[1],
        params.color[2]
      );
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    }
    render();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // GSAP ScrollTrigger setup
  useEffect(() => {
    const params = paramsRef.current;
    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: pageRef.current,
          start: "0% 0%",
          end: "100% 100%",
          scrub: true,
        },
      })
      .to(
        params,
        {
          scrollProgress: 1,
          onUpdate: () => {
            // Update uniform for scroll progress
            const gl = glRef.current;
            const uniforms = uniformsRef.current;
            if (gl && uniforms.u_scroll_progr) {
              gl.uniform1f(uniforms.u_scroll_progr, params.scrollProgress);
            }
          },
        },
        0
      )
      .to(
        scrollArrowRef.current,
        {
          duration: 0.2,
          y: 50,
          opacity: 0,
        },
        0
      )
      .to(
        scrollMsgRef.current,
        {
          opacity: 0,
        },
        0
      )
      .to(
        textOverlayRef.current,
        {
          duration: 0.3,
          opacity: 1,
        },
        0.5
      )
      .progress(0);
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  // Set page background color
  useEffect(() => {
    document.body.style.backgroundColor = paramsRef.current.pageColor;
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  // Deteksi scroll ke bawah
  useEffect(() => {
    if (showLoading) return;
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
        !showLoading
      ) {
        setShowLoading(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 2000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showLoading, onFinish]);

  return (
    <div>
      <div className="page opacity-0" ref={pageRef} style={{ opacity: 1 }}>
        <div
          className="scroll-msg"
          ref={scrollMsgRef}
          style={{ display: showLoading ? "none" : undefined }}
        >
          <div className="flex flex-col items-center justify-center z-0">
            <div className="text-center space-y-4 pt-24">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                Welcome 👋
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
                Discover new experiences and useful information — just scroll
                down to get started.
              </p>
            </div>

            <div
              className="arrow-animated-wrapper text-center"
              ref={scrollArrowRef}
            >
              <div className="arrow-animated text-4xl text-[#120210]">
                &darr;
              </div>
              <p className="text-sm text-gray-500 mt-4">Scroll down</p>
            </div>
          </div>
        </div>
      </div>
      <canvas
        id="gooey-overlay"
        ref={canvasRef}
        style={{
          position: "fixed",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></canvas>
      <div
        className="flex text-overlay items-center justify-center fixed inset-0 z-10"
        ref={textOverlayRef}
        style={{
          opacity: showLoading ? 1 : 0,
          pointerEvents: showLoading ? "auto" : "none",
          transition: "opacity 0.3s",
          fontSize: 32,
          color: "#1a3a1a",
          fontWeight: "bold",
          background: "transparent",
        }}
      >
        <div>
          {/* LoadingWave component */}
          <LoadingWave />
        </div>
      </div>
    </div>
  );
}

Intro.propTypes = {
  onFinish: PropTypes.func,
};
