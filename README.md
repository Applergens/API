<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <h1>API DOCUMENTATION:</h1>
    Las URLs de los endpoints se construyen de la siguiente manera:
    <br>
    <b>apilergens.herokuapp.com</b> {endpoint}
    <h2>LOGIN</h2>
    <p>Endpoints dirigidos a controlar los logins, tanto de usuarios (APP) como de restaurantes (DESKTOP)
    <h3>User Login</h3>
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
        <tr>
            <td>password</td>
            <td>text</td>
            <td colspan="3">User password</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">ObjectID value</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">User name</td>
        </tr>
        <tr>
            <td>surname1</td>
            <td>text</td>
            <td colspan="3">User surname1</td>
        </tr>
        <tr>
            <td>surname2</td>
            <td>text</td>
            <td colspan="3">User surname2</td>
        </tr>
        <tr>
            <td>dni</td>
            <td>text</td>
            <td colspan="3">User dni</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>int</td>
            <td colspan="3">User phone</td>
        </tr>
        <tr>
            <td>allergies</td>
            <td>array</td>
            <td colspan="3">User allergiesIds array</td>
        </tr>
        <tr>
            <td>favourites</td>
            <td>array</td>
            <td colspan="3">User favouritesIds array</td>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h3>Restaurant Login</h3>
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/restaurant</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>text</td>
            <td colspan="3">Restaurant code</td>
        </tr>
        <tr>
            <td>password</td>
            <td>text</td>
            <td colspan="3">Restaurant password</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/restaurant</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Restaurant ObjectId value</td>
        </tr>
        <tr>
            <td>address</td>
            <td>text</td>
            <td colspan="3">Restaurant address</td>
        </tr>
        <tr>
            <td>dishes</td>
            <td>array</td>
            <td colspan="3">Restaurant dishes</td>
        </tr>
        <tr>
            <td>dishes.name</td>
            <td>text</td>
            <td colspan="3">Restaurant dish name</td>
        </tr>
        <tr>
            <td>dishes.ingredients</td>
            <td>array</td>
            <td colspan="3">Restaurant dish > ingredients array (ids)</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Restaurant name</td>
        </tr>
        <tr>
            <td>password</td>
            <td>text</td>
            <td colspan="3">Restaurant password</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>int</td>
            <td colspan="3">Restaurant phone</td>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /login/restaurant</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h2>REGISTER</h2>
    <p>Endpoints dirigidos a controlar los registros, tanto de usuarios (APP) como de restaurantes (DESKTOP)
    <h3>User Register</h3>
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">User name</td>
        </tr>
        <tr>
            <td>surname1</td>
            <td>text</td>
            <td colspan="3">User surname1</td>
        </tr>
        <tr>
            <td>surname2</td>
            <td>text</td>
            <td colspan="3">User surname2</td>
        </tr>
        <tr>
            <td>dni</td>
            <td>text</td>
            <td colspan="3">User dni</td>
        </tr>
        <tr>
            <td>surname2</td>
            <td>text</td>
            <td colspan="3">User phone</td>
        </tr>
        <tr>
            <td>password</td>
            <td>text</td>
            <td colspan="3">User password</td>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h3>Restaurant Register</h3>
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/restaurant</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>address</td>
            <td>text</td>
            <td colspan="3">Restaurant address</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Restaurant name</td>
        </tr>
        <tr>
            <td>password</td>
            <td>text</td>
            <td colspan="3">Restaurant password</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>text</td>
            <td colspan="3">Restaurant phone</td>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">Restaurant email</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/restaurant</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /register/user</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h2>User CRUD</h2>
    <p>Endpoints dirigidos a controlar la informacion de los Usuarios, leerla y actualizarla.
    <h3>User Change Password</h3>
    <p>Endpoint dirigido a cambiar la contraseña de un usuario
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /users/changePassword</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
        <tr>
            <td>password1</td>
            <td>text</td>
            <td colspan="3">User old password</td>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User new password</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4> <table style="width:100%"> <tr> <th colspan="5">Response: JSON</th> </tr> <tr> <th colspan="5">POST /register/user</th> </tr> <tr> <th>Param</th> <th>Value</th> <th colspan="3">Description</th> </tr> <tr> <td>Message</td> <td>text</td> <td colspan="3">Successful message</td> </tr> </table> <br> <h4>RESPONSE  STATUS 400</h4> <table style="width:100%"> <tr> <th colspan="5">Response: JSON</th> </tr> <tr> <th colspan="5">POST /register/user</th> </tr> <tr> <th>Param</th> <th>Value</th> <th colspan="3">Description</th> </tr> <tr> <td>Message</td> <td>text</td> <td colspan="3">Error message</td> </tr> </table>
    <h3>User Get by Email</h3>
    <p>Endpoint dirigido a obtener la información de un usuario a partir de un e-mail.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: URLQuery</th>
        </tr>
        <tr>
            <th colspan="5">GET /users/getByEmail</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /users/getByEmail</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">ObjectID value</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">User name</td>
        </tr>
        <tr>
            <td>surname1</td>
            <td>text</td>
            <td colspan="3">User surname1</td>
        </tr>
        <tr>
            <td>surname2</td>
            <td>text</td>
            <td colspan="3">User surname2</td>
        </tr>
        <tr>
            <td>dni</td>
            <td>text</td>
            <td colspan="3">User dni</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>int</td>
            <td colspan="3">User phone</td>
        </tr>
        <tr>
            <td>allergies</td>
            <td>array</td>
            <td colspan="3">User allergiesIds array</td>
        </tr>
        <tr>
            <td>favourites</td>
            <td>array</td>
            <td colspan="3">User favouritesIds array</td>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 404</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /users/getByEmail</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h3>User set Favourite</h3>
    <p>Endpoint dirigido a añadir o quitar un restaurante de la lista de favoritos del usuario.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setFavourite</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
        <tr>
            <td>restaurantId</td>
            <td>text</td>
            <td colspan="3">Restaurant ObjectId</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setFavourite</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>favourites</td>
            <td>array</td>
            <td colspan="3">New favourites list, array of ObjectId</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 404</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setFavourite</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h3>User set Allergens</h3>
    <p>Endpoint dirigido a actualizar las alergias del usuario.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setAllergens</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">User email</td>
        </tr>
        <tr>
            <td>allergens</td>
            <td>array</td>
            <td colspan="3">Array of Allergens ObjectId</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setAllergens</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 404</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /user/setAllergens</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <h2>Restaurant CRUD</h2>
    <p>Endpoints dirigidos a controlar la informacion de los Restaurantes, leer, actualizar, crear y borrar platos.
    <h3>Restaurant Get by Code</h3>
    <p>Endpoint dirigido a obtener la información de un restaurante a partir de un código.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: URLQuery</th>
        </tr>
        <tr>
            <th colspan="5">GET /restaurants/getByCode</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>email</td>
            <td>text</td>
            <td colspan="3">Restaurant code</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /restaurants/getByCode</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Restaurant ObjectId value</td>
        </tr>
        <tr>
            <td>address</td>
            <td>text</td>
            <td colspan="3">Restaurant address</td>
        </tr>
        <tr>
            <td>dishes</td>
            <td>array</td>
            <td colspan="3">Restaurant dishes list</td>
        </tr>
        <tr>
            <td>dishes.name</td>
            <td>text</td>
            <td colspan="3">Restaurant dish name </td>
        </tr>
        <tr>
            <td>dishes.ingredients</td>
            <td>array</td>
            <td colspan="3">Restaurant dish > ingredients list (ids) </td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Restaurant name</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>int</td>
            <td colspan="3">Restaurant phone</td>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 404</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /restaurants/getByCode</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h3>Restaurant Find Many by ID</h3>
    <p>Endpoint dirigido a obtener la información de varios Restaurantes a partir de una lista de IDs.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">GET /restaurants/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>favourites</td>
            <td>Array</td>
            <td colspan="3">Restaurants List</td>
        </tr>
    </table>
    <h4>OBJECT</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Restaurant Object</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Restaurant ObjectId value</td>
        </tr>
        <tr>
            <td>address</td>
            <td>text</td>
            <td colspan="3">Restaurant address</td>
        </tr>
        <tr>
            <td>dishes</td>
            <td>array</td>
            <td colspan="3">Restaurant dishes list</td>
        </tr>
        <tr>
            <td>dishes.name</td>
            <td>text</td>
            <td colspan="3">Restaurant dish name </td>
        </tr>
        <tr>
            <td>dishes.ingredients</td>
            <td>array</td>
            <td colspan="3">Restaurant dish > ingredients list (ids) </td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Restaurant name</td>
        </tr>
        <tr>
            <td>phone</td>
            <td>int</td>
            <td colspan="3">Restaurant phone</td>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /restaurants/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>favourites</td>
            <td>JSON</td>
            <td colspan="3">Restaurant Array of JSON object</td>
        </tr>
    </table>
    <br><br>
    <h3>Restaurant Create Dish</h3>
    <p>Endpoint dirigido a crear un plato.
    <h4>REQUEST</h4>
     <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/createDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
        <tr>
            <td>dish</td>
            <td>Object</td>
            <td colspan="3">Dish object</td>
        </tr>
        <tr>
            <td>dish.name</td>
            <td>text</td>
            <td colspan="3">Dish name</td>
        </tr>
        <tr>
            <td>dish.ingredients</td>
            <td>array</td>
            <td colspan="3">Dish ingredients list (ids)</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/createDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/createDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br><br>
    <h3>Restaurant Update Dish</h3>
    <p>Endpoint dirigido a actualizar la información de un plato concreto.
    <h4>REQUEST</h4>
     <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/updateDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
        <tr>
            <td>dish</td>
            <td>Object</td>
            <td colspan="3">Dish object</td>
        </tr>
        <tr>
            <td>dish.name</td>
            <td>text</td>
            <td colspan="3">Dish name</td>
        </tr>
        <tr>
            <td>dish.ingredients</td>
            <td>array</td>
            <td colspan="3">Dish ingredients list (ids)</td>
        </tr>
        <tr>
            <td>oldName</td>
            <td>text</td>
            <td colspan="3">Original dish name before updating</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/updateDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/updateDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br><br>
    <h3>Restaurant Delete Dish</h3>
    <p>Endpoint dirigido a eliminar un plato concreto.
    <h4>REQUEST</h4>
     <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/deleteDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>code</td>
            <td>int</td>
            <td colspan="3">Restaurant code</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Dish name</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/deleteDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Successful message</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE  STATUS 400</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">POST /restaurant/deleteDish</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>Message</td>
            <td>text</td>
            <td colspan="3">Error message</td>
        </tr>
    </table>
    <br>
    <h2>Ingredient CRUD</h2>
    <p>Endpoints dirigidos a controlar la informacion de los Restaurantes, leer, actualizar, crear y borrar platos.
    <h3>Get all ingredients</h3>
    <p>Endpoint dirigido a obtener todos los ingredientes.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET /ingredients/getAll</th>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /ingredients/getAll</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>ingredients</td>
            <td>JSON</td>
            <td colspan="3">Ingredients Array of JSON object</td>
        </tr>
    </table>
    <br>
    <h4>OBJECT</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Ingredient Object</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Ingredient ObjectId</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Ingredient name</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Ingredient allergen(id)</td>
        </tr>
    </table>
    <br>
    <h3>Ingredient Find Many by ID</h3>
    <p>Endpoint dirigido a obtener la información de varios ingredientes a partir de una lista de IDs.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">GET /ingredients/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>ingredients</td>
            <td>Array</td>
            <td colspan="3">Ingredients ID List</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /ingredients/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>ingredients</td>
            <td>JSON</td>
            <td colspan="3">Ingredients Array of JSON object</td>
        </tr>
    </table>
    <br>
    <h4>OBJECT</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Ingredient Object</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Ingredient ObjectId</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Ingredient name</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Ingredient allergen(id)</td>
        </tr>
    </table>
    <br>
    <h2>Allergen CRUD</h2>
    <p>Endpoints dirigidos a controlar la informacion de los Alérgenos.
    <h3>Get all allergens</h3>
    <p>Endpoint dirigido a obtener todos los alérgenos.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request</th>
        </tr>
        <tr>
            <th colspan="5">GET /allergens/getAll</th>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /allergens/getAll</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>allergens</td>
            <td>JSON</td>
            <td colspan="3">Allergens Array of JSON object</td>
        </tr>
    </table>
    <br>
    <h4>OBJECT</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Allergen Object</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Allergen ObjectId</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Allergen name</td>
        </tr>
    </table>
    <br>
    <h3>Allergens Find Many by ID</h3>
    <p>Endpoint dirigido a obtener la información de varios alérgenos a partir de una lista de IDs.
    <h4>REQUEST</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Request: JSON(body)</th>
        </tr>
        <tr>
            <th colspan="5">GET /allergens/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>allergens</td>
            <td>Array</td>
            <td colspan="3">Allergens ID List</td>
        </tr>
    </table>
    <br>
    <h4>RESPONSE STATUS 200</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Response: JSON</th>
        </tr>
        <tr>
            <th colspan="5">GET /allergens/getByListId</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>allergens</td>
            <td>JSON</td>
            <td colspan="3">Allergens Array of JSON object</td>
        </tr>
    </table>
    <br>
    <h4>OBJECT</h4>
    <table style="width:100%">
        <tr>
            <th colspan="5">Allergen Object</th>
        </tr>
        <tr>
            <th>Param</th>
            <th>Value</th>
            <th colspan="3">Description</th>
        </tr>
        <tr>
            <td>_id</td>
            <td>text</td>
            <td colspan="3">Allergen ObjectId</td>
        </tr>
        <tr>
            <td>name</td>
            <td>text</td>
            <td colspan="3">Allergen name</td>
        </tr>
    </table>
    <br>
</body>
</html>
