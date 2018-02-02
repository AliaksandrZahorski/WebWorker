var myWorker = new Worker("worker.js");

const msg = 'test';

myWorker.postMessage(msg);
console.log('Message posted to worker', msg);

myWorker.onmessage = function(e) {
  console.log('Message received from worker', e.data);
}
