const Anime = require('../Models/animes')

exports.read = async(req, res) => {
    try {
        const animes = await Anime.find();
        res.status(200).json(animes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.readId = async(req, res) => {
    const id = req.params.id;
    try {
        const animes = await Anime.findOne({_id: id});
        if(!animes){
            return res.status(422).json({ message: "Anime não encontrado!" });
        }
        res.json(animes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async(req, res) => {
    const { name, url_image } = req.body;
    
    if (!name || !url_image) {
        return res.status(422).json({ error: 'O nome e a url_image são obrigatórios!' });
    }
    
    try {
        // Create a new anime in database
        const newAnime = new Anime({
            name,
            url_image
        });
        await newAnime.save();
        res.status(201).json({ message: 'Anime criado com sucesso', anime: newAnime });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async(req, res) => {
    const id = req.params.id;
    const { name, url_image } = req.body;

    try {
        const anime = await Anime.findByIdAndUpdate(id, { name, url_image }, { new: true });
        if(!anime){
            return res.status(404).json({ error: 'registro nao encontrado '});
        }
        res.status(200).json(anime);
    } catch (error) {
        res.status(500).json({ message: 'Anime não encontrado!' });
    }
};

exports.delete = async(req, res) => {
    const id = req.params.id;
    try {
        const animeDelete = await Anime.findByIdAndRemove(id);
        if(!animeDelete){
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }
        res.status(200).json({ message: "Anime foi removido", data : animeDelete });
    } catch (err) {
        res.status(500).json({ error: err});
    }
};