module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    url: env('STRAPI_ADMIN_URL'),
  },
  app: {
    keys: env.array("APP_KEYS"),
  },
  dirs: {
    public: "",
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
