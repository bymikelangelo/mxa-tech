## mxa-tech-interview
This repo contains a basic NestJS app to be used as base for the tech interview. The goal of the interview is playing around with the technology we use at Maximiliana and facing the challenge of getting to work technology which is new to the candidate. It includes an `Employees` module with hard-coded data which can be use for reference.

### What we expect
We want you to create a new endpoint under `/vehicles/byColor` which is able to return, filtered by a parameterized color, the vehicles stored in a Firebase Realtime DB. The returned object should be a list of objects which **just** include the plate number and the manufacturer.

So, for example, given color `YELLOW`, the expected of the endpoint is as follows:

```
    [
        {
            "plate": "5685DFS",
            "manufacturer": "Seat"
        },
        {
            "plate": "1221HFS",
            "manufacturer": "Seat"
        }
    ]
```


Also, the app should be deployed to Google Cloud Run as an unauthenticated service. The Realtime DB can be accessed [here](https://console.firebase.google.com/u/5/project/mxa-tech-interview/database/mxa-tech-interview-default-rtdb/data) once logged in with the provided Google account.

#### Things we would love to see
- High code quality, following naming conventions, best practices and good code style
- Consistency among the project
- Parameter validation and appropiate data transfer
- The f*cking thing working 

#### Things that do not matter (for the moment 😉)
- Authentication and security
- Efficiency
- Other endpoints apart form `/vehicles/byColor`

### Credentials
A Google account has been created in order to access the Firebase project (`mxa-tech-interview`) and the Google Cloud Console. Everything id doable in the free tier of both platforms.
```
maximilianatechinterview@gmail.com
Jvf?6X_7<e<3KDo`KYL!ou[>%
```

### Delivery
We expect the following:
- A cloned Github repository with a working solution in the provided Docker environment
- The URL of the Cloud Run service
- The completion of markdown file `SUMMARY.md` with a **short** executive summary of the proposed solution including an explanation of any decision made or remark the candidate considers important.
