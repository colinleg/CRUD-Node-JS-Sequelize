import Joi from 'joi'

const cardsValidation = (body) => {

    const CardSchema = Joi.object({
        vi: Joi.string().trim().required(),
        fr: Joi.string().trim().required()
    })

    return CardSchema.validate(body)
}

export default cardsValidation