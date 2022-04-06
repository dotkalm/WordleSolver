export function isType<T>(value: T | undefined | unknown): value is T {
	return value !== undefined;
}
