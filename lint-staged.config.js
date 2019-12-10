
module.exports = {
  "*.{js,ts,vue}": [
    "vue-cli-service lint",
  ],
  "*.{md,scss}": [
    "prettier --write",
  ],
}
