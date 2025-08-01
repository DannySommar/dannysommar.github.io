import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

// util func allows to put the inputs in a list of strings instead a giant strig in prder to fit in the editor nicely
// and also fixes specificity clashes
export const cn = (...inputs) => {
    return twMerge(clsx(inputs))
}