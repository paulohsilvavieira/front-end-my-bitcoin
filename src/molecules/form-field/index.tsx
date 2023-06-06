import { Label, Input } from '@/atoms/input';
import { FormFieldContainer } from './style';
import { ChangeEvent } from 'react';

interface Props {
  label?: string;
  sizeInput?: 'sm' | 'md' | 'lg';
  type: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormField({ label, type, value, onChange, sizeInput }: Props) {
  return (
    <FormFieldContainer>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        sizeInput={sizeInput ?? 'md'}
      />
    </FormFieldContainer>
  );
}
