"""Generate the CV header background patterns as a CSS custom property.

Usage: python3 scripts/header_patterns.py <topo|wood|fern|network|halftone|tree> src/features/header/topo.css
"""

import math
import random
import sys
import urllib.parse

W, H = 794, 220
STEP = 4


def gauss(x, y, cx, cy, sx, sy, a):
    return a * math.exp(-(((x - cx) ** 2) / (2 * sx * sx) + ((y - cy) ** 2) / (2 * sy * sy)))


def field_topo(x, y):
    h = 0.0
    h += gauss(x, y, 470, 70, 95, 60, 1.0)
    h += gauss(x, y, 640, 175, 80, 55, 0.55)
    h += gauss(x, y, 300, 190, 120, 50, 0.45)
    h += gauss(x, y, 80, -20, 110, 70, 0.5)
    h += gauss(x, y, 780, 20, 70, 50, 0.35)
    h += 0.08 * math.sin(x / 47 + 1.3) * math.cos(y / 39 - 0.4)
    h += 0.05 * math.sin((x + y) / 23)
    return h


def field_wood(x, y):
    g = y * (1 + 0.18 * math.sin(y / 31 + x / 260))
    g += 16 * math.sin(x / 170 + 0.6) + 7 * math.sin(x / 67 + 2.1) + 3 * math.sin(x / 29 + y / 45)
    for cx, cy, r, a in ((505, 92, 17, 85), (190, 160, 13, 60), (715, 38, 11, 45)):
        d2 = ((x - cx) / 2.6) ** 2 + (y - cy) ** 2
        g += a * math.exp(-d2 / (2 * r * r))
    return g


def march(field, levels):
    nx, ny = W // STEP + 2, H // STEP + 2
    grid = [[field(i * STEP - STEP, j * STEP - STEP) for i in range(nx)] for j in range(ny)]
    out = []
    for lv in levels:
        segs = []
        for j in range(ny - 1):
            for i in range(nx - 1):
                a, b = grid[j][i], grid[j][i + 1]
                c, d = grid[j + 1][i + 1], grid[j + 1][i]
                idx = (a > lv) | ((b > lv) << 1) | ((c > lv) << 2) | ((d > lv) << 3)
                if idx in (0, 15):
                    continue
                x0, y0 = i * STEP - STEP, j * STEP - STEP

                def lerp(p, q, vp, vq):
                    t = (lv - vp) / (vq - vp) if vq != vp else 0.5
                    return (p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1]))

                P = [(x0, y0), (x0 + STEP, y0), (x0 + STEP, y0 + STEP), (x0, y0 + STEP)]
                V = [a, b, c, d]
                e = {
                    0: lerp(P[0], P[1], V[0], V[1]),
                    1: lerp(P[1], P[2], V[1], V[2]),
                    2: lerp(P[3], P[2], V[3], V[2]),
                    3: lerp(P[0], P[3], V[0], V[3]),
                }
                table = {
                    1: [(3, 0)], 2: [(0, 1)], 3: [(3, 1)], 4: [(1, 2)], 6: [(0, 2)], 7: [(3, 2)],
                    8: [(2, 3)], 9: [(0, 2)], 11: [(1, 2)], 12: [(1, 3)], 13: [(0, 1)], 14: [(3, 0)],
                }
                if idx in (5, 10):
                    center = (a + b + c + d) / 4 > lv
                    if idx == 5:
                        pairs = [(3, 2), (0, 1)] if center else [(3, 0), (1, 2)]
                    else:
                        pairs = [(0, 3), (1, 2)] if center else [(0, 1), (2, 3)]
                else:
                    pairs = table[idx]
                for p, q in pairs:
                    segs.append((e[p], e[q]))
        out.append(chain(segs))
    return out


def key(p):
    return (round(p[0], 2), round(p[1], 2))


def chain(segs):
    adj = {}
    for s in segs:
        for end in (0, 1):
            adj.setdefault(key(s[end]), []).append(s)
    used = set()
    lines = []
    for s in segs:
        if id(s) in used:
            continue
        used.add(id(s))
        line = [s[0], s[1]]
        for direction in (1, -1):
            while True:
                tip = line[-1] if direction == 1 else line[0]
                nxt = None
                for cand in adj.get(key(tip), []):
                    if id(cand) not in used:
                        nxt = cand
                        break
                if not nxt:
                    break
                used.add(id(nxt))
                other = nxt[1] if key(nxt[0]) == key(tip) else nxt[0]
                if direction == 1:
                    line.append(other)
                else:
                    line.insert(0, other)
        if len(line) > 6:
            lines.append(line)
    return lines


def chaikin(pts, it=2):
    for _ in range(it):
        new = [pts[0]]
        for p, q in zip(pts, pts[1:]):
            new.append((0.75 * p[0] + 0.25 * q[0], 0.75 * p[1] + 0.25 * q[1]))
            new.append((0.25 * p[0] + 0.75 * q[0], 0.25 * p[1] + 0.75 * q[1]))
        new.append(pts[-1])
        pts = new
    return pts[::3] + [pts[-1]]


def path(pts):
    pts = chaikin(pts)
    return "M" + " ".join(f"{x:.1f},{y:.1f}" for x, y in pts)


def body_topo():
    levels = [0.06 + k * 0.065 for k in range(18)]
    out = ""
    for k, lines in enumerate(march(field_topo, levels)):
        w, op = (1.1, 0.16) if k % 4 == 3 else (0.7, 0.1)
        out += "".join(f"<path d='{path(l)}' stroke-width='{w}' stroke-opacity='{op}'/>" for l in lines)
    return out


def body_wood():
    levels = [-40 + k * 8 for k in range(44)]
    out = ""
    for k, lines in enumerate(march(field_wood, levels)):
        op = 0.07 + 0.05 * (0.5 + 0.5 * math.sin(k * 1.7))
        w = 0.6 + 0.5 * (0.5 + 0.5 * math.sin(k * 2.3 + 1))
        out += "".join(f"<path d='{path(l)}' stroke-width='{w:.2f}' stroke-opacity='{op:.3f}'/>" for l in lines)
    return out


def bezier(p0, p1, p2, t):
    return (
        (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0],
        (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1],
    )


def sprig(p0, p1, p2, leaves, size, op):
    out = f"<path d='M{p0[0]:.1f},{p0[1]:.1f} Q{p1[0]:.1f},{p1[1]:.1f} {p2[0]:.1f},{p2[1]:.1f}' stroke-width='1.2' stroke-opacity='{op}'/>"
    for i in range(leaves):
        t = 0.12 + 0.86 * i / (leaves - 1)
        bx, by = bezier(p0, p1, p2, t)
        ax, ay = bezier(p0, p1, p2, min(t + 0.01, 1))
        ang = math.atan2(ay - by, ax - bx)
        length = size * (1.15 - 0.75 * t)
        for side in (1, -1):
            a = ang + side * 0.95
            tx, ty = bx + length * math.cos(a), by + length * math.sin(a)
            nx, ny = -math.sin(a) * length * 0.32, math.cos(a) * length * 0.32
            mx, my = (bx + tx) / 2, (by + ty) / 2
            out += (
                f"<path d='M{bx:.1f},{by:.1f} Q{mx + nx:.1f},{my + ny:.1f} {tx:.1f},{ty:.1f} "
                f"Q{mx - nx:.1f},{my - ny:.1f} {bx:.1f},{by:.1f}Z' stroke-width='0.8' stroke-opacity='{op}'/>"
                f"<path d='M{bx:.1f},{by:.1f} L{bx + 0.8 * (tx - bx):.1f},{by + 0.8 * (ty - by):.1f}' stroke-width='0.5' stroke-opacity='{op * 0.7:.3f}'/>"
            )
    return out


def body_fern():
    out = sprig((600, 240), (500, 150), (430, 10), 13, 34, 0.17)
    out += sprig((820, 70), (720, 60), (650, -10), 9, 26, 0.13)
    out += sprig((250, 250), (290, 200), (330, 150), 6, 20, 0.1)
    return out


def body_network():
    rnd = random.Random(7)
    pts = []
    while len(pts) < 70:
        x, y = rnd.uniform(-20, W + 20), rnd.uniform(-20, H + 20)
        if rnd.random() < (max(x, 0) / W) ** 1.6 + 0.08 and all((x - a) ** 2 + (y - b) ** 2 > 38 ** 2 for a, b in pts):
            pts.append((x, y))
    out = ""
    for i, (x, y) in enumerate(pts):
        near = sorted(((x - a) ** 2 + (y - b) ** 2, j) for j, (a, b) in enumerate(pts) if j != i)[:3]
        for d2, j in near:
            if j > i and d2 < 95 ** 2:
                a, b = pts[j]
                out += f"<path d='M{x:.1f},{y:.1f} L{a:.1f},{b:.1f}' stroke-width='0.7' stroke-opacity='0.12'/>"
    for x, y in pts:
        r = 1.6 + 1.4 * (max(x, 0) / W)
        out += f"<circle cx='{x:.1f}' cy='{y:.1f}' r='{r:.1f}' fill='white' fill-opacity='0.22' stroke='none'/>"
    return out


def body_halftone():
    out = ""
    step = 11
    for j in range(H // step + 2):
        for i in range(W // step + 2):
            x = i * step + (step / 2 if j % 2 else 0)
            y = j * step
            v = 0.5 + 0.5 * math.sin(x / 95 - y / 60 + 0.4 * math.sin(y / 30))
            v *= min(1, max(0, (x - 260) / 420))
            r = 2.3 * v
            if r > 0.35:
                out += f"<circle cx='{x:.1f}' cy='{y:.1f}' r='{r:.2f}'/>"
    return f"<g fill='white' fill-opacity='0.13' stroke='none'>{out}</g>"


def body_tree():
    rnd = random.Random(3)
    out = []

    def branch(x, y, ang, length, depth, width):
        if depth == 0 or length < 4:
            return
        x2, y2 = x + length * math.cos(ang), y + length * math.sin(ang)
        bend = rnd.uniform(-0.25, 0.25)
        cx, cy = (x + x2) / 2 + length * 0.2 * math.cos(ang + math.pi / 2) * bend, (y + y2) / 2 + length * 0.2 * math.sin(ang + math.pi / 2) * bend
        op = 0.08 + 0.02 * depth
        out.append(f"<path d='M{x:.1f},{y:.1f} Q{cx:.1f},{cy:.1f} {x2:.1f},{y2:.1f}' stroke-width='{width:.2f}' stroke-opacity='{op:.3f}'/>")
        for spread in (-1, 1):
            branch(x2, y2, ang + spread * rnd.uniform(0.28, 0.55), length * rnd.uniform(0.68, 0.8), depth - 1, width * 0.72)

    branch(560, 250, -math.pi / 2 - 0.12, 62, 9, 3.2)
    branch(800, 230, -math.pi / 2 - 0.55, 40, 7, 2.0)
    return "".join(out)


BODIES = {
    "topo": body_topo,
    "wood": body_wood,
    "fern": body_fern,
    "network": body_network,
    "halftone": body_halftone,
    "tree": body_tree,
}


def svg(variant):
    return (
        f"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {W} {H}' preserveAspectRatio='xMidYMid slice'>"
        f"<g fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round'>{BODIES[variant]()}</g></svg>"
    )


if __name__ == "__main__":
    variant, out = sys.argv[1], sys.argv[2]
    uri = "data:image/svg+xml," + urllib.parse.quote(svg(variant), safe="/:=' ,.")
    with open(out, "w") as f:
        f.write(f':root {{\n  --topo: url("{uri}");\n}}\n')
    print(variant, f"{len(uri) / 1024:.0f} KB")
