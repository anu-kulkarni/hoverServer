<?php
	$username="root";
  	$dbname="hover";
  	$url="localhost";
  	$password="MH31eh@2964";
  	mysqli_report(MYSQLI_REPORT_STRICT);
  	$fail=false;
  	$response['conn']="FL_CONN";
  	try{
    	$conn=new mysqli($url,$username,$password,$dbname);
  	}
  	catch(Exception $e){
    	//echo $e->message;
    	$fail=true;
  	}
  	if($fail){
    	$response['conn']="CONN_FAIL";
  	}
  	else{
  		session_start();
  		$response['conn']="CONN_SUCCESS";
  		$HEAD = getAllHeaders();
  		$user_id = $HEAD['retailer_id'];
  		$password = $HEAD['password'];
  		$private_key = openssl_pkey_get_private("keys/private.pem","debadity");
  		openssl_private_decrypt($password, $password_decrypt_header, $private_key);

  		$query_pass = "select password from retailers where user_id = '".$retailer_id."'";
  		$password_database="";
  		$result = $conn->query($query_pass);
  		if($result->num_rows > 0){
  			while($row = $result->fetch_assoc()){
  				$password_database = $row['password'];
  			}
  			openssl_private_decrypt($password_database, $password_decrypt_db, $private_key;
  			if($password_decrypt_header == $password_decrypt_db){
  				if($_SESSION[$user_id] == 1){
  					$response['loginStatus'] = "LOGGED_IN";
  				}
  				else{
  					$response['loginStatus'] = "LOGIN_SUCCESS";
  					$_SESSION[$user_id] = 1;
  				}
  			}
  		}
  		else{
  			$response['loginStatus'] = "LOGIN_FAIL";
  		}
  	}
  	print(json_encode($response));
?>