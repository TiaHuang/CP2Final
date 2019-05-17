const int forwardPin = 3;
const int backwardPin = 4;
int buttonState1 = 0;
int buttonState2 = 0;
int oldButtonState1 = 0;
int oldButtonState2 = 0;

void setup() {
  Serial.begin(115200);
  pinMode(forwardPin, INPUT); 
  pinMode(backwardPin, INPUT); 
}

void loop() {
  buttonState1 = digitalRead(forwardPin);
  buttonState2 = digitalRead(backwardPin);

  if (buttonState1 == LOW && oldButtonState1 == HIGH) {         
    Serial.println("forward"); 
  } 

  if (buttonState2 == LOW && oldButtonState2 == HIGH) {        
    Serial.println("backward"); 
  } 

  oldButtonState1 = buttonState1;
  oldButtonState2 = buttonState2;
  
  delay(10);
}
