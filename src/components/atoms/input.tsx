interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string;
}

export const Input = ({
  placeholder,
  type,
  name,
  error,
  ...props
}: InputProps) => {
  return (
    <div className="flex items-center">
      <input type={type} name={name} placeholder={placeholder} className={`w-full p-2 border  ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
        {...props}/>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
