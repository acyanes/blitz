export function createFetch(ops) {
    return (url) => {
        return ops.op_fetch(url);
    }
}