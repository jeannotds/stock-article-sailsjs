/* eslint-disable quotes */
parasails.registerPage("add", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    syncing: false,
    articles: [],
    //…
    dataArticle: { },
    // data: {},
    formErrors: {},

    formRules: {
      title: {
        required: true,
      },
      desc: {
        required: true,
      }
    },

    cloudError: "",

    // cloudSuccess: false,
  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
    dataArticleSubmit: function (result) {
      this.syncing = true;
      // event.preventDefault();
      // var newItem = _.extend(result, {
      //   title: this.dataArticle.title,
      //   desc: this.dataArticle.desc,
      // });

      // this.articles.unshift(newItem);
      // console.log(this.articles);
    },

    handleParsingForm: function () {
      this.formErrors = {};
      var argins = this.dataArticle;
      if (!argins.title) {
        this.formErrors.title = true;
      }
      if (!argins.desc) {
        this.formErrors.desc = true;
      }
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }
      return true;
    },
  },
});
