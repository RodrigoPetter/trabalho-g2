export function getColumnWidth(rows, accessor, headerText) {
    if (rows.length > 0) {
        const maxWidth = 400;
        const magicSpacing = 10;
        const cellLength = Math.max(
            ...rows.map(row => (`${accessor.split('.').reduce((item, a)=>{return item[a] || {};}, row)}` || '').length),
            headerText.length,
        );
        return Math.min(maxWidth, cellLength * magicSpacing);
    }
    return 20;
}