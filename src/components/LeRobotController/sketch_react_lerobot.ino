#include <SCServo.h>
SMS_STS st;
 
void setup() 
{ 
  Serial.begin(1000000,SERIAL_8N1);
  st.pSerial = &Serial;
  delay(1000);

  moveServo(24, 1);
}

void moveServo(byte servoID, int newPosition){
  Serial.print("Move servo...");
  int position = st.ReadPos(servoID);
  st.WritePosEx(servoID, newPosition, 500, 100);
  delay(10);
}

void loop() {
  
  // CHeck to see if Serial data is being received
  if (Serial.available() > 0) {
    
    // Create a new string variable to receive Serial data
    String receivedString = "";
    
    // Loop through received data and append to the receivedString variable
    while (Serial.available() > 0) {
      receivedString += char(Serial.read());
    }
    
    // Print received Serial data
    Serial.println(receivedString);
    
    // Do something based on received data
    String s = receivedString;
    // Find the colon that separates ID and position
    int colonIndex = s.indexOf(':');
    // Basic format check: must start with 'M' and have a colon
    if (s.startsWith("M") && colonIndex > 1) {
      // Extract the substring between 'M' and ':'
      String idStr  = s.substring(1, colonIndex);
      // Extract everything after the colon
      String posStr = s.substring(colonIndex + 1);

      // Convert to integers
      int motor_id       = idStr.toInt();
      int motor_position = posStr.toInt();

      // Output results
      Serial.print("motor_id       = ");
      Serial.println(motor_id);
      Serial.print("motor_position = ");
      Serial.println(motor_position);

      //moveServo(motor_id, motor_position);
    }
    else {
      Serial.println("Invalid format.");
    }
    
  }
}
