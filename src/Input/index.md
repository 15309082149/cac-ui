# Input 输入框

## 何时使用

一般用在表单页进行信息的收集，提供文本框、选择框两种类型。

## 代码演示

### 基本使用

```jsx
import { Input } from 'cac-ui';

export default () => {
  return (
    <div className="flex1">
      <Input content="Basic" />
    </div>
  );
};
```

### 输入框尺寸

```jsx
import { Input } from 'cac-ui';

export default () => {
  return (
    <div className="flex">
      <Input content="Basic" size="large" />
      <Input content="Basic" size="middle" />
      <Input content="Basic" size="small" />
    </div>
  );
};
```

### 输入密码

```jsx
import { Input } from 'cac-ui';

export default () => {
  return (
    <div className="flex">
      <Input content="Passwords" size="middle" type="password" />
    </div>
  );
};
```

### 自定义状态

```jsx
import { Input } from 'cac-ui';

export default () => {
  return (
    <div className="flex">
      <Input content="Passwords" state="warning" />
      <Input content="Passwords" state="danger" />
    </div>
  );
};
```

### API

| 属性    | 说明             | 类型                     | 默认值   |
| ------- | ---------------- | ------------------------ | -------- |
| content | 输入框提示内容   | string                   |          |
| size    | 输入框尺寸       | 'small' 'middle' 'large' | 'middle' |
| type    | 按钮类型         | 'password'               |          |
| state   | 输入框自定义状态 | 'danger' 'warning'       |          |
