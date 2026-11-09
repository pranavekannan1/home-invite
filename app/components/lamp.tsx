import type { ReactNode } from 'react';

export default function Lamp({ children }: { children: ReactNode }) {
  return <div className="relative isolate">{children}</div>;
}
