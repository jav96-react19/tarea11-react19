export const handleSubmit = (e: React.FormEvent<HTMLFormElement>, setShowToast: (value: boolean) => void ) => {
    e.preventDefault();
    setShowToast(true);
}