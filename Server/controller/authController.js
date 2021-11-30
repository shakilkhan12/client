const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require("../Model/authModel");
// register api
exports.register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const checkUser = await authModel.findOne({ email });
		if (checkUser) {
			return res
				.status(400)
				.json({ errors: 'Email is already exist' });
		} else {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);
        try {
            const user = await authModel.create({name,email, password: hash});
            return res.status(200).json({msg: 'Your accout has been created!'})
        } catch (error) {
            console.log(error)
        }
        }
    } catch (error) {
        console.log(error);
    }
}

// login api
exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await authModel.findOne({ email });
        if(user) {
            const matched = await bcrypt.compare(password, user.password);
			if (matched) {
				const token = jwt.sign({user},'MY_JWT_SECRET', {
                    expiresIn: '7d',
                })
				return res
					.status(200)
					.json({ msg: 'You have login successfully', token });
			} else {
				return res
					.status(401)
					.json({ msg: 'Password is not correct' });
			}
        } else {
            return res.status(404).json({msg: 'email not found'})
        }
    } catch (error) {
        console.log(error)
    }
}
