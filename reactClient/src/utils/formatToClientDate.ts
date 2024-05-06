export const formatToCLientDate = (date ?:Date) => {
    if(!date) {
        return '';
    }

    return new Date(date).toLocaleDateString();
}