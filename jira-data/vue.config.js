module.exports = {
  devServer: {
    liveReload: false,
    hot: true,
    port: 4200,
    proxy: "https://jira.icellmobilsoft.hu",
    // proxy: "https://gabesztx.atlassian.net",
  },
};
