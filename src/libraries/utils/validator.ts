import { ZodError } from "zod";
import type { ZodType } from "zod";

type Field = {
    name: string;
    value: any;
    schema: ZodType;
}

type Error = {
    field: Field;
    error: string;
}

type Validator = {
    errors: Error[];
    valid: boolean;
}

export const validate = async (fields: Field[]): Promise<Validator> => {
    let errors: Error[] = [];
    for (const field of fields) {
        try {
            await field.schema.parseAsync(field.value);
        } catch (err) {
            if (!(err instanceof ZodError)) continue;
            errors = [...errors, { field, error: err.message }]
        }
    }

    return {
        valid: errors.length === 0,
        errors
    };
}