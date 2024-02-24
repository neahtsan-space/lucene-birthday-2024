# Lucene Birthday 2024


## **Run in local**

### Frontend ( Next JS )
- change directory to ./frontend
- Setup an enviroment
- create a .env file in ./frontend with this content
    ```
    NEXT_PUBLIC_API_URL=http://localhost:3080/ (Assume you use our Backend)
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY=(get it from google reCAPTCHA)
    RECAPTCHA_SECRET_KEY=(get it from google reCAPTCHA)
    ```
- Register to reCAPTCHA, create site ky & secret key (also add localhost to reCAPTCHA domain)

- Install dependencies by running
  
  ```
  yarn install or npm install
  ```
- Run the application in local by running

  ```
  yarn dev or npm dev
  ```

### Backend ( Nest JS )
- change directory to ./backend
- Setup an enviroment
- create a .env file in ./backend with this content
   ```
    DB_URI=(your mongodb connection string)
    ```
-  Register to MongoDB Atlas, create a cluster and put the connection URI in DB_URI

- Install dependencies by running
  
  ```
  yarn install
  ```
- Run the application in local by running

    ```
    yarn start:dev
    ```

