export const toSentenceCase = (str: string): string => {
    if (!str) return "";
    const lowerCased = str.toLowerCase();
    return lowerCased.charAt(0).toUpperCase() + lowerCased.slice(1);
};