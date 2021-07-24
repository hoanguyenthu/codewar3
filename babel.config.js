module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '^@app/(.+)': './src/\\1',
          '^@components/(.+)': './src/components/\\1',
          '^@constants/(.+)': './src/constants/\\1',
          '^@styles/(.+)': './src/styles/\\1',
          '^@providers/(.+)': './src/providers/\\1',
          '^@libs/(.+)': './src/libs/\\1',
          '^@screens/(.+)': './src/screens/\\1',
		  '^@utils/(.+)': './src/utils/\\1',
		  '^@mock/(.+)': './_mock_/\\1',
        },
      },
    ],
  ],
};