#### 按照网上配置eslint

#### 按照element-ui配置.babelrc 同时将.babelrc的内容复制一份到babel.config.js，因为看到了相同的配置方式

#### 由于报错，网上搜索https://blog.csdn.net/hahahhahahahha123456/article/details/102816457，得到解决方法
1. npm i @babel/preset-env -D 安装这个包
2. 将.babelrc 或者 babel.config.js （其实有了babel.config.js 就不需要.babelrc 文件了）
   1. 
    {
      "presets": [["@babel/preset-env", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
      <!-- ————————————————
      版权声明：本文为CSDN博主「I-T枭」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
      原文链接：https://blog.csdn.net/hahahhahahahha123456/java/article/details/102816457 -->

#### 有个需求，使用elementui的下拉框，
1. options里面包含有全选的选项，选中后选中所有
2. 可以取消全选
3. 选中所有的其他选项时需要全选选项至亮