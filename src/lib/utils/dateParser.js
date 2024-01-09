/**
 * @param {string | number | Date} dateStr
 */
export function formatDate(dateStr) {
    if (!dateStr) return '';

    const date = dateStr instanceof Date ? dateStr : new Date(dateStr);

    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
