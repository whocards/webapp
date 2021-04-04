export interface IFormField {
  type: string;
  name: string;
  placeholder: string;
  required?: boolean;
  shared: 'true' | 'false';
}

export interface IFormFields extends Array<IFormField> {}

export interface IFormModel {
  title: string;
  submit: {
    form?: string;
    text: string;
    to: string;
  };
  content: Array<string>;
  fields: IFormFields;
}

export interface IFormModels {
  [ key: string ]: IFormModel
}