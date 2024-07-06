function indexOfIgnoreCase(str, subStr) {
    // Convert both strings to lowercase for case insensitivity
    const normalizedStr = str.toLowerCase();
    const normalizedSubStr = subStr.toLowerCase();

    // Use indexOf to find the index of normalizedSubStr in normalizedStr
    return normalizedStr.indexOf(normalizedSubStr);
}

