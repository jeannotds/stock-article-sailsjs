/* eslint-disable quotes */
parasails.registerPage("add", {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    syncing: false,
    articles: [],
    //…
    dataArticle: {},
    // data: {},
    formErrors: {},

    formRules: {
      title: {
        required: true,
      },
      desc: {
        required: true,
      },
    },

    cloudError: "",

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {},
  mounted: async function () {},

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    //…
    dataArticleSubmit: function () {
      this.syncing = true;
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
