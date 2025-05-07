#include <SCServo.h>

SMS_STS st;

void setup() {
  // 1) PC ↔ Arduino, debug
  Serial.begin(115200);
  while (!Serial) { /* wait */ }

  // 2) Arduino ↔ SCServo, real bus
  Serial1.begin(1000000, SERIAL_8N1);
  st.pSerial = &Serial1;
  delay(100);

  Serial.println("Ready. Send M<id>:<pos> + NL");
}

void loop() {
  if (!Serial.available()) return;

  String cmd = Serial.readStringUntil('\n');
  cmd.trim();
  int c = cmd.indexOf(':');
  if (cmd.startsWith("M") && c > 1) {
    byte id  = cmd.substring(1, c).toInt();
    int  pos = cmd.substring(c + 1).toInt();

    Serial.print("→ move #");
    Serial.print(id);
    Serial.print(" to ");
    Serial.println(pos);

    moveServo(id, pos, 500, 100);
    Serial.println("✔ done");
  } else {
    Serial.print("Bad fmt: "); Serial.println(cmd);
  }
}

void moveServo(byte id, int p, uint16_t t, uint16_t a) {
  // ONLY servo traffic on Serial1
  st.WritePosEx(id, p, t, a);
  delay(t + 20);
}