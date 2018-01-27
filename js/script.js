// Connecting to ROS
  // -----------------

  var ros = new ROSLIB.Ros({
    url : 'ws://localhost:9090'
  });

  ros.on('connection', function() {
    console.log('Connected to websocket server.');
  });

  ros.on('error', function(error) {
    console.log('Error connecting to websocket server: ', error);
  });

  ros.on('close', function() {
    console.log('Connection to websocket server closed.');
  });

  // Publishing a Topic
  // ------------------

  var cmdVel = new ROSLIB.Topic({
    ros : ros,
    name : '/cmd_vel',
    messageType : 'geometry_msgs/Twist'
  });

  var twist = new ROSLIB.Message({
    linear : {
      x : 0.1,
      y : 0.2,
      z : 0.3
    },
    angular : {
      x : -0.1,
      y : -0.2,
      z : -0.3
    }
  });
  cmdVel.publish(twist);

  // Subscribing to a Topic
  // ----------------------

  var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/listener',
    messageType : 'dynamixel_msgs/JointState.msg'
  });

  
  listener.subscribe(function(message) {
    var text=document.getElementById("msg");
    text.textContent='Received message on ' + listener.name + ': ' + message.data;
    console.log('Received message on ' + listener.name + ': ' + message.data);
    listener.unsubscribe();
  });

  // Calling a service
  // -----------------

  var addTwoIntsClient = new ROSLIB.Service({
    ros : ros,
    name : '/add_two_ints',
    serviceType : 'rospy_tutorials/AddTwoInts'
  });

  var request = new ROSLIB.ServiceRequest({
    a : 1,
    b : 2
  });

 /* addTwoIntsClient.callService(request, function(result) {
        var txt=document.getElementById("txt");
	txt.textContent="Result for service call on"+  addTwoIntsClient.name+ ': '+ result.sum;
  });*/

  // Getting and setting a param value
  // ---------------------------------

  ros.getParams(function(params) {
    console.log(params);
  });

  var maxVelX = new ROSLIB.Param({
    ros : ros,
    name : 'max_vel_y'
  });

  maxVelX.set(0.8);
  maxVelX.get(function(value) {
    console.log('MAX VAL: ' + value);
  });

  document.getElementById("primary").onclick=function(){
    
    var txt=document.getElementById("txt");
    var text=document.getElementById("msg");  
    
    if(txt.textContent===""||text.textContent===""){
      listener.subscribe(function(message) {    
        text.textContent='Received message on ' + listener.name + ': ' + message.data;
        console.log('Received message on ' + listener.name + ': ' + message.data);
        listener.unsubscribe();
      });    

      addTwoIntsClient.callService(request, function(result) {
        txt.textContent="Result for service call on"+  addTwoIntsClient.name+ ': '+ result.sum; 
      });
    }

    else{
      txt.textContent="";
      text.textContent="";
    }

  };

  document.getElementById("s1").onclick=function(){
    document.getElementById("f1").textContent="string name";
    document.getElementById("f2").textContent="int32[] motor_ids";
    document.getElementById("f3").textContent="int32[] motor_temps";
    document.getElementById("f4").textContent="float64 goal_pos";
    document.getElementById("f5").textContent="float64 current_pos";
    document.getElementById("f6").textContent="float64 error";
    document.getElementById("f7").textContent="float64 velocity";
    document.getElementById("f8").textContent="float64 load";
    document.getElementById("f9").textContent="bool is_moving";
  };  
