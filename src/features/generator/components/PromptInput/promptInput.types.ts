export interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}