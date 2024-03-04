# Lapine Birthday 2024


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
  yarn dev or npm run dev
  ```
#### All available path

-  **/view-all-wish**
    contain all wish page
-  **/credit**
    credit page
-  **/popcat**
    meme popcat page
#### Important features

-   **create wish card**
    a wish card that contain 2 stickers and wish text
-   **view all wish card**
    look up all wish cards that has been sent
-   **search a wish card**
    find a wishcard by sender name
-   **recent wish card**
    show recent 4 wish cards
#### Configuration

-   **CSS**
    color and size of content defined in css directory 
-   **Params**
    text and linkurl defined in params directory
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
  yarn install or npm install
  ```
- Run the application in local by running

    ```
    yarn start:dev or npm run start:dev
    ```
#### All available RestAPI

-   **GET /wish-card**
    fetch all data from mongoDB database
-   **POST /wish-card/new**
    create new wish card which require multiple parameters [name,wish,stickerUp,stickerDown,picture,borderColor]
-   **GET /wish-card/search**
    fetch a data using sender name 
-   **GET /wish-card/lastest-four**
    fetch 4 recent data
-   **PUT /wish-card/update**
    update a wishcard require parameters [name,wish]
-   **DELETE /wish-card/delete**
    delete a wish card require parameter [name]
-   **DELETE /wish-card/nuclear-option**
    delete all wish card from database
-   **GET /wish-card/slang-check**
    fetch all wish card and compare with slang database whether it has a slangword