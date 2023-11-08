const users = require('../Models/users')

exports.getUsers = async (req, res) => {
    try {
        const response = await users.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
exports.createUser = async (req, res) => {
    const { email , password } = req.body;
    const userExist = await users.findOne({ email });
    try {
        const newUser = new users({
            email,
            password
        });
        if(userExist){
           return res.status(500).json({ message: "esse email já esta cadastrado no nosso banco de dados!" })
        }
        await newUser.save();
        res.status(200).json({ message: 'O usuario foi criado', User: newUser })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    try {
        const updateUser = await users.findByIdAndUpdate(id ,{ email, password }, { new: true });
        res.status(200).json({ message: 'O usuario foi atualizado com sucesso!', updateUser: updateUser })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await users.findByIdAndDelete(id)
        if(!deleteUser){
            return res.status(404).json({ message: "usuario não encontrado" })
        }
        res.status(200).json({ message: "O usuario foi removido", deleteUser: deleteUser });
    } catch (error) {
        res.status(500).json({ message : "Não foi possivel executar essa aplicação"})
    }
}
