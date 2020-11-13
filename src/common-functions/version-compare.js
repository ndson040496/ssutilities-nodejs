function compareVersions(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');

    const len = v1.length > v2.length ? v2.length : v1.length;

    for (let i = 0; i < len; i++) {
        const seg1 = parseInt(v1[i]);
        const seg2 = parseInt(v2[i]);

        if (seg1 > seg2) {
            return 1;
        } else if (seg1 < seg2) {
            return -1
        }
    }

    if (v1.length > v2.length) {
        return 1
    } else if (v1.length < v2.length) {
        return -1
    }

    return 0;
}

module.exports = compareVersions;
