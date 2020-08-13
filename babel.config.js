module.exports = api => {
  var isTest = api.cache(() => process.env.NODE_ENV) === 'test';
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      [
        'module-resolver',
        {
          root: ['src'],
          extensions: ['.ts', '.tsx', '.js'],
        },
      ],
    ],
  };
};
