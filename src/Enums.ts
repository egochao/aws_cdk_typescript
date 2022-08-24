enum AuthError {
    WRONG_CREDENTIALS,
    SERVER_FAIL,
    EXPIRED_SESSION,
    UNEXPECTED_ERROR
}


console.log(AuthError[AuthError.WRONG_CREDENTIALS]);


enum AuthError2 {
    WRONG_CREDENTIALS = 'wrong cred',
    SERVER_FAIL = 'server failed',
    EXPIRED_SESSION = 'session expired',
}

function handleErrors(error: AuthError) {
    switch (error) {
        case AuthError.EXPIRED_SESSION:
            console.log('session expired');
            break;
        case AuthError.SERVER_FAIL:
            console.log('server failed');
            break;
        case AuthError.WRONG_CREDENTIALS:
        case AuthError.UNEXPECTED_ERROR:
            console.log('unexpected error');
            break;
        default:
            break;
    }
}


handleErrors(AuthError.EXPIRED_SESSION);