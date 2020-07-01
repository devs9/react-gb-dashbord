const addScript = (id: string, src: string) =>
  new Promise((resolve, reject) => {
    const element = document.getElementById(id)

    if (element) {
      return resolve(true)
    }

    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('id', id)
    script.setAttribute('src', src)
    script.addEventListener('load', resolve)
    script.addEventListener('error', () => reject(new Error(`Error loading ${id}.`)))
    script.addEventListener('abort', () => reject(new Error(`${id}  loading aborted.`)))
    document.getElementsByTagName('head')[0].appendChild(script)
  })

/**
 * Socials auth script
 */
export const addGoogleScript = async () => {
  const id = 'googleAuth'
  const src = '//apis.google.com/js/client:platform.js'

  await addScript(id, src)

  gapi.load('auth2', () => {
    if (!gapi.auth2.getAuthInstance()) {
      gapi.auth2.init({client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID})
    }
  })
}

// export const addFacebookScript = async () => {
//   const id = 'facebookAuth'
//   const src = 'https://connect.facebook.net/en_US/sdk.js'
//
//   return await addScript(id, src)
// }
