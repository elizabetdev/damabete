export const Badge = ({ children, className }) => {
  return (
    <span
      className={`bg-zinc-100 text-zinc-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-zinc-700 dark:text-zinc-300 ${className}`}
    >
      {children}
    </span>
  );
};
