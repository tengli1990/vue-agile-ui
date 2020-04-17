### API

#### Button Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------ |------|
|className|样式|String|`default`|`default`, `primary`, `warning`, `danger`,`disabled`, `outline`,`small`,`large`,`round`|
|inline|行内|Boolean|`false`|-|
|disabled|是否禁用|Boolean|`false`|-|
|inactive|未激活|Boolean|`false`|`inactive`设为`true`和`disabled`类型的按钮都无法点击，前者一般用于表单校验无效等主观因素，后者用于无权限或无库存等客观因素|


#### Button Events

##### @click(event)

按钮点击事件
