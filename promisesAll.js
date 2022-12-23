promise1=Promise.resolve('Hello Multiverse!'); //What happened with Promise.reject?
promise2=10
promise3= new Promise((resolve, reject) => setTimeout(resolve,2000,'Goodbye'));
promise4= fetch('https://jsonplaceholder.typicode.com/users/').then((response) =>response.json())


Promise.all([promise1, promise2, promise3, promise4]).then((values)=>console.log(values));


