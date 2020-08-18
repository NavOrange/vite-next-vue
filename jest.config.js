module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    "^/src/(.*)$": "<rootDir>/src/$1",
  },
};
