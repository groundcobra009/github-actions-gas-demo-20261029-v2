/**
 * GitHub Actions + clasp で反映されたことを確認するためのサンプル関数
 * GAS エディターで選択して「実行」すると、実行ログにメッセージが出ます。
 */
function hello() {
  const now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm:ss');
  Logger.log('Hello from GitHub Actions! (' + now + ')');
}
