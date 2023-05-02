// 在.babelrc 中添加配置
module.exports = {
    plugins: [
      [
        'import',
        {
          libraryName: 'react-vant',
          libraryDirectory: 'es',
          style: false,
        },
      ],
    ],
  };