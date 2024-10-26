export type ToastProps = {
    onOpen: boolean,
    onClose: (e?: MouseEvent | KeyboardEvent | undefined) => void
    courseTitle: string,
}