const ScrollArea = ({ children, className }: any) => {
  return <div className={`overflow-x-auto ${className}`}>{children}</div>;
};

const ScrollBar = () => null;

export { ScrollArea, ScrollBar };
