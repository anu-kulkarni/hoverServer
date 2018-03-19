<?php
	//$target_path = "assets/shop_act_images/";

	$json = json_decode(file_get_contents('php://input'),true);

	$name = $json['name'];
	$image = $json['image'];
	$decodedImage = base64_decode($image);
	//$target_path = $target_path . $name;
	//$response['uploadPath']=$target_path;
	if(file_put_contents("assets/profile_photos/".$name.".jpeg", $decodedImage)){
	 	$response['uploadDone'] = "UPLOAD_SUCC";
	}
	else{
		$response['uploadDone'] = "UPLOAD_FAIL";
	}
    print(json_encode($response));
?>