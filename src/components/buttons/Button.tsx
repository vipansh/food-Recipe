interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  className?: string
  secondary?: true
}
const Button = ({
  label,
  className,
  children,
  secondary,
  ...rest
}: ButtonProps) => {
  if (secondary) {
    return (
      <button
        className={
          'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' +
          className
        }
        {...rest}
      >
        {label}
        {children}
      </button>
    )
  }
  return (
    <button
      className={
        'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm' +
        className
      }
      {...rest}
    >
      {label}
      {children}
    </button>
  )
}
export default Button
