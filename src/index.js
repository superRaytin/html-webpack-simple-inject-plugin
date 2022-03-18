/* eslint-disable import/no-unresolved */
import HtmlWebpackPlugin from 'html-webpack-plugin';

const pluginName = 'html-webpack-simple-inject-plugin';

export default class HtmlWebpackSimpleInjectPlugin {
  constructor(options) {
    this.options = {
      content: '',
      position: 'end',
      target: 'head',
      ...options,
    };
    if (options.target !== 'head' && options.target !== 'body') {
      throw new Error(
        'The "target" option should be one of "head" and "body".',
      );
    }
  }

  inject(position, content, needle, insertedString) {
    if (!insertedString) return content;
    const index = content.indexOf(needle);
    if (index === -1) return content;
    const endIndex = position === 'before' ? index : index + needle.length;
    return content.slice(0, endIndex) + insertedString + content.slice(endIndex);
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap(
        pluginName,
        (data) => {
          if (this.options.position === 'start') {
            data.html = this.inject(
              'after',
              data.html,
              `<${this.options.target}>`,
              this.options.content,
            );
          } else {
            data.html = this.inject(
              'before',
              data.html,
              `</${this.options.target}>`,
              this.options.content,
            );
          }
        },
      );
    });
  }
}
