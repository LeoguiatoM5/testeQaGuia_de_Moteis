import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';


let responseTimes = new Trend('response_times');

export let options = {
  vus: 100, 
  duration: '30s', 
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/users');

 
  responseTimes.add(res.timings.duration);


  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); 
}