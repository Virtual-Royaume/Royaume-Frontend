export type FormContext = {
  register: (fn: () => string | null) => void;
  unregister: (fn: () => string | null) => void;
  validate: () => boolean;
};