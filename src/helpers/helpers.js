export const objectToArrayObject = object => Object.entries(object).map(([key, value]) => ({
    ...value,
    key
}))