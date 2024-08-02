module.exports = {
  // Currently we are using this section for excluding certain files from certain rules.
  overrides: [
    {
      files: [
        ".eslintrc.cjs",
        ".prettierrc.js",
        "*.json"
      ],
      rules: {
        "import/order": "off",
        "react-hooks/rules-of-hooks": "off"
      }
    },
    {
      files: [
        "*.js", "*.jsx"  // Specify the files to which you want to apply this rule
      ],
      rules: {
        "no-redeclare": "off"
      }
    }
  ]
};
