export const ButtonSubmit = ({ title, ...props }: { title: string }) => {
    return (
      <button
        type="submit"
        className="w-full py-2 px-4 bg-slate-900 text-white rounded-lg font-medium hover:shadow-md hover:scale-105 transition-all duration-300"
      >
        {title}
      </button>
    );
  };
  