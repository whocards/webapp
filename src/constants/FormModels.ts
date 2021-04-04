import {
  IFormFields,
  IFormModels,
} from '../domains/FormModels';
import {
  API_URLS,
  HASH_ROUTES,
} from './Routes';

const titles = {
  add: 'Add your question!',
  donate: 'Donate'
}

const backButton = {
  text: 'back to the questions',
  to: '',
}


export const sharedFields: IFormFields = [
  { type: 'text', name: 'name', placeholder: 'Name (optional)', shared: 'true' },
  { type: 'email', name: 'email', placeholder: 'Email (optional)', shared: 'true' },
]

export const FormModels: IFormModels = {
  'add-question': {
    title: titles.add,
    submit: {
      form: API_URLS.question,
      text: 'send us your question',
      to: '#' + HASH_ROUTES.thanksAdd,
    },
    content: [
      'We believe in community and want to know what questions you want to know from those close to you, to make you closer!',
      'We’ll ask the question to ourselves and if we love it too, we’ll add it!',
    ],
    fields: [
      ...sharedFields,
      { type: 'textarea', name: 'question', placeholder: 'Question', required: true, shared: 'false' },
    ],
  },
  donate: {
    title: titles.donate,
    submit: {
      form: API_URLS.donate,
      text: 'send',
      to: '#' + HASH_ROUTES.thanksAdd,
    },
    content: [
      'Thanks for clicking donate!',
      'We’re yet to implement this feature, but since you’re here…',
      '<b>Why did you click it?</b>',
    ],
    fields: [
      ...sharedFields,
      { type: 'textarea', name: 'why', placeholder: 'Why did you click donate?', required: true, shared: 'false' },
    ],
  },
  'thanks-donate': {
    title: titles.add,
    content: [
      'Oh, cool, thanks!',
      'We\'re testing this button for now, soon you might be able to use it ;)'
    ],
    submit: backButton,
    fields: [],
  },
  'thanks-add': {
    title: titles.donate,
    content: [
      'Thanks for sharing your question!',
      '<b>We <3 you</b>'
    ],
    submit: backButton,
    fields: [],
  },
}