/* eslint-disable no-undef */
/* eslint-disable quotes */
module.exports = {
  friendlyName: "View article",

  description: 'Display "Article" page.',

  exits: {
    success: {
      viewTemplatePath: "pages/article/article",
    },
  },

  fn: async function (inputs, exits) {
    var articles = await Article.find();

    console.log("articles : ", articles);

    return exits.success({ articles });
  },
};
