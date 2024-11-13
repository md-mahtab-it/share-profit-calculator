import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function Link({ href, children, icon }: LinkProps) {
  return (
    <a
      href={href}
      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </a>
  );
}