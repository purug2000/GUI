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
    messageType : 'dynamixel_msgs/JointState'
  });


  // listener.subscribe(function(message) {
  //   var text=document.getElementById("msg");
  //   text.textContent='Received message on ' + listener.name + ': ' + message.data;
  //   console.log('Received message on ' + listener.name + ': ' + message.data);
  //   listener.unsubscribe();
  // });

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
         var listener = new ROSLIB.Topic({
    ros : ros,
    name : '/listener',
    messageType : 'dynamixel_msgs/JointState'
  });

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

  var lis_num=0;

  document.getElementById("s1").onclick=function(){
      unsub();
      lis_num=1;
      listener.subscribe(function(message) {    //add 1 before listener
        document.getElementById("d1").textContent=message.name;
        document.getElementById("d2").textContent=message.motor_ids;
        document.getElementById("d3").textContent=message.motor_temps;
        document.getElementById("d4").textContent=message.goal_pos;
        document.getElementById("d5").textContent=message.current_pos;
        document.getElementById("d6").textContent=message.error;
        document.getElementById("d7").textContent=message.velocity;
        document.getElementById("d8").textContent=message.load;
        document.getElementById("d9").textContent=message.is_moving;
      });
  };
  document.getElementById("s2").onclick=function(){
      unsub();
      lis_num=2;
      listener.subscribe(function(message) {    //add 1 before listener
        document.getElementById("d1").textContent=message.name;
        document.getElementById("d2").textContent=message.motor_ids;
        document.getElementById("d3").textContent=message.motor_temps;
        document.getElementById("d4").textContent=message.goal_pos;
        document.getElementById("d5").textContent=message.current_pos;
        document.getElementById("d6").textContent=message.error;
        document.getElementById("d7").textContent=message.velocity;
        document.getElementById("d8").textContent=message.load;
        document.getElementById("d9").textContent=message.is_moving;
      });
  };
  document.getElementById("s3").onclick=function(){
      unsub();
      lis_num=3;
      listener.subscribe(function(message) {    //add 1 before listener
        document.getElementById("d1").textContent=message.name;
        document.getElementById("d2").textContent=message.motor_ids;
        document.getElementById("d3").textContent=message.motor_temps;
        document.getElementById("d4").textContent=message.goal_pos;
        document.getElementById("d5").textContent=message.current_pos;
        document.getElementById("d6").textContent=message.error;
        document.getElementById("d7").textContent=message.velocity;
        document.getElementById("d8").textContent=message.load;
        document.getElementById("d9").textContent=message.is_moving;
      });
  };
  document.getElementById("s4").onclick=function(){
      unsub();
      lis_num=4;
      listener.subscribe(function(message) {    //add 1 before listener
        document.getElementById("d1").textContent=message.name;
        document.getElementById("d2").textContent=message.motor_ids;
        document.getElementById("d3").textContent=message.motor_temps;
        document.getElementById("d4").textContent=message.goal_pos;
        document.getElementById("d5").textContent=message.current_pos;
        document.getElementById("d6").textContent=message.error;
        document.getElementById("d7").textContent=message.velocity;
        document.getElementById("d8").textContent=message.load;
        document.getElementById("d9").textContent=message.is_moving;
      });
  };
  document.getElementById("s5").onclick=function(){
      unsub();
      lis_num=5;
      listener.subscribe(function(message) {    //add 1 before listener
        document.getElementById("d1").textContent=message.name;
        document.getElementById("d2").textContent=message.motor_ids;
        document.getElementById("d3").textContent=message.motor_temps;
        document.getElementById("d4").textContent=message.goal_pos;
        document.getElementById("d5").textContent=message.current_pos;
        document.getElementById("d6").textContent=message.error;
        document.getElementById("d7").textContent=message.velocity;
        document.getElementById("d8").textContent=message.load;
        document.getElementById("d9").textContent=message.is_moving;
      });
  };
  document.getElementById("reset").onclick=function(){
      document.getElementById("d1").textContent=" ";
      document.getElementById("d2").textContent=" ";
      document.getElementById("d3").textContent=" ";
      document.getElementById("d4").textContent=" ";
      document.getElementById("d5").textContent=" ";
      document.getElementById("d6").textContent=" ";
      document.getElementById("d7").textContent=" ";
      document.getElementById("d8").textContent=" ";
      document.getElementById("d9").textContent=" ";
      unsub();
  };

function unsub(){
    if(lis_num===0);
    else{
      str="listener"+str(lis_num);
      str.unsubscribe();
    }

}
