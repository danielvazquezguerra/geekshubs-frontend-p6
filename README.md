# GH-Proyecto1-Netflix-Frontend 🎞

FrontEnd del primer proyecto del Bootcamp FullStack de GeeksHubs de una web de alquiler de peliculas.

## Table of Content

- [Built With](##-Built-With)
- [Knowledge](##-Knowledge)
- [Getting Started](##-Getting-Started)
- [Partes](##-Partes)
- [Documentation](##-Documentation)
- [Author](##-Author)

## Built With 🛠️


## Knowledge 🧠 

* Angular
* Angular Material
* Typescript
* 
* 


## Getting Started 🚀 


### Clonando repositorio

```js
git clone https://github.com/danielvazquezguerra/geekshubs-frontend-p6.git
```


### Instalación dependencias

- Angular
- Angular-cli
- ng-zorro-antd
- rxjs
- tslint
- typescript


### Comenzando proyecto Angular


### Configuración Angular-CLI

npm install -g @angular/cli
ng new app
cd app
ng serve


### Arrancar el servidor

Para arrancar el servidor tienes que introducir el comando:

```js
ng serve
```


## Partes 

- Components
- Containers
- Models
- Services

### Components

### Containers

- Home
- Results
- Details
- Login
- Register
- Profile
- Admin Profile


### Models

- Movie
- Order
- User


### Services

#### Actors

        getActorsAll(){
    return  this.http.get(`${this.route}actors`);
    }
    getActorById(id: number){
    return  this.http.get(`${this.route}actors/id=${id}`);
    }
    getActorByName(name: string){
    return  this.http.get(`${this.route}actors/name=${name}`);
#### City

#### Genres

#### Movies
#### Orders
#### Search
#### Users


## Documentation 📚 

- [Angular Documentation](https://angular.io/docs)
- [Angular CLI](https://cli.angular.io/)
- [Angular Material](https://material.angular.io/)
- [Ant Design](https://ng.ant.design/docs/introduce/en)
- [Bootstrap](https://ng-bootstrap.github.io/#/getting-started)


## Author 👨🏼‍💻 

* **Daniel Vazquez Guerra** - [danielvazquezguerra](https://github.com/danielvazquezguerra)
* **Rafael Fernández Gómez** - [FerrowRafael](https://github.com/FerrowRafael)


## Images

### Home
![Pantalla Home](https://github.com/danielvazquezguerra/geekshubs-frontend-p6/blob/master/movit-home2.jpg?raw=true)



### Movies
![Detalle de la zona de búsqueda](https://github.com/danielvazquezguerra/geekshubs-frontend-p6/blob/master/movit-home.jpg?raw=true)

### Details
![Pantalla de detalles](https://github.com/danielvazquezguerra/geekshubs-frontend-p6/blob/master/movit-detalles.jpg?raw=true)

### Login
![enter image description here](https://github.com/danielvazquezguerra/geekshubs-frontend-p6/blob/master/movit-registro.jpg?raw=true)
### Register
![Pantalla del Login](https://github.com/danielvazquezguerra/geekshubs-frontend-p6/blob/master/movit-login.jpg?raw=true)

### User Profile

### Admin Profile



