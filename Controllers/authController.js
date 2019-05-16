// const user = req.session.user;

exports.login = (req, res) => {
    let errors = req.session.errors ? req.session.errors : '';
    const user = req.session.user;
    res.render('auth/login', {
        title: 'Task Manager',
        errors,
        user
    })
}

exports.loginPost = (req, res) => {
    let { username, password } = req.body;
    let errors = {}
    if( username === 'admin' && password === 'password'){
        req.session.user = username;
        res.redirect('/tasks/tasklist');
    }else{
        errors.global = `Inavlid Credentials`;
        req.session.errors = errors;
        res.redirect('/login');
    }
}

exports.logout = (req, res) => {
    req.session.user = null;
    res.redirect('./login');
} 