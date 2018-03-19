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
  		$response['conn']="CONN_SUCCESS";
  		$HEAD=getAllHeaders();
  		$retailer_id = $HEAD['user_id'];
  		$password = $HEAD['password'];
  		$enterprise_name = $HEAD['enterprise_name'];
  		$shop_category = $HEAD['shop_category'];
  		$proprieter = $HEAD['proprieter'];
  		$aadhar_num = $HEAD['aadhar_num'];
  		$mob_num = $HEAD['mob_num'];
  		$shop_act_license = $HEAD['shop_act_license_image'];
  		$address_line_1 = $HEAD['address_line_1'];
  		$address_line_2 = $HEAD['address_line_2'];
  		$city = $HEAD['city'];
  		$state = $HEAD['state'];
  		$gps_location_latitude = $HEAD['gps_lat'];
  		$gps_location_longitude = $HEAD['gps_long'];
  		$profile_picture = $HEAD['profile_picture'];

  		$checkQuery = "select user_id from retailers where user_id = '".$retailer_id."'";
  		$result = $conn->query();
  		if($result->num_rows > 0){
  			$response['duplicateEntry'] = "1";
  			$response['queryInsert'] = "IN_FAIL";
  		}
  		else{
  			$query = "insert into retailers (user_id,password,enterprise_name,shop_category,proprieter,aadhar_num,mob_num,address_line_1,address_line_2,city,state,gps_location_latitude,gps_location_longitude,profile_picture,shop_act_license) values('".$retailer_id."','".$password."','".$enterprise_name."','".$shop_category."','".$proprieter."',".$aadhar_num.",'".$mob_num."','".$address_line_1."','".$address_line_2."','".$city."','".$state."','".$gps_location_latitude."','".$gps_location_longitude."','".$profile_picture."','".$shop_act_license."')";

  			$result = $conn->query($query);
  			if($result){
  				$response['queryInsert'] = "IN_SUCC";
  			}
  			else{
  				$response['queryInsert'] = "IN_FAIL";
  			}
  		}

  	}
  	print(json_encode($response));
?>