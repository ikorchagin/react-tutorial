export const required = (value) => {
  if (!value) {
    return "field is required";
  }
  return undefined;
};

const maxLengthCreator = (length) => (value) => {
  if (value.length >= length) {
    return `max length is ${length}`;
  }
  return undefined;
};

export const maxLength300 = maxLengthCreator(300);

export const maxLength50 = maxLengthCreator(50);
