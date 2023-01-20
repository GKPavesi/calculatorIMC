export const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add("open");
        AlertError.element.classList.remove("close");
    },
    close() {
        AlertError.element.classList.add("close");
        AlertError.element.classList.remove("open");
    },
}