import Joi from "joi";

export const schema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
