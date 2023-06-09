import { Label, Input } from '@/atoms/input';
import { FormFieldContainer } from './style';
import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  sizeInput?: 'sm' | 'md' | 'lg';
  type: string;
  placeHolder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({
  label,
  type,
  value,
  onChange,
  sizeInput,
  placeHolder
}: Props) {
  return (
    <FormFieldContainer>
      <Label sizeInput="md">{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        sizeInput={sizeInput ?? 'md'}
        placeholder={placeHolder}
      />
    </FormFieldContainer>
  );
}
