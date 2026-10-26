   export function fibonacci(n) {
     if (!Number.isInteger(n) || n < 0) {
       throw new RangeError('solo números enteros ≥ 0');
     }
     let [a, b] = [0, 1];
     for (let i = 0; i < n; i++) [a, b] = [b, a + b];
     return a;
   }
   