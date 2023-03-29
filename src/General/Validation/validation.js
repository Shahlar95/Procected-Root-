import {object,string} from 'yup';

export const formVal = object({
    name: string().required("Cell is empty"),
    password:string().required("Cell is empty")
})

