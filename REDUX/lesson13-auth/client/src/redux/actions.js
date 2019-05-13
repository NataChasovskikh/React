export const actionTypes = {
   SIGNUPREQUEST: 'session/SIGNUPREQUEST',
   SIGNUPSUCCESS: 'session/SIGNUPSUCCESS',
   SIGNUPERROR: 'session/SIGNUPERROR',

   SIGNINREQUEST: 'session/SIGNINREQUEST',
   SIGNINSUCCESS: 'session/SIGNINSUCCESS',
   SIGNINERROR: 'session/SIGNINERROR',

   SIGNOUTREQUEST: 'session/SIGNOUTREQUEST',
   SIGNOUTSUCCESS: 'session/SIGNOUTSUCCESS',
   SIGNOUTERROR: 'session/SIGNOUTERROR',

   REFRESHCURRENTUSERSTART: 'session/REFRESHCURRENTUSERSTART',
   REFRESHCURRENTUSERSUCCESS: 'session/REFRESHCURRENTUSERSUCCESS'

};

export const refreshUserStart = () => ({
   type: actionTypes.REFRESHCURRENTUSERSTART
});
 
export const refreshUserSuccess = user => ({
   type: actionTypes.REFRESHCURRENTUSERSUCCESS,
   payload: { user }
});

export const  signUpRequest = () =>({
   type: actionTypes.SIGNUPREQUEST
});

export const  signUpSuccess = (data) =>({
   type: actionTypes.SIGNUPSUCCESS,
   payload: data
});

export const  signUpError = (error) =>({
   type: actionTypes.SIGNUPERROR,
   payload: { error }
});

export const  signInRequest = () =>({
   type: actionTypes.SIGNINREQUEST
});

export const  signInSuccess = (data)=>({
   type: actionTypes.SIGNINSUCCESS,
   payload: data
});

export const  signInError = (error) =>({
   type: actionTypes.SIGNINERROR,
   payload: { error }
});

export const  signOutRequest = () =>({
   type: actionTypes.SIGNOUTREQUEST
});

export const  signOutSuccess = () =>({
   type: actionTypes.SIGNOUTSUCCESS
});



