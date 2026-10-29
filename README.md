# github-actions-gas-demo

`src/` に書いた Google Apps Script を、GitHub Actions + clasp で GAS エディターに自動反映するデモです。

## 構成

```
.clasp.json         # 反映先のスクリプト ID と rootDir
src/
  appsscript.json   # GAS のマニフェスト
  Code.js           # GAS のコード
.github/workflows/
  deploy-gas.yml    # main への push で clasp push を実行
```

## 必要な Secrets（Settings → Secrets and variables → Actions）

| Name | 中身 |
|---|---|
| `CLASPRC_JSON_BASE64` | `clasp login` で作られた `~/.clasprc.json` を Base64 にしたもの |

反映先のスクリプト ID は `.clasp.json` に書いてあります（スクリプト ID だけでは他人は編集できないので、シークレットにはしていません）。

## 動くタイミング

- `main` ブランチの `src/` 以下か `.clasp.json` が変更されて push されたとき
- Actions タブから「Deploy to Google Apps Script」を手動実行（Run workflow）したとき

> ⚠️ `clasp push` は GAS 側のファイルを `src/` の内容で上書きします。GAS エディターにしかないファイルは消えるので注意してください。
