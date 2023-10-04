const userModel = require('../model/user');

module.exports = {
    addUser: addUser,
    editUser: editUser,
    getUser: getUser,
    deleteUser: deleteUser,
    getAllUsers: getAllUsers
}


function addUser(req, res) {
    try {
        if (req.body) {
            let obj = req.body;

            if (req.files) {
                const image = req.files.profileImg;
                console.log(__dirname, '__dirname', req.body, req.files);
                const fileName = 'images/' + image.name.split(' ').join('-');
                image.mv(__dirname + '/../../public/' + fileName, function (err, imageRes) {
                    if (err) {
                        res.jsonp({
                            status: false,
                            msg: err
                        });
                    } else {
                        obj.profileImg = `http://localhost:3000/${fileName}`;
                        console.log(obj, 'objobjobjobj');
                        userModel.findOne({ email: obj.email }, (err, result) => {
                            if (!result) {
                                userModel(obj).save((err, result) => {
                                    if (result)
                                        res.jsonp({
                                            status: true,
                                            data: result,
                                            msg: 'User added successfully'
                                        });
                                    else
                                        res.jsonp({
                                            status: false,
                                            msg: 'Something went wrong!'
                                        });
                                    console.log(result, 'resultresultresultresult');
                                });
                            } else {
                                res.jsonp({
                                    status: false,
                                    msg: 'Email already exists!'
                                });
                            }
                        });
                    }
                });
            } else {
                res.jsonp({
                    status: false,
                    msg: 'Add profile image!'
                });
            }
        } else
            res.jsonp({
                status: false,
                msg: 'Fields req!'
            });
    } catch (error) {
        console.log(error, 'errorerrorerror');
    }
}

function editUser(req, res) {
    try {
        if (req.body) {
            const id = req.params.id;
            let obj = req.body;

            if (req.files) {
                const image = req.files.profileImg;
                console.log(__dirname, '__dirname', req.body, req.files);
                const fileName = 'images/' + image.name.split(' ').join('-');
                image.mv(__dirname + '/../../public/' + fileName, function (err, imageRes) {
                    if (err) {
                        res.jsonp({
                            status: false,
                            msg: err
                        });
                    } else {
                        obj.profileImg = `http://localhost:3000/${fileName}`;
                        console.log(obj, 'objobjo555bjobj');
                        userModel.findByIdAndUpdate(id, obj, (err, result) => {
                            if (result)
                                res.jsonp({
                                    status: true,
                                    data: result,
                                    msg: 'User updated successfully'
                                });
                            else {
                                console.log(err, 'errerrerr');
                                res.jsonp({
                                    status: false,
                                    msg: 'Something went wrong!'
                                });

                            }
                        });

                    }
                });
            } else {
                console.log(obj, 'objobjo555bjobj');
                userModel.findByIdAndUpdate(id, obj, (err, result) => {
                    if (result)
                        res.jsonp({
                            status: true,
                            data: result,
                            msg: 'User updated successfully'
                        });
                    else {
                        console.log(err, 'errerrerr');
                        res.jsonp({
                            status: false,
                            msg: 'Something went wrong!'
                        });

                    }
                });
            }
        } else {
            res.jsonp({
                status: false,
                msg: 'Fields req!'
            });
        }
    } catch (error) {
        console.log(error, 'errorerrorerror');
    }
}

function getUser(req, res) {
    try {
        if (req.body) {
            const id = req.params.id;
            userModel.findById(id, (err, result) => {
                if (result)
                    res.jsonp({
                        status: true,
                        data: result,
                        msg: 'User fetched successfully'
                    });
                else
                    res.jsonp({
                        status: false,
                        msg: 'Something went wrong!'
                    });
            });
        } else {
            res.jsonp({
                status: false,
                msg: 'Something went wrong!'
            });
        }
    } catch (error) {
        console.log(error, 'errorerrorerror');
    }
}

function deleteUser(req, res) {
    try {
        if (req.body) {
            const id = req.params.id;
            const obj = req.body;
            userModel.findByIdAndRemove(id, obj, (err, result) => {
                if (result)
                    res.jsonp({
                        status: true,
                        data: result,
                        msg: 'User delete successfully'
                    });
                else
                    res.jsonp({
                        status: false,
                        msg: 'Something went wrong!'
                    });
            });
        } else {
            res.jsonp({
                status: false,
                msg: 'Something went wrong!'
            });
        }
    } catch (error) {
        console.log(error, 'errorerrorerror');
    }
}

function getAllUsers(req, res) {
    try {
        if (req.body) {
            const obj = req.body;
            userModel.find(obj, (err, result) => {
                if (result)
                    res.jsonp({
                        status: true,
                        data: result,
                        msg: 'User added successfully'
                    });
                else
                    res.jsonp({
                        status: false,
                        msg: 'Something went wrong!'
                    });
            });
        } else {
            res.jsonp({
                status: false,
                msg: 'Something went wrong!'
            });
        }
    } catch (error) {
        console.log(error, 'errorerrorerror');
    }
}
