import { cn } from '@/lib/utils';

/**
 * Illustrated side view of a sub, drawn from its actual fillings.
 * Layers are listed bottom → top. Lightweight inline SVG, no photos.
 */
export type Filling =
  | 'ham'
  | 'salami'
  | 'pepperoni'
  | 'turkey'
  | 'roastBeef'
  | 'brisket'
  | 'steak'
  | 'chicken'
  | 'bacon'
  | 'meatball'
  | 'spinach'
  | 'veggiePatty'
  | 'lettuce'
  | 'tomato'
  | 'cheese'
  | 'meltedCheese'
  | 'butterSauce'
  | 'ranch';

export const fillingLabels: Record<Filling, string> = {
  ham: 'Ham',
  salami: 'Salami',
  pepperoni: 'Pepperoni',
  turkey: 'Turkey',
  roastBeef: 'Roast beef',
  brisket: 'Brisket',
  steak: 'Philly steak',
  chicken: 'Chicken',
  bacon: 'Bacon',
  meatball: 'Meatballs',
  spinach: 'Spinach',
  veggiePatty: 'Veggie patty',
  lettuce: 'Lettuce',
  tomato: 'Tomato',
  cheese: 'Cheese',
  meltedCheese: 'Melted cheese',
  butterSauce: 'Butter chicken sauce',
  ranch: 'Ranch',
};

const X0 = 22;
const X1 = 178;
const W = 200;

/** Band with a flat top and a scalloped, slightly overhanging bottom edge. */
function wavyBand(y: number, h: number, bumps = 7, amp = 3, overhang = 6) {
  const a = X0 - overhang;
  const b = X1 + overhang;
  const step = (b - a) / bumps;
  let d = `M${a} ${y} L${b} ${y} L${b} ${y + h}`;
  for (let i = 0; i < bumps; i++) {
    const x = b - step * (i + 1);
    d += ` Q${x + step / 2} ${y + h + amp * (i % 2 ? 1 : 1.6)} ${x} ${y + h}`;
  }
  return d + ' Z';
}

type LayerSpec = { h: number; render: (y: number, key: string) => React.ReactNode };

const slice = (fill: string, edge: string, h = 8) => ({
  h,
  render: (y: number, key: string) => (
    <path key={key} d={wavyBand(y, h)} fill={fill} stroke={edge} strokeWidth={1.2} strokeLinejoin="round" />
  ),
});

const row = (n: number, draw: (cx: number, i: number) => React.ReactNode) =>
  Array.from({ length: n }, (_, i) => draw(X0 + 6 + ((X1 - X0 - 12) / (n - 1)) * i, i));

const layers: Record<Filling, LayerSpec> = {
  ham: slice('#F4A7A3', '#E0817C', 12),
  turkey: slice('#F1DDBB', '#D9BC8F', 12),
  roastBeef: slice('#A8524A', '#7F3A33', 12),
  brisket: {
    h: 13,
    render: (y, k) => (
      <g key={k}>
        <path d={wavyBand(y, 13)} fill="#7B4429" stroke="#4E2A18" strokeWidth={1.2} />
        <path d={`M${X0} ${y + 2} L${X1} ${y + 2}`} stroke="#3D2012" strokeWidth={3.5} strokeLinecap="round" />
      </g>
    ),
  },
  salami: {
    h: 12,
    render: (y, k) => (
      <g key={k}>
        <path d={wavyBand(y, 12)} fill="#B23A48" stroke="#842634" strokeWidth={1.2} />
        {row(11, (cx, i) => (
          <circle key={i} cx={cx} cy={y + 4 + (i % 2) * 4} r={1.3} fill="#F6D7C8" />
        ))}
      </g>
    ),
  },
  pepperoni: {
    h: 12,
    render: (y, k) => (
      <g key={k}>
        {row(8, (cx, i) => (
          <g key={i}>
            <ellipse cx={cx} cy={y + 6} rx={12} ry={6.5} fill="#D6453A" stroke="#A82E26" strokeWidth={1} />
            <circle cx={cx - 4} cy={y + 4.5} r={1.4} fill="#8E241D" />
            <circle cx={cx + 4} cy={y + 7} r={1.1} fill="#8E241D" />
          </g>
        ))}
      </g>
    ),
  },
  steak: {
    h: 15,
    render: (y, k) => (
      <g key={k}>
        <path d={wavyBand(y, 15, 9, 4, 8)} fill="#6E3B24" stroke="#4A2615" strokeWidth={1.2} />
        {row(8, (cx, i) => (
          <path key={i} d={`M${cx - 7} ${y + 5 + (i % 3) * 2.5} q7 -3 14 0`} stroke="#A86B4A" strokeWidth={1.6} fill="none" strokeLinecap="round" />
        ))}
      </g>
    ),
  },
  chicken: {
    h: 14,
    render: (y, k) => (
      <g key={k}>
        {row(7, (cx, i) => (
          <g key={i}>
            <rect x={cx - 13} y={y + (i % 2) * 1.5} width={26} height={12} rx={5} fill="#E9C48F" stroke="#C49255" strokeWidth={1} />
            <path d={`M${cx - 6} ${y + 3 + (i % 2)} l4 7 M${cx + 2} ${y + 3 + (i % 2)} l4 7`} stroke="#8C5A2B" strokeWidth={1.4} strokeLinecap="round" />
          </g>
        ))}
      </g>
    ),
  },
  bacon: {
    h: 11,
    render: (y, k) => (
      <g key={k}>
        <path d={wavyBand(y, 11, 6, 5)} fill="#B4503A" stroke="#86321F" strokeWidth={1.2} />
        <path d={`M${X0} ${y + 5.5} Q${X0 + 39} ${y + 1.5} ${X0 + 78} ${y + 5.5} T${X1} ${y + 5.5}`} stroke="#F3C7B1" strokeWidth={2.5} fill="none" />
      </g>
    ),
  },
  meatball: {
    h: 20,
    render: (y, k) => (
      <g key={k}>
        {row(7, (cx, i) => (
          <g key={i}>
            <circle cx={cx} cy={y + 10} r={12} fill="#7A3E26" stroke="#4F2414" strokeWidth={1.2} />
            <circle cx={cx - 4} cy={y + 5.5} r={3} fill="#A86246" />
          </g>
        ))}
      </g>
    ),
  },
  spinach: {
    h: 10,
    render: (y, k) => (
      <g key={k}>
        {row(10, (cx, i) => (
          <ellipse key={i} cx={cx} cy={y + 5} rx={11} ry={5.5} transform={`rotate(${i % 2 ? 14 : -14} ${cx} ${y + 5})`} fill={i % 2 ? '#2F6B2A' : '#3E8A35'} />
        ))}
      </g>
    ),
  },
  veggiePatty: {
    h: 18,
    render: (y, k) => (
      <g key={k}>
        <rect x={X0 - 2} y={y} width={X1 - X0 + 4} height={18} rx={9} fill="#7A8F3F" stroke="#55682A" strokeWidth={1.2} />
        {row(13, (cx, i) => (
          <circle key={i} cx={cx} cy={y + 5 + (i % 3) * 4} r={1.6} fill={i % 2 ? '#E2B33E' : '#B8462F'} />
        ))}
      </g>
    ),
  },
  lettuce: {
    h: 8,
    render: (y, k) => <path key={k} d={wavyBand(y, 8, 11, 6, 10)} fill="#8BC461" stroke="#5E9A3A" strokeWidth={1} />,
  },
  tomato: {
    h: 10,
    render: (y, k) => (
      <g key={k}>
        {row(5, (cx, i) => (
          <rect key={i} x={cx - 17} y={y} width={34} height={10} rx={5} fill="#E04A3A" stroke="#B3302A" strokeWidth={1} />
        ))}
      </g>
    ),
  },
  cheese: {
    h: 4,
    render: (y, k) => (
      <g key={k}>
        <rect x={X0} y={y} width={X1 - X0} height={4} fill="#F6C343" />
        {row(5, (cx, i) => (
          <path key={i} d={`M${cx - 11} ${y + 3} L${cx} ${y + 15} L${cx + 11} ${y + 3} Z`} fill="#F6C343" stroke="#D9A21E" strokeWidth={1} strokeLinejoin="round" />
        ))}
      </g>
    ),
  },
  meltedCheese: {
    h: 5,
    render: (y, k) => (
      <path
        key={k}
        d={`M${X0 - 4} ${y} L${X1 + 4} ${y} L${X1 + 4} ${y + 4} ${row(5, (cx, i) => `L${cx + 9} ${y + 4} Q${cx + 4.5} ${y + 16 + (i % 2) * 6} ${cx} ${y + 4}`)
          .reverse()
          .join(' ')} L${X0 - 4} ${y + 4} Z`}
        fill="#F7E2A6"
        stroke="#E2C072"
        strokeWidth={1}
      />
    ),
  },
  butterSauce: {
    h: 3,
    render: (y, k) => (
      <path key={k} d={`M${X0} ${y + 1.5} Q${X0 + 19} ${y - 3} ${X0 + 39} ${y + 2} T${X0 + 78} ${y + 2} T${X0 + 117} ${y + 2} T${X1} ${y + 1}`} stroke="#E07B2B" strokeWidth={5} fill="none" strokeLinecap="round" />
    ),
  },
  ranch: {
    h: 3,
    render: (y, k) => (
      <path key={k} d={`M${X0} ${y + 1.5} Q${X0 + 19} ${y - 3} ${X0 + 39} ${y + 2} T${X0 + 78} ${y + 2} T${X0 + 117} ${y + 2} T${X1} ${y + 1}`} stroke="#FBF6EA" strokeWidth={3.5} fill="none" strokeLinecap="round" />
    ),
  },
};

export default function SubArt({ fillings, className }: { fillings: Filling[]; className?: string }) {
  const BOTTOM_H = 22;
  const TOP_H = 50;
  const stack = fillings.map((f) => layers[f]);
  const fillH = stack.reduce((s, l) => s + l.h, 0);
  const H = TOP_H + fillH + BOTTOM_H + 12;

  // Fillings drawn bottom → top; each layer is drawn over the one beneath it.
  let y = H - BOTTOM_H - 6;
  const drawn = stack.map((l, i) => {
    y -= l.h;
    return { y, node: l };
  });
  const topY = y;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={cn('h-auto w-full overflow-visible', className)} role="img" aria-hidden>
      {/* shadow */}
      <ellipse cx={W / 2} cy={H - 4} rx={86} ry={4} fill="currentColor" opacity={0.08} />
      {/* bottom bun */}
      <path
        d={`M${X0 - 4} ${H - BOTTOM_H - 6} L${X1 + 4} ${H - BOTTOM_H - 6} Q${X1 + 4} ${H - 6} ${X1 - 14} ${H - 6} L${X0 + 14} ${H - 6} Q${X0 - 4} ${H - 6} ${X0 - 4} ${H - BOTTOM_H - 6} Z`}
        fill="#E2A257"
        stroke="#B87A35"
        strokeWidth={1.4}
      />
      <path d={`M${X0 + 2} ${H - BOTTOM_H - 3} L${X1 - 2} ${H - BOTTOM_H - 3}`} stroke="#F6E3C2" strokeWidth={3} strokeLinecap="round" />

      {/* bottom → top, so drips and overhangs of upper layers sit over lower ones */}
      {drawn.map((d, i) => d.node.render(d.y, `${fillings[i]}-${i}`))}

      {/* top bun — lifts a little on hover of a parent .group */}
      <g className="transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
        <path
          d={`M${X0 - 6} ${topY + 1} C${X0 - 6} ${topY - TOP_H + 4} ${X1 + 6} ${topY - TOP_H + 4} ${X1 + 6} ${topY + 1} Z`}
          fill="#E9A752"
          stroke="#B87A35"
          strokeWidth={1.4}
        />
        <path
          d={`M${X0 + 14} ${topY - 20} C${X0 + 30} ${topY - TOP_H + 12} ${X1 - 50} ${topY - TOP_H + 10} ${X1 - 22} ${topY - 22}`}
          stroke="#F5CD8A"
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
          opacity={0.8}
        />
        {[58, 88, 118, 148].map((x) => (
          <path key={x} d={`M${x - 8} ${topY - 26} q8 -7 16 -2`} stroke="#B87A35" strokeWidth={2} fill="none" strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
}
