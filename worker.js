onmessage = function(e) {
  console.log('Message received from main script', e.data);
  var workerResult = 'New' + e.data;
  console.log('Posting message back to main script', workerResult);
  let i = 0;

  const timedCount = () => {
      i = i + 1;
      postMessage(i);
      if (i > 10) clearInterval(t);
  }
  const t = setInterval(timedCount, 1000);

}
