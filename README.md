# html-webpack-simple-inject-plugin
Simplely injects a custom string into the html-webpack-plugin output.

## Installation

```bash
npm install --save-dev html-webpack-simple-inject-plugin
```

## Example

#### input

```js
import HtmlWebpackPlugin from "html-webpack-plugin"
import HtmlWebpackSimpleInjectPlugin from "html-webpack-simple-inject-plugin"

export default {
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: "<html><head></head><body>text</body></html>"
    }),
    new HtmlWebpackSimpleInjectPlugin({
      content: '<div>inject</div>',
      target: 'body',
      position: 'start',
    }),
  ],
}
```

#### output

```html
<html><head></head><body><div>inject</div>text</body></html>
```

## Options

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`content`**|`{String}`|""|The string that will be injected into the html-webpack-plugin output.|
|**`target`**|`"head"`\|`"body"`|`'head'`|The target place that you wanted to inject.|
|**`position`**|`"start"`\|`"end"`|`'end'`|If `start`, the content will be injected after the opening tag of `target`. If `end`, the content will be injected before the ending tag of `target`.|