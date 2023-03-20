## Flex Random Generator
Flex Random Generator is a simple Node.js Express server that generates a random League of Legends team based on a selected difficulty level. 

### Installation 
To install Flex Random Generator, run the following command:
``` 
cd server npm install
``` 

### Usage
To start the server, run the following command: 
``` 
npm run dev
``` 
A server will start on your `localhost:3000`. To get a random team, make a GET request to `http://localhost:3000/get-full-team` with an integer parameter called `difficulty`. 
The `difficulty` parameter ranges from 0 to 2 (0: easy, 1: medium, 2: difficult). The program sorts the League of Legends champions by each role based on play rates. Given a difficulty level, it gets a random index from a subarray for each role, generating the team. 

### Future Development
- Filter champions by region. 
- Filter champions by tags ('Fighter', 'Magician', etc.). 

### Features 
- Generate a random League of Legends team based on the selected difficulty level. 

### Acknowledgments 
- This project was inspired by [meraki-analytics/role-identification](https://github.com/meraki-analytics/role-identification). 
- This project was made using the [data-dragon](https://github.com/BinaryAlien/data-dragon#readme) package to get League of Legends champions.
