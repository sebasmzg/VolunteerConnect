export const FormTitle = ({ title, subtitle }: { title?: string, subtitle?: string}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-sm text-center text-slate-500">{subtitle}</p>
    </div>
  );
};
