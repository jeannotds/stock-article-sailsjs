/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
  friendlyName: "Add article",

  description: "",

  inputs: {
    title: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
      required: true,
    },
  },

  exits: {
    badRequest: {
      description: "No title git.",
      responseType: "badRequest",
    },
  },

  fn: async function (inputs, exits) {
    if (!inputs.title) {
      throw "badRequest";
    }

    var createArticle = await Article.create({
      title: inputs.title,
      desc: inputs.desc,
    }).fetch();

    console.log("createArticle : ", createArticle);

    return exits.success({ createArticle });
  },
};
