let current = '0', previous = null, operator = null, fresh = false;

const display = () => document.getElementById('display').textContent = current;

function inputNum(n) {
  if (fresh) { current = n; fresh = false; }
  else current = current === '0' ? n : current + n;
  display();
}
function inputDot() {
  if (!current.includes('.')) current += '.';
  display();
}
function clearDisplay() { current = '0'; previous = null; operator = null; display(); }
function toggleSign() { current = String(-parseFloat(current)); display(); }
function inputPercent() { current = String(parseFloat(current) / 100); display(); }
function setOp(op) {
  previous = parseFloat(current); operator = op; fresh = true;
}
function calculate() {
  if (operator === null || previous === null) return;
  const cur = parseFloat(current);
  const ops = { '+': previous + cur, '-': previous - cur, '*': previous * cur, '/': previous / cur };
  current = String(ops[operator]);
  operator = null; previous = null; fresh = true;
  display();
}
