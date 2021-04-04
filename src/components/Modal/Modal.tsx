import useEventListener from '@use-it/event-listener';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import './Modal.css'
import { FormModels } from 'constants/FormModels';
import {
  IFormField,
  IFormModel,
} from 'domains/FormModels';

interface Props {}

export const Modal: React.FunctionComponent<Props> = () => {
  const history = useHistory()
  const { hash } = useLocation()
  const [content, setContent] = useState<IFormModel>()
  const [form, setForm] = useState<any>()
  const [required, setRequired] = useState<Array<string>>()

  // @ts-ignore
  useEventListener('keydown', ({ key }) => {
    if (hash && key.toLowerCase() === 'escape') {
      history.push('/')
    }
  })

  useEffect(() => {
    const model: IFormModel = FormModels[(hash || '').replace('#', '')]

    if (model) {
      // set content
      setContent(model)
      // create form
      setForm(model.fields
        .reduce((obj, item) => ({
          ...obj,
          [item.name]: form?.[item.name] || ''
        }), {})
      )
      // set required
      setRequired(model.fields
        .filter((field: IFormField) => field.required)
        .map((field: IFormField) => field.name)
      )
    } else if (content) {
      // set required
      setRequired(undefined)
      // remove unshared fields
      content?.fields
        .filter((field: IFormField) => field.shared === 'false')
        .forEach((field: IFormField) => {
          const {[field.name]: deletedField, ...rest } = form
          setForm(rest)
        })
      // set content
      setContent(undefined)
    }
  }, [hash]) //eslint-disable-line

  if (!hash || !content) return <></>

  // @ts-ignore
  const getFormValue = (name: string) => form[name] || ''

  const setFormValue = (name: string, event: any) => {
    setForm({ ...form, [name]: event.currentTarget.value })
  }

  const isEmailValid = () => !form?.email || (form.email.includes('@') && !form.email.endsWith('@'))

  const isFormValid = () => required?.every((field: string) => !!form[field])

  const submit = async () => {
    if (!isFormValid()) return

    const { form: postUrl, to } = content.submit

    const next = () => history.push(to)

    if (postUrl) {
      fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(form)
      }).then(next)
    } else {
      next()
    }

  }

  return (
    <>
      <div className='modal-wrapper'>
        <div className='modal'>
          <Link to='/' className='btn-close' tabIndex={0} role='button'>close</Link>
          <div className='modal-form'>
            <h2 className='modal-title'>{content.title}</h2>
            {content.content.map((paragraph: any, key: number) =>
              <p key={key} className='modal-details' dangerouslySetInnerHTML={{__html: paragraph}} />)
            }
            {content.fields.map((field: any, key: number) =>
              React.createElement(field.type === 'textarea' ? 'textarea' : 'input',
                {
                  key,
                  ...field,
                  className: 'modal-input',
                  value: getFormValue(field.name),
                  onChange: (event: any) => setFormValue(field.name, event)
                })
            )}
            <button
              className={`button full-width upper${isFormValid() && isEmailValid() ? '' : ' disabled'}` }
              onClick={submit}
            >
              {content.submit.text}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}