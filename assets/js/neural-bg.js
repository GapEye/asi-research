/* Neural field background — asi-research.com
   Drifting nodes in two colors (technical / governance) that link when
   near each other, brighten and connect toward the cursor, and parallax
   at different depths as the page scrolls.
   Respects prefers-reduced-motion (renders a single static frame). */

(function () {
  var canvas = document.getElementById('neural-bg');
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext('2d');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var TECH = '39,66,214';   // ultramarine
  var GOV = '14,122,95';    // deep teal
  var LINK_DIST = 110;      // node-to-node connection distance
  var MOUSE_DIST = 170;     // cursor influence radius

  var w = 0, h = 0, dpr = 1;
  var nodes = [];
  var mouse = { x: -1e4, y: -1e4 };
  var scrollY = window.pageYOffset || 0;
  var running = false;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
    if (reduced) drawFrame();
  }

  function initNodes() {
    var count = Math.max(24, Math.min(90, Math.floor((w * h) / 16000)));
    nodes = [];
    for (var i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        depth: 0.25 + Math.random() * 0.75, // parallax factor
        color: Math.random() < 0.5 ? TECH : GOV,
        r: 1.1 + Math.random() * 1.5
      });
    }
  }

  // On-screen y with scroll parallax, wrapped into the viewport.
  function screenY(n) {
    var y = (n.y - scrollY * n.depth * 0.18) % h;
    return y < 0 ? y + h : y;
  }

  function drawFrame() {
    ctx.clearRect(0, 0, w, h);

    var pts = new Array(nodes.length);
    var i, j, n, a, b, dx, dy, d;

    for (i = 0; i < nodes.length; i++) {
      n = nodes[i];
      var mx = n.x - mouse.x, my = screenY(n) - mouse.y;
      pts[i] = {
        x: n.x,
        y: screenY(n),
        color: n.color,
        r: n.r,
        near: Math.sqrt(mx * mx + my * my) // distance to cursor
      };
    }

    // node-to-node links
    for (i = 0; i < pts.length; i++) {
      for (j = i + 1; j < pts.length; j++) {
        a = pts[i]; b = pts[j];
        dx = a.x - b.x; dy = a.y - b.y;
        d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_DIST) {
          var alpha = (1 - d / LINK_DIST) * 0.08;
          // brighten links near the cursor
          if (a.near < MOUSE_DIST || b.near < MOUSE_DIST) alpha *= 3.2;
          ctx.strokeStyle = 'rgba(' + a.color + ',' + alpha.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // cursor-to-node links
    if (!reduced) {
      for (i = 0; i < pts.length; i++) {
        a = pts[i];
        if (a.near < MOUSE_DIST) {
          var ma = (1 - a.near / MOUSE_DIST) * 0.22;
          ctx.strokeStyle = 'rgba(' + a.color + ',' + ma.toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // nodes
    for (i = 0; i < pts.length; i++) {
      a = pts[i];
      var boost = a.near < MOUSE_DIST ? (1 - a.near / MOUSE_DIST) : 0;
      ctx.fillStyle = 'rgba(' + a.color + ',' + (0.28 + boost * 0.45).toFixed(3) + ')';
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r + boost * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    if (!running) return;
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -10) n.x = w + 10;
      if (n.x > w + 10) n.x = -10;
      // y wraps via screenY()
    }
    drawFrame();
    window.requestAnimationFrame(step);
  }

  function start() {
    if (running || reduced) return;
    running = true;
    window.requestAnimationFrame(step);
  }
  function stop() { running = false; }

  window.addEventListener('resize', resize);
  window.addEventListener('scroll', function () {
    scrollY = window.pageYOffset || 0;
    if (reduced) drawFrame(); // static mode still parallaxes on scroll, no animation
  }, { passive: true });
  window.addEventListener('mousemove', function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });
  window.addEventListener('mouseout', function (e) {
    if (!e.relatedTarget) { mouse.x = -1e4; mouse.y = -1e4; }
  });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  resize();
  start();
  if (reduced) drawFrame();
})();
