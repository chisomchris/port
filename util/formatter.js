export const removeSpace = ( text ) => {
    const t1 = text.trim() || ''
    return t1.replace(/ +/g, '-');
}