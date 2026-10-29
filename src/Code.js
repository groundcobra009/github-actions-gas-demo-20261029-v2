/**
 * GitHub Actions + clasp で反映されたことを確認するためのサンプル
 * GAS エディターで関数を選択して「実行」すると、実行ログにメッセージが出ます。
 */

// GitHub で書き換えて push すると、GAS エディター側もこの値に変わります
const DEPLOY_MESSAGE = 'Hello from GitHub Actions! (first deploy)';

function hello() {
  Logger.log(DEPLOY_MESSAGE + ' (' + formatNow_() + ')');
}

/**
 * 1〜10 の合計を計算してログに出すサンプル
 */
function sumSample() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  const total = numbers.reduce((sum, n) => sum + n, 0);
  Logger.log('1〜10 の合計: ' + total);
  return total;
}

// 末尾が _ の関数は GAS エディターの実行メニューに表示されない（内部用）
function formatNow_() {
  return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
}
