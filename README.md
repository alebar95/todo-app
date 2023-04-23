# TodoApp

Progetto generato con Angular CLI versione 15.1.6.

Lo stato globale dell'applicazione è gestito tramite ngRx: https://ngrx.io/ 

Ho applicato i componenti fondamentali di ngrx come Store, Actions, Reducers, Selector e Effects.

Le api BE sono state "mockate" attraverso JSONServer: https://github.com/typicode/json-server. Per poterle chiamare è necessario eseguire un server all'interno di un container docker come indicato nel repo: https://github.com/alebar95/mock-todos-server, (è possibile ancghe eseguire il container docker in un cluster kubernetes come indicato nel suddeto repo).

È stato realizzato uno swagger conforme allo standard Open API, attraverso i tool swagger inspector https://inspector.swagger.io/builder e swaggerHub https://app.swaggerhub.com. Tale swagger si trova nel file todos-api.json nella root del progetto.

Tutto il codice relativo ai data models e ai servizi che effetuano le chiamate api al BE, è stato autogenerato a partite dal suddetto swagger attraverso il pacchetto https://www.npmjs.com/package/ng-openapi-gen. Per generare il codice basta eseguire lo script api indicato nel file package.json digitando il comando: npm run api-gen

È possibile creare un'immagine Docker a partire dal Dockerfile, il quale è stato configurato per poter servire l'app all'interno di un web server nginx.
Per eseguire tale server in un container custom:

Clonare il progetto e portarsi nella root del progetto, dove è presente il Dockerfile ed eseguire il seguente comando da terminale:

  docker build . -t todo-app

Una volta che l'immagine è stata creata, eseguirla in in un container con il seguente comando:

  docker run -d -p 8080:80 --name todo-app todo-app

Aprire il browser all'indirizzo http://localhost:8080 e verificare che l'app venga eseguita correttamente.

All'interno della root del progetto è stato aggiunto il file deployment.yaml che contiene la definizione dell'oggetto kubernetes deployment per poter eseguire l'immagine Docker todo-app all'interno di un cluster Kubernetes locale, eseguito dal Docker Desktop.

All'interno del file deployment.yaml è presente anche la definizione yaml di un Service che consente di esporre l’applicazione per l’accesso dall’esterno del cluster kubernetes.

Abilitare Kubernetes nel Docker Desktop eseguendo quindi un cluster avente un unico nodo docker-desktop.

Verificare che il nodo docker-desktop sia stato creato lanciando il comando:

  kubectl get nodes

All'interno della root del progetto lanciare il comando:

  kubectl apply -f deployment.yaml

Verificare la corretta esecuzione dell'app nel cluster kubernetes lanciando il comando: 

  kubectl get pods

A questo punto si può accedere alla web app da browser all'indirizzo http://localhost:31000 , la porta 31000 è stata settata nella definizione del service nel file deployment.yaml

L'autenticazione è gestita con l'iam Keycloak

Per il corretto funzionamento della web app occore fare prima quanto indicato in https://github.com/alebar95/mock-todos-server e successivamente:
  
  
      - Accedere all'admin console del server keycloak all'indirizzo http://localhost:8180/auth
      - Scegliere il realm "todos-realm";
      - Crere un client associato alla web app angular, chiamandolo "todo-app";
      - Settare Acces-Type a "public";
      - Inserire come redirect urls:
                "http://localhost:4200/*"
                "http://localhost:31000/*"



