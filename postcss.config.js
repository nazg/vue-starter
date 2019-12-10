/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const purgecss = require("@fullhuman/postcss-purgecss")
const tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    tailwindcss,
    ...process.env.NODE_ENV === "production" ? [purgecss] : [],
  ],
}
