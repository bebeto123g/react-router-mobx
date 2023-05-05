import { IActionBarModel } from 'Common'
import { ETodoQueryFilterAction } from './enums'

export const TODO_QUERY_ACTIONS_MODEL: IActionBarModel<ETodoQueryFilterAction>[] = [
    { label: 'Все', value: ETodoQueryFilterAction.ALL },
    { label: 'Выполнено', value: ETodoQueryFilterAction.COMPLETED },
    { label: 'В работе', value: ETodoQueryFilterAction.NOT_COMPLETED },
]