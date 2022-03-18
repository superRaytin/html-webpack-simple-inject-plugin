# html-webpack-simple-inject-plugin
Simplely injects a custom string into the html-webpack-plugin output.

## Installation

```bash
npm install --save-dev html-webpack-simple-inject-plugin
```

## Example

```js
import HtmlWebpackPlugin from "html-webpack-plugin"
import HtmlWebpackSimpleInjectPlugin from "html-webpack-simple-inject-plugin"

export default {
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: "<html><head></head><body></body></html>"
    }),
    new HtmlWebpackSimpleInjectPlugin({
      content: '<noscript>You need to enable JavaScript to run this app.</noscript>',
      target: 'body',
      position: 'start',
    }),
  ],
}
```

## Options

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`content`**|`{String}`|""|The string that will be injected into the html-webpack-plugin output.|
|**`target`**|`"head"`\|`"body"`|`'head'`|The target place that you wanted to inject.|
|**`position`**|`"start"`\|`"end"`|`'end'`|If `start`, the content will be injected after the opening tag of `target`. If `end`, the content will be injected before the ending tag of `target`.|