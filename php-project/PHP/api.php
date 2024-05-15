<?php
include './classes/database.php';
include './classes/jwt.php';

header("Access-Control-Allow-Origin: http://localhost:8001");
header("Access-Control-Allow-Methods: POST");  
header("Access-Control-Allow-Headers: Content-Type, Authorization");  


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

$action = $uri[4];
//echo $action;
$bearer_token = get_bearer_token();
$is_jwt_valid = isset($bearer_token) ? is_jwt_valid($bearer_token) : false;

$database = new Database();
//$database->createDatabase();
//$database->createTable();
//$database->createTable2();

if ($action === 'register') {

    $rest_json = file_get_contents('php://input');
    $_POST = json_decode($rest_json, true);
    $user = [
        'firstname' => isset($_POST['firstname']) ? $_POST['firstname']  :"" ,
        'lastname' =>isset($_POST['lastname']) ? $_POST['lastname']   :"" ,
        'birthdate' => isset($_POST['birthdate']) ? $_POST['birthdate']   : null ,
        'phone' => isset($_POST['phone']) ? $_POST['phone']  :"" ,
        'username' => isset($_POST['username']) ? $_POST['username']  :"" ,
        'email' => isset($_POST['email']) ? $_POST['email']  :"" ,
        'password' => isset($_POST['password']) ? md5($_POST['password'])  :"" ,
        'created_date' =>isset($_POST['firstname']) ? date('Y-m-d H:i:s')  :null ,
        'status' => 0
    ];

    if ($user_id = $database->register($user) ) {
        $user['id'] = $user_id;  
        
        if ($code = $database->generateConfirmCode($user_id )) {
        
            //send generated code by email to user
            $headers = ['alg' => 'HS256', 'typ' => 'JWT'];
            $payload = ['user' => $user];
            $jwt = generate_jwt($headers, $payload);
            return_json(['status' => $jwt]);
          
        }else{
            echo "error no code";
        }
    }else{
        echo "no user id";
    }

} elseif ($action === 'confirm') {
    if ($is_jwt_valid) {
        $rest_json = file_get_contents('php://input');
        $_POST = json_decode($rest_json, true);
        $user_id = getPayload($bearer_token)->user->id;

        if ($database->confirmCode($user_id, $_POST['code'])) {
            if ($database->activeUser($user_id)) {
                return_json(['status' => 1]);
            }
        }
    }
} elseif ($action === 'login') {
    $rest_json = file_get_contents('php://input');
    $_POST = json_decode($rest_json, true);

    if (
        $user = $database->loginUser(
            $_POST['username'],
            md5($_POST['password'])
        )
    ) {
        $headers = ['alg' => 'HS256', 'typ' => 'JWT'];
        $payload = ['user' => $user];
        $jwt = generate_jwt($headers, $payload);
        return_json(['status' => $jwt]);
    }
} elseif ($action === 'reset') {
    $rest_json = file_get_contents('php://input');
    $_POST = json_decode($rest_json, true);

    if ($user = $database->getUserByUsernameOrEmail($_POST['username'])) {
        $generated_password = uniqid(round(11111, 99999));
        $user['password'] = md5($generated_password);
        if ($database->updateUser($user)) {
            //send password ($generated_password value) to user by email
            return_json(['status' => 1]);
        }
    }
} elseif ($action === 'user') {
    if ($is_jwt_valid) {
        $username = getPayload($bearer_token)->user->username;
        if ($user = $database->getUserByUsernameOrEmail($username)) {
            return_json(['status' => $user]);
        }
    }
}
return_json(['status' => 0]);

function return_json($arr)
{
    header('Content-Type: application/json');
    echo json_encode($arr);
    exit();
}
