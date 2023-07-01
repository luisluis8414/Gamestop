# Ingame Item Webshop
hostet at : [thegamestop.de/](https://thegamestop.de/) <br>
<strong>This is work in progress and not finished. Some of the features are not implemented!</strong>

<strong>This is not a real shop. U cant pay with real money and you are not really purchasing items!</strong>

This is a webshop for ingame items built with ThreeJS, PHP, and Ajax. The webshop features a login system that uses SHA512 hash for password encryption and a MySQL database to store user information.

## Features

- A user-friendly interface that allows users to browse, search and purchase ingame items.
- A secure login system that uses SHA512 hash for password encryption and uses PHPMailer to send user Credentails or for password Recovery.
- A MySQL database to store user information, purchase history and Store Items.
- Dynamic form handling to make the checkout process easy and fast.
- ThreeJS to create an immersive 3D shopping experience for users.

## Prerequisites

- PHP 7 or higher
- MySQL 5.7 or higher
- ThreeJS 0.128 or higher

## Installation

1. Clone the repository: 

git clone https://github.com/luisluis8414/threeJs.git

2. Import the database schema using the `webshop.sql` file included in the repository. 

3. Create a .env file in the root directory

4 .Add these values with your database credentials

```dotenv
DB_HOST=
DB_NAME=
DB_USER=
DB_PASSWORD=
EMAIL_SENDER=
SMTP_PW=
SMTP_HOST=
```

4. Start the web server and navigate to the index page.

## Usage

1. Register a new account or log in to an existing one. (You can also reset your Password and 2FA)
   ![image](https://github.com/luisluis8414/Gamestop/assets/86251888/737a15b7-aeae-40c7-8fec-aa7973454aea)

   ![image](https://github.com/luisluis8414/Gamestop/assets/86251888/a4ccc02f-ed9b-485c-8f48-06ef025f77ba)



3. Browse the available ingame items and select the ones you want to purchase.

4. Add the selected items to your cart.

5. Proceed to checkout and fill in the necessary information.

6. Submit your order and wait for confirmation.

7. Once your order has been confirmed you get an email.

8. You can visit the Profile Page to see/ reorder old orders or see other Users online and edit your Profile 


