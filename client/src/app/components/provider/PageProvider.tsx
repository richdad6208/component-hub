interface PageProviderProps {
  children: React.ReactNode;
}

export default function PageProvider({ children }: PageProviderProps) {
  return <div className="mx-w-7xl mx-auto px-3">{children}</div>;
}
