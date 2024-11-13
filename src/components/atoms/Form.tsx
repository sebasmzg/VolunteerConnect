interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}  

export const Form = ({children,onSubmit, ...props}:FormProps) => {
    return (
        <form className="w-full max-w-sm mx-auto p-1 space-y-4" onSubmit={(event) => {
            event.preventDefault(); 
            if (onSubmit) onSubmit(event);
        }}
        {...props}>
            {children}
        </form>
    )
}