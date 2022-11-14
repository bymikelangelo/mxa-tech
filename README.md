## What is mxa-tech?
Mxa-Tech is a little web app create with NestJS which let you to see data from a Firebase Realtime Database. It is created as a goal of how can I manage myself using NestJS, TypeScript, Firebase and the diferent technologies [Maximiliana](https://maximiliana.es/) uses every day to work. 

### How to use it.
To use this app you have to install NodeJS. You can see the way to install NodeJS libraries in your computer [here](https://github.com/nodesource/distributions/blob/master/README.md). 

After that, you have to clone this repository in your local PC with ``git clone``.

```
    git clone https://github.com/bymikelangelo/mxa-tech.git
```

Then, to install the modules the app needs to run, open a Terminal in the directory you use to save this repository and where the file **packages.json** is located and write the follow command:

```
    npm install
```

Finally, you have to run the app with:

```
    npm run start
```

The dafault port NestJS use is number **3000**. Then, you can try doing a HTTP Petition to http://localhost:3000/vehicles to receive data from the Firebase Database. If you use the endpoint vehicles/byColor, you will receive entries depending on the **colour parameter** write on the URL. For example with http://localhost:3000/vehicles/byColor/red you will see:
    
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

You should do the HTTP petition using your Web Broser or using ``curl` command as:

```
    curl http://localhost:3000/vehicles/byColor/red
```
