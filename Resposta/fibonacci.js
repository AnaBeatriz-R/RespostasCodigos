function fibonacci(n) {
  
  const num = [0, 1];
  while (num[num.length - 1] < n) {
    num.push(num[num.length - 1] + num[num.length - 2]);
  }
  return num;
}

function verificacao(n, seq) {
 
  if (seq.includes(n)) {
    console.log(`O número ${n} pertence à sequência de Fibonacci!`);
  } else {
    console.log(`O número ${n} NÃO pertence à sequência de Fibonacci.`);
  }
}


const n = 20;
const seq = fibonacci(n);
console.log(`Sequência de Fibonacci até o ${n}: ${seq}`);
verificacao(2, seq);
verificacao(17, seq);
