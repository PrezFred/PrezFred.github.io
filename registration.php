 <?php
 $lastName = $_POST['lastName'];
 $firstName = $_POST['firstName'];
 $contact = $_POST['contact'];
 
 
 $conn = new mysqli('localhost', 'root', '', 'mydb');
    if($conn->connect_error){
        die('connection Failed : '.$conn->connection_error);
    }else{
        $stmt = $conn->prepare("insert into registeredusers(lastName, firstName, contact)
            values(?, ?, ?)");
        $stmt->bind_param("ssi",$lastName, $firstName, $contact);
        $stmt->execute();
        echo "registration successful";
        $stmt->close();
        $conn->close();
    }
 
 
 ?>