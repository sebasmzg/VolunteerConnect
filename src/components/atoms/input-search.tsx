interface InputSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch = ({ value, onChange }: InputSearchProps) => {
  return (
    <input
      type="text"
      placeholder="Buscar proyectos..."
      className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
      value={value}
      onChange={onChange}
    />
  );
};
