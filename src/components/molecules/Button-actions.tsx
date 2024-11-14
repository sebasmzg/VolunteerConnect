export const ButtonActions = () => {
  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="flex justify-center gap-2">
      <button
        onClick={handleEdit}
        className="text-slate-900 border border-slate-200 rounded-lg p-1 font-medium hover:bg-slate-200"
      >
        Editar
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white rounded-lg p-1 font-medium hover:bg-red-600"
      >
        Eliminar
      </button>
    </div>
  );
};
