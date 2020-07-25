const {parse} = require('querystring')

exports.wejapaFormData = (req, res) => {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(req.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            res(parse(body));
        });
    }
    else {
        res(null);
    }
}