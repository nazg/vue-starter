
module.exports = {
  content: ["./src/**/*.vue"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}
