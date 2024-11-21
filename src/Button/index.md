# Button 按钮

用于开始一个即时操作

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑

## 代码演示

### 按钮主题

在 cac-ui 中提供了四种属性按钮

```jsx
import { Button } from 'cac-ui';

export default () => {
  return (
    <div className="grid">
      <Button type="primary" content="Primary" />
      <Button type="danger" content="Danger" />
      <Button type="success" content="Success" />
      <Button type="warning" content="Warning" />
    </div>
  );
};
```

### 按钮尺寸

设置了三种尺寸

```jsx
import { Button } from 'cac-ui';

export default () => {
  return (
    <div className="grid">
      <Button content="Primary" size="small" />
      <Button content="Primary" size="middle" />
      <Button content="Primary" size="large" />
    </div>
  );
};
```

### 禁用状态

设置了三种尺寸

```jsx
import { Button } from 'cac-ui';

export default () => {
  return (
    <div className="grid1">
      <div className="rows">
        <Button content="Primary" />
        <Button content="Primary" disabled="true" />
      </div>
      <div className="rows">
        <Button type="danger" content="Danger" />
        <Button type="danger" content="Danger" disabled="true" />
      </div>
      <div className="rows">
        <Button type="success" content="Success" />
        <Button type="success" content="Success" disabled="true" />
      </div>
      <div className="rows">
        <Button type="warning" content="Warning" />
        <Button type="warning" content="Warning" disabled="true" />
      </div>
    </div>
  );
};
```

### API

| 属性     | 说明           | 类型                                   | 默认值    |
| -------- | -------------- | -------------------------------------- | --------- |
| type     | 按钮主题颜色   | 'primary' 'danger' 'warning' 'success' | 'primary' |
| content  | 按钮内文字内容 | string                                 | ''        |
| size     | 按钮尺寸       | 'small' 'middle' 'large'               | 'middle'  |
| disabled | 按钮禁用状态   | boolean                                | false     |
