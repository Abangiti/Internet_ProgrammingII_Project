<?php
class Database
{
    private $server_name = 'localhost';
    private $database_username = 'root';
    private $database_password = '11am22bm';
    private $database_name = 'login_system';
    private $connection = null;

    public function connectToDB() {
        if(!$this->connection) {
            $this->connection = new mysqli(
              $this->server_name, 
              $this->database_username, 
              $this->database_password,);
            }
              else{
                  echo "Connection Failed.";
              }
          }

   //used only once in the api.php code 
public function createDatabase(){
    $this->connection = new mysqli(
        $this->server_name,
        $this->database_username,
        $this->database_password,
    );

if( $this->connection->query("CREATE DATABASE login_system") === TRUE){
   echo "Database created successfully.<br>";
}else{
    echo "Failed to create DB.";
}
}
      //used only once in the api.php code 
      public function createTable(){
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name,
        );
        $sql = "CREATE TABLE user (
            firstname VARCHAR(30) NOT NULL,
            lastname VARCHAR(30) NOT NULL,
            birthdate DATE,
            phone VARCHAR(50),
            email VARCHAR(50),
            password VARCHAR(50),
            created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )";

    if( $this->connection->query($sql) === TRUE){
       echo "Table created successfully.<br>";
    }else{
        echo "Failed to create Table.";
    }
    }

    public function register($user)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'INSERT INTO user (`firstname`, `lastname`, `birthdate`,`phone`,`username`, `email`, `password`, `status`, `created_date`) VALUES (?,?,?,?,?,?,?)'
        );
        $sql->bind_param(
            'sssssssis',
            $user['firstname'],
            $user['lastname'],
            $user['birthdate'],
            $user['phone'],
            $user['username'],
            $user['email'],
            $user['password'],
            $user['status'],
            $user['created_date']
        );
        if ($sql->execute()) {
            $id = $this->connection->insert_id;
            $sql->close();
            $this->connection->close();
            return $id;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function generateConfirmCode($user_id)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'INSERT INTO `accountconfirm`(`user_id`, `code`) VALUES(?,?) ON DUPLICATE KEY UPDATE    
            code=?'
        );
        $code = rand(11111, 99999);
        $sql->bind_param('iss', $user_id, $code, $code);
        if ($sql->execute()) {
            $sql->close();
            $this->connection->close();
            return $code;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function confirmCode($user_id, $code)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'SELECT * FROM `accountconfirm` WHERE user_id=? AND code=?'
        );
        $sql->bind_param('is', $user_id, $code);
        $sql->execute();
        $result = $sql->get_result();
        if ($result->num_rows > 0) {
            $sql->close();
            $this->connection->close();
            return true;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function activeUser($user_id)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'UPDATE `user` SET `status` = 1 WHERE id=?'
        );
        $sql->bind_param('i', $user_id);
        if ($sql->execute()) {
            $sql->close();
            $this->connection->close();
            return true;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function loginUser($username, $password)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'SELECT * FROM `user` WHERE username=? AND password=?'
        );
        $sql->bind_param('ss', $username, $password);
        $sql->execute();
        $result = $sql->get_result();
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $sql->close();
            $this->connection->close();
            return $user;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function getUserByUsernameOrEmail($username)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'SELECT DISTINCT * FROM `user` WHERE username=? OR email=?'
        );
        $sql->bind_param('ss', $username, $username);
        $sql->execute();
        $result = $sql->get_result();
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $sql->close();
            $this->connection->close();
            return $user;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }

    public function updateUser($user)
    {
        $this->connection = new mysqli(
            $this->server_name,
            $this->database_username,
            $this->database_password,
            $this->database_name
        );
        $this->connection->set_charset('utf8');
        $sql = $this->connection->prepare(
            'UPDATE `user` SET `firstname` = ?,`lastname`=?, `birthdate`=?, `phone`=?,`username`=?, `email`=?,`password`=?, WHERE id=?'
        );
        $sql->bind_param(
            'sssssssi',
            $user['firstname'],
            $user['lastname'],
            $user['birthdate'],
            $user['phone'],
            $user['username'],
            $user['email'],
            $user['password'],
            $user['id']
        );
        if ($sql->execute()) {
            $sql->close();
            $this->connection->close();
            return true;
        }
        $sql->close();
        $this->connection->close();
        return false;
    }
}
