import { IFormFields, IFormModels } from 'domains/FormModels'
import Routes from './Routes'

export const sharedFields: IFormFields = [
  {
    textarea: false,
    type: 'text',
    name: 'name',
    placeholder: 'Name (optional)',
    required: false,
  },
  {
    textarea: false,
    type: 'email',
    name: 'email',
    placeholder: 'Email (optional)',
    required: false,
  },
  {
    textarea: false,
    type: 'text',
    name: 'bot-field',
    placeholder: 'field',
    required: false,
  },
]

export const BackButton: string = 'back to the questions'

export const FormModels: IFormModels = {
  question: {
    title: 'Add your question!',
    submit: {
      form: Routes.question,
      text: 'send us your question',
    },
    content: [
      'We believe in community and want to know what questions you want to know from those close to you, to make you closer!',
      'We’ll ask the question to ourselves and if we love it too, we’ll add it!',
    ],
    thanksContent: ['Thanks for sharing your question!', '**We <3 you**'],
    fields: [
      ...sharedFields,
      {
        textarea: true,
        type: 'textarea',
        name: 'question',
        placeholder: 'Question',
        required: true,
      },
    ],
  },
  donate: {
    title: 'Donate',
    submit: {
      form: Routes.donate,
      text: 'send',
    },
    content: [
      'Thanks for clicking donate!',
      'We’re yet to implement this feature, but since you’re here…',
      '**Why did you click it?**',
    ],
    thanksContent: [
      'Oh, cool, thanks!',
      "We're testing this button for now, soon you might be able to use it ;)",
    ],
    fields: [
      ...sharedFields,
      {
        textarea: true,
        type: 'textarea',
        name: 'why',
        placeholder: 'Why did you click donate?',
        required: true,
      },
    ],
  },
}
