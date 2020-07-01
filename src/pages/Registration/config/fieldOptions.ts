const emailOptions = {
  id: 'email',
  name: 'email',
  type: 'email',
  autoComplete: 'none',
  label: 'Почта *'
}

const loginOptions = {
  id: 'login',
  name: 'login',
  type: 'email',
  autoComplete: 'none',
  label: 'Логин'
}

const firstNameOptions = {
  id: 'firstName',
  name: 'firstName',
  type: 'text',
  autoComplete: 'none',
  label: 'Имя *'
}

const lastNameOptions = {
  id: 'lastName',
  name: 'lastName',
  type: 'text',
  autoComplete: 'none',
  label: 'Фамилия'
}

const pswOptions = {
  id: 'password',
  name: 'password',
  label: 'Пароль *',
  autoComplete: 'none'
}

const pswRepeatOptions = {
  id: 'repeatPassword',
  name: 'repeatPassword',
  label: 'Повторите пароль *',
  autoComplete: 'none'
}

export const fieldDefaultProps = {
  emailOptions,
  firstNameOptions,
  lastNameOptions,
  loginOptions,
  pswOptions,
  pswRepeatOptions
}
