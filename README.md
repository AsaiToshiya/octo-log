日本語 | [English](./README-en.md)
  
# octo-log

octo-log は、GitHub の自分のすべてのリポジトリのコミット ログを横断的に表示するコマンド ライン ツールです。


## インストール

```bash
npm i -g @asaitoshiya/octo-log
```

### GitHub トークンを生成

  1. https://github.com/settings/tokens を開く
  2. 「Generate new token」をクリックする
  3. 「Note」に「octo-log」を入力する
  4. 「Select scopes」で「repo」を選択する
  5. 「Generate token」をクリックする


## 使い方

```bash
octo-log (-t|--token) <token> [--author <author>]
```


## ライセンス

    MIT License
    
    Copyright (c) 2022 Asai Toshiya
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.