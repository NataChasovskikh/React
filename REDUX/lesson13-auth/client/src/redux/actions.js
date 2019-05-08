export const actiontypos = {
   SINGUPREQUEST: 'session/SINGUPREQUEST',
   SINGUPSUCCESS: 'session/SINGUPSUCCESS',
   SINGUPERROR: 'session/SINGUPERROR',

   SINGINREQUEST: 'session/SINGINREQUEST',
   SINGINSUCCESS: 'session/SINGINSUCCESS',
   SINGINERROR: 'session/SINGINERROR',

   SINGOUTREQUEST: 'session/SINGOUTREQUEST',
   SINGOUTSUCCESS: 'session/SINGOUTSUCCESS',
   SINGOUTERROR: 'session/SINGOUTERROR'
};


export const  singUpRequest = () =>({
   type: actionTypes.SINGUPREQUEST
});

export const  singUpSuccess = () =>({
   type: actionTypes.SINGUPSUCCESS,
   payload: data
});

export const  singUpError = () =>({
   type: actionTypes.SINGUPERROR,
   payload: { error }
});

export const  singInRequest = () =>({
   type: actionTypes.SINGINREQUEST
});

export const  singInSuccess = () =>({
   type: actionTypes.SINGINSUCCESS,
   payload: data
});

export const  singInError = () =>({
   type: actionTypes.SINGINERROR,
   payload: { error }
});

export const  singOutRequest = () =>({
   type: actionTypes.SINGOUTREQUEST
});

export const  singOutSuccess = () =>({
   type: actionTypes.SINGOUTSUCCESS
});



