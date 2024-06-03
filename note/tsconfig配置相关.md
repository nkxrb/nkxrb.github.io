# TSCONFIG 配置相关

### tsconfig.json和tsconfig.declaration.json的区别

1. 用途不同：

- tsconfig.json：定义整个 TypeScript 项目的编译配置。
- tsconfig.declaration.json：专门用于生成声明文件 (.d.ts) 的配置。

1. 配置内容不同：

- tsconfig.json：包含所有编译选项，如编译目标，模块系统，输出目录，严格类型检查等。
- tsconfig.declaration.json：通常仅包含生成声明文件所需的选项，如 declaration, emitDeclarationOnly, outDir, rootDir 等。

3. 编译输出：

- tsconfig.json：输出编译后的 JavaScript 文件和其他资源。
- tsconfig.declaration.json：只输出 TypeScript 声明文件 (.d.ts)，不会输出编译后的 JavaScript 文件。


### vue项目中识别tsx文件

```json
// tsconfig.json 中增加配置
"compilerOptions": {
    "jsx": "preserve",
}
```