import {fbScopeImg, fbScopeUser} from '../config'

export async function fbMeUser() {
  try {
    return new Promise((resolve) => {
      FB.api('/me', fbScopeUser, (responseMeData) => {
        resolve(responseMeData)
      })
    })
  } catch (error) {
    console.error('fbMeUser', error)
  }
}

export async function fbSignIn() {
  try {
    return new Promise((resolve) => {
      FB.login((response) => {
        if (response.status === 'connected') {
          resolve(response.status)
        }
      })
    })
  } catch (error) {
    console.error('fbSignIn', error)
  }
}

export async function fbMePhoto() {
  try {
    return new Promise((resolve) => {
      FB.api('/me/picture', fbScopeImg, function (response) {
        resolve(response)
      })
    })
  } catch (error) {
    console.error('fbMePhoto', error)
  }
}

export async function fbMeLogOut() {
  try {
    return new Promise((resolve) => {
      FB.logout(function (response) {
        resolve(response)
      })
    })
  } catch (error) {
    console.error('fbMeLogOut', error)
  }
}

export async function fbCheckLogin() {
  try {
    return new Promise((resolve) => {
      FB.getLoginStatus((response) => {
        resolve(response.status)
      })
    })
  } catch (error) {
    console.error('fbCheckLogin', error)
  }
}
