// глобаный костыль для старта, чтоб не париться с типами

export declare global {
    type ITimeout = ReturnType<typeof setTimeout> | null
}

// const arrTypes = ['puppa', 'zaluppa', 'main_kamph'] as const
// export type exampleTypes = typeof arrTypes[number]

