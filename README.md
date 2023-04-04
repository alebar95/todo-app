# TodoApp

Progetto generato con Angular CLI versione 15.1.6.

Lo stato globale dell'applicazione è gestito tramite ngRx: https://ngrx.io/ 

Ho applicato i componenti fondamentali di ngrx come Store, Actions, Reducers, Selector e Effects.

Le api BE sono state "mockate" attraverso JSONServer: https://github.com/typicode/json-server. Per poterle chiamare è necessario eseguire un server all'interno di un container docker come indicato nel repo: https://github.com/alebar95/mock-todos-server

È stato realizzato uno swagger conforme allo standard Open API, attraverso i tool swagger inspector https://inspector.swagger.io/builder e swaggerHub https://app.swaggerhub.com. Tale swagger si trova nel file todos-api.json nella root del progetto.

Tutto il codice relativo ai data models e ai servizi che effetuano le chiamate api al BE, è stato autogenerato a partite dal suddetto swagger attraverso il pacchetto https://www.npmjs.com/package/ng-openapi-gen. Per generare il codice basta eseguire lo script api indicato nel file package.json digitando il comando: npm run api-gen

È possibile creare un'immagine Docker a partire dal Dockerfile, il quale è stato configurato per poter servire l'app all'interno di un web server nginx.
Per eseguire tale server in un container custom:

Clonare il progetto e portarsi nella root del progetto, dove è presente il Dockerfile ed eseguire il seguente comando da terminale:

  docker build . -t todo-app

Una volta che l'immagine è stata creata, eseguirla in in un container con il seguente comando:

  docker run -d -p 8080:80 --name todo-app todo-app

Aprire il browser all'indirizzo http://localhost:8080 e verificare che l'app venga eseguita correttamente.





