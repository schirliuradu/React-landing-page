export interface ValidationError {
  field: string;
  message: string;
}

export interface FieldValidator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (value: any) => string | null;
}

export interface Validator {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validate: (data: Record<string, any>) => ValidationError[] | null;
}
