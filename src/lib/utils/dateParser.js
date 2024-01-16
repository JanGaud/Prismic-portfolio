/**
 * @param {string | number | Date} dateStr
 */
export function formatDate(dateStr) {
    if (!dateStr) return '';

    const date = dateStr instanceof Date ? dateStr : new Date(dateStr);

    return date.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
}
