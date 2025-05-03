const Button = ({ children, asChild, className, ...props }) => {
  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp
      className={`
        inline-flex items-center justify-center rounded-md text-sm font-medium
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50
        disabled:pointer-events-none ring-offset-background
        bg-[#4A4A4A] text-white hover:bg-gray-700
        px-4 py-2 ${className}`}
      {...props}
    >
      {children}
    </Comp>
  );
};

export default Button;