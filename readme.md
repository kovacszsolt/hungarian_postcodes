# Hungarian Post Code converter  

generate hungarian postal code list from official XLSX  
url: https://www.posta.hu/static/internet/download/Iranyitoszam-Internet_uj.xlsx  

##Configuration
[.env file](./.env)  

SOURCE_URL=https://www.posta.hu/static/internet/download/Iranyitoszam-Internet_uj.xlsx  
TARGET_FILE=output.json  


##Usage
1. npm i  
2. npm run start  

##Usage with docker  
docker run  -v ${PWD}/output.json:/usr/src/app/output.json kovacszsolt/hungarian_postcodes
