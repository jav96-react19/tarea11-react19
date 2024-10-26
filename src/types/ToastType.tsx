export type ToastProps = {
    onOpen: boolean,
    onClose?: (e?: React.MouseEvent | React.KeyboardEvent) => void
    courseTitle: string,
}