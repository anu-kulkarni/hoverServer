<?php
    $username="root";
    $dbname="hover";
    $url="localhost";
    $password="MH31eh@2964";
    mysqli_report(MYSQLI_REPORT_STRICT);
    $fail=false;
    $response['conn'] = "FL_CONN";
    try{
      $conn=new mysqli($url,$username,$password,$dbname);
    }
    catch(Exception $e){
      //echo $e->message;
      $fail=true;
    }
    if($fail){
      $response['conn'] = "CONN_FAIL";
    }
    else{
      $response['conn'] = "CONN_SUCCESS";
      $HEAD = getAllHeaders();
      $retailer_id = $HEAD['retailer_id'];
      $target_path = "assets/profile_photos/".$retailer_id.".jpeg";
      $query = "update retailers set profile_picture = '".$target_path."' where user_id ='".$retailer_id."'";
      $result = $conn->query($query);
      if($result){
         $response['queryInsert'] = "IN_SUCC";
      }
      else{
        $response['queryInsert'] = "IN_FAIL";
      }
    }
    print(json_encode($response));
?>