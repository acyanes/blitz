function argsToMessage(...args) {
    return args.map((arg) => JSON.stringify(arg)).join(" ");
}

export function createConsole(core) {
    return {
        log: (...args) => {
            core.print(`[out]: ${argsToMessage(...args)}\n`, false);
        },
        error: (...args) => {
            core.print(`[err]: ${argsToMessage(...args)}\n`, true);
        },
    }
}