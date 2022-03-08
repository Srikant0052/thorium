

const mid1 = function (req, res, next) {
    let input = req.headers.isfreeappuser;
    if (!input) {
        res.send("The request is missing a mandatory header")
    } else {
        next();
    }
}

module.exports.mid1 = mid1;