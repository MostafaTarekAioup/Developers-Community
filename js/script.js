if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./sw.js')
      .then( (registration) => {
        // Registration was successful
        console.log('ServiceWorker registered, scope: ', registration.scope);
      })
      .catch( (error) => {
        // registration failed
        console.log('ServiceWorker registration failed: ', error);
      });

  }

  console.log("Hi There");