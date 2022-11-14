## What is mxa-tech?
Mxa-Tech is a little web app create with NestJS which let you to see data from a Firebase Realtime Database. It is created as a goal of how can I manage myself using NestJS, TypeScript, Firebase and the diferent technologies [Maximiliana](https://maximiliana.es/) uses every day to work. 

### How to use it.
To use this app you have to install NodeJS. You can see the way to install NodeJS libraries in your computer [here](https://github.com/nodesource/distributions/blob/master/README.md). 

After that, you have to clone this repository in your local PC with ``git clone``.

```
    git clone https://github.com/bymikelangelo/mxa-tech.git
```

Then, to install the modules the app needs to run, open a Terminal in the directory you are currently using to save this repository and where the file **packages.json** is located and write the follow command:

```
    npm install
```

Finally, you have to run the app with:

```
    npm run start
```

The default port NestJS use is number **3000**. Then, you can try doing a HTTP Petition to http://localhost:3000/vehicles to receive data from the Firebase Database. If you use the endpoint vehicles/byColor, you will receive entries depending on the **colour parameter** write on the URL. For example with http://localhost:3000/vehicles/byColor/red you will see:
    
    [
        {
            "plate":"2112GQS",
            "manufacturer":"Audi"
        },
        {
            "plate":"4323KJS",
            "manufacturer":"Seat"
        },
        {
            "plate":"5442KJL",
            "manufacturer":"Audi"
        }
    ]

You should do the HTTP petition in your favourite Web Browser or using ``curl`` command in a Terminal as:

```
    curl http://localhost:3000/vehicles/byColor/red
```

### Are you using Docker?

If you are a Docker user and you want to run this app in a container, you can create it from **bymikelangelo/mxa-tech:v1** image pulling it from DockerHub. You have to user the command below. 

```
    docker pull bymikelangelo/mxa-tech:v1
```

After that, you have to create the docker container with the following command:

```
    docker run --rm -p 4000:3000 --name mxa-tech bymikelangelo/mxa-tech:v1
```

Here we are mapping docker's port 3000 to port 4000 of our local machine but you can change your local port to everyone. 

Finally, to stop the container you have to use the command ``docker stop mxa-tech`` in a Terminal. Docker's container will be deleted.
