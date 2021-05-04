export interface IFormField {
  textarea: boolean
  type: string
  name: string
  placeholder: string
  required: boolean
}

export interface IFormFields extends Array<IFormField> {}

export interface IFormModel {
  title: string
  submit: {
    form?: string
    text: string
  }
  content: Array<string>
  thanksContent: Array<string>
  fields: IFormFields
}

export interface IFormModels {
  [key: string]: IFormModel
}
