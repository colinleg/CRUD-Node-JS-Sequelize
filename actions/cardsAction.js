import cards from '../domain/cardsDomain.js'
import cardsValidation from '../validations/cardsValidation.js';

const getAll = (req, res) => {
    cards.findAll()
        .then( cards => {
            res.status(200).json(cards)
        })
        .catch(e => res.status(500).json(e))
};

const getOne = (req, res) => {

};

const createOne = (req, res) => {
    let {body} = req

    let {error} = cardsValidation(body)
    if(error){ return res.status(401).json(error.details[0].message) }

    cards.create({ ...body})
        .then(res.status(201).json({message: "carte crée !"})
        .catch( (e) => { res.status(500).json(e) } ))

    // else {
    //     res.status(201).send('Card created !')
    // }
};

const updateOne = (req, res) => {};

const deleteOne = (req, res) => {};

export {getAll, getOne, createOne, updateOne, deleteOne };