export const range = (n: number) => {
    return Array.from({ length: n }, (_, i) => i);
};

export const batch = <T>(arr: T[], n: number) => {
    if (arr.length === 0) {
        return [];
    } else {
        return range(Math.ceil(arr.length / n)).map((i) =>
            range(Math.min(n, arr.length - i * n)).map((j) => arr[i * n + j]),
        );
    }
};
