const loginOptions = {
  id: 'login',
  type: 'email',
  name: 'login',
  autoComplete: 'none',
  label: 'Логин или почта *'
}

const pswOptions = {
  id: 'password',
  name: 'password',
  label: 'Пароль *',
  autoComplete: 'none'
}

export const fieldDefaultProps = {loginOptions, pswOptions}
