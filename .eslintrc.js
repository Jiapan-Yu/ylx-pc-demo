module.exports = {
  "extends": "react-app",
  "globals": {
    "memberBaseUrl": true,
    "trainBaseUrl": true,
    "flightBaseUrl": true,
    "tourBaseUrl": true,
    "payBaseUrl": true,
  },
  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  */
  "rules": {
    // tab缩进
    "indent": [2, "tab", { "SwitchCase": 1 }],
    // 如果一个变量不会被重新赋值，最好使用const进行声明。
    // 'prefer-const': 2,
    // // 在冒号后要加上空格
    // "key-spacing": ["error", { "beforeColon": false }],
    // 不允许使用var
    "no-var": 2,
    // "no-console": 1,
    // "no-alert": 1,
    // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [2, "never"],
    // 禁止不必要的分号
    "no-extra-semi": 2,
    // 控制逗号前后的空格
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    "semi": [2, "never"],
    // 要求使用模板字面量而非字符串连接
    "prefer-template": 2,
  }
}