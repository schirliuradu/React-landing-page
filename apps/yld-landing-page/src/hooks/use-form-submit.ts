import { useState, useRef } from 'react';
import { ValidationError, Validator } from '../types/validation';
import axios from 'axios';

type UseFormSubmit = {
  formRef: React.RefObject<HTMLFormElement>;
  errors: ValidationError[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  checkFieldError: (field: string) => boolean;
  isSubmitted: boolean;
};

export const useFormSubmit = (
  validator: Validator,
  endpoint: string
): UseFormSubmit => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    const validationErrors = validator.validate(data);

    if (validationErrors?.length) {
      setErrors(validationErrors);

      return;
    } else {
      setErrors([]);
    }

    void saveUserData(data, setIsSubmitted);
  };

  const checkFieldError = (field: string) => {
    return errors.some((error: ValidationError) => error.field === field);
  };

  return { formRef, errors, handleSubmit, checkFieldError, isSubmitted };
};

const saveUserData = async (
  data: Record<string, string>,
  setIsSubmitted: (isSubmitted: boolean) => void
) => {
  try {
    await axios.post('http://localhost:3000/api/marketing/send-lead/v1', data);

    setIsSubmitted(true);
  } catch (error) {
    console.log(error);
  }
};
