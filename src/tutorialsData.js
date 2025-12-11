export const tutorialCategories = [
  'All',
  'Raspberry Pi',
  'Arduino',
  'OpenCV',
  'TensorFlow',
  'Python',
  'IoT',
  'AI & Agentic'
];

export const tutorials = [
  // Raspberry Pi (7)
  {
    title: 'Edge Vision Guard with Raspberry Pi',
    category: 'Raspberry Pi',
    summary: 'Deploy a Pi 4 as an edge NVR that flags intrusions with OpenCV motion masking and GPIO siren triggers. Covers RTSP ingestion, frame differencing, and saving incident clips.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Raspberry+Pi+Edge+Guard',
    code: `python
import cv2
cap = cv2.VideoCapture("rtsp://camera/stream")
_, bg = cap.read()
while True:
    ok, frame = cap.read()
    if not ok:
        break
    mask = cv2.absdiff(bg, frame)
    _, binary = cv2.threshold(cv2.cvtColor(mask, cv2.COLOR_BGR2GRAY), 35, 255, cv2.THRESH_BINARY)
    if cv2.countNonZero(binary) > 12000:
        print("intrusion detected")
`,
    deliverables: [
      'Block diagram screenshot of camera → Pi → siren wiring',
      'Annotated motion heatmap PNG samples',
      'Starter Python script to trigger GPIO alarms'
    ]
  },
  {
    title: 'Smart Garden Pi Hub',
    category: 'Raspberry Pi',
    summary: 'Use Raspberry Pi + InfluxDB + Grafana stack to visualize soil moisture, light, and temperature. Includes wiring DHT22/Capacitive sensors and serving dashboards on LAN.',
    image: 'https://placehold.co/600x340/1F2937/f17a1e?text=Pi+Garden+Hub',
    code: `bash
# systemd service to run the collector
[Service]
ExecStart=/usr/bin/python3 /home/pi/garden/read_sensors.py
Restart=always
`,
    deliverables: [
      'Grafana dashboard screenshot with time-series panels',
      'Python collector script with influx line protocol',
      'Wiring image for DHT22 and moisture probes'
    ]
  },
  {
    title: 'Pi Time-lapse Plant Monitor',
    category: 'Raspberry Pi',
    summary: 'Capture growth time-lapses using Pi Camera HQ and cron. Add overlays for humidity and light readings and publish MP4 to a shared NAS.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Pi+Timelapse',
    code: `bash
*/5 * * * * /usr/bin/python3 /home/pi/cam/timelapse.py --exposure auto
`,
    deliverables: [
      'Sample time-lapse frame with sensor overlay',
      'Camera rig photo showing tripod and diffuser',
      'Cron entry and ffmpeg stitch command'
    ]
  },
  {
    title: 'Retail Kiosk on Pi + Chromium',
    category: 'Raspberry Pi',
    summary: 'Lock down a Pi to run a branded kiosk in full screen with remote updates. Configure auto-login, disable screen blanking, and add watchdog for the web app.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Pi+Kiosk',
    code: `bash
@reboot /usr/bin/chromium-browser --kiosk https://store.local --incognito --autoplay-policy=no-user-gesture-required
`,
    deliverables: [
      'Photo of kiosk enclosure with mounted Pi',
      'systemd unit for kiosk-launch and restart logic',
      'Checklist screenshot for lockdown settings'
    ]
  },
  {
    title: 'Air-Quality Sentinel with Pi Sense HAT',
    category: 'Raspberry Pi',
    summary: 'Build an indoor AQ monitor using Pi Sense HAT to log temperature, humidity, pressure, and eCO2 estimates. Push alerts to Slack when thresholds spike.',
    image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Pi+Air+Quality',
    code: `python
from sense_hat import SenseHat
import requests
sense = SenseHat()
temp = sense.get_temperature()
if temp > 30:
    requests.post(WEBHOOK, json={"text": "Room overheating"})
`,
    deliverables: [
      'Sense HAT orientation photo and pinout',
      'Grafana-style screenshot of AQI trends',
      'Slack webhook snippet for instant alerts'
    ]
  },
  {
    title: 'LoRa Backhaul Gateway on Pi',
    category: 'Raspberry Pi',
    summary: 'Turn a Pi + SX1302 hat into a LoRaWAN gateway for remote fields. Configure packet forwarder, ChirpStack, and a local Prometheus exporter.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Pi+LoRa+Gateway',
    code: `bash
sudo systemctl enable chirpstack-concentratord
sudo systemctl enable chirpstack-gateway-bridge
sudo systemctl enable chirpstack-network-server
sudo systemctl enable chirpstack-application-server
`,
    deliverables: [
      'Topology diagram screenshot for node → gateway → server',
      'ChirpStack console image showing uplinks',
      'Config files for region and channel plan'
    ]
  },
  {
    title: 'Pi Classroom Lab Kit',
    category: 'Raspberry Pi',
    summary: 'Prepare SD card images with VS Code, GPIO demos, and SSH keys for a 10-seat lab. Includes checklist for cloning, hostname stamping, and Wi‑Fi onboarding.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Pi+Lab+Kit',
    code: `bash
for i in {01..10}; do
  sudo ./pi-clone /dev/sda /dev/sd\${i}
  sudo raspi-config nonint do_hostname "lab-pi-\${i}"
done
`,
    deliverables: [
      'Imager settings screenshot for base OS',
      'Printed quickstart sheet PDF preview',
      'Automation script for hostnames and SSH keys'
    ]
  },

  // Arduino (7)
  {
    title: 'Arduino Smart Irrigation Shield',
    category: 'Arduino',
    summary: 'Drive relays for pumps based on soil moisture and schedule. Calibrate analog sensors, debounce floats, and fail-safe close valves on brownouts.',
    image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Arduino+Irrigation',
    code: `cpp
int soil = analogRead(A0);
if (soil < 480) {
  digitalWrite(RELAY_PIN, HIGH);
}
`,
    deliverables: [
      'Wiring schematic screenshot with relays and pump',
      'Serial plotter image of moisture calibration',
      'Arduino sketch with moisture thresholds'
    ]
  },
  {
    title: 'Wearable Gesture Band',
    category: 'Arduino',
    summary: 'Use an Arduino Nano + MPU6050 to capture gestures and trigger Bluetooth HID events. Smooth data with a complementary filter and emit keystrokes.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Gesture+Band',
    code: `cpp
Vector norm = mpu.readNormalizeGyro();
float roll = roll + norm.XAxis * 0.1;
if (roll > 35) Keyboard.write('N');
`,
    deliverables: [
      'Fritzing diagram screenshot of MPU6050 wiring',
      'Serial plot screenshot showing smoothed roll/pitch',
      'HID profile code for keyboard shortcuts'
    ]
  },
  {
    title: 'Autonomous Line-Follow Rover',
    category: 'Arduino',
    summary: 'Calibrate IR reflectance sensors and PID-tune a two-wheel rover to follow lines and handle junctions. Add buzzer feedback and OLED HUD.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Line+Follow+Rover',
    code: `cpp
float error = target - sensorValue;
float control = kp*error + ki*sumErr + kd*(error-lastErr);
motorLeft.write(base + control);
`,
    deliverables: [
      'Track layout photo with tape lines',
      'PID tuning chart screenshot',
      'Arduino sketch for sensor calibration'
    ]
  },
  {
    title: 'Greenhouse Climate Node',
    category: 'Arduino',
    summary: 'Combine DHT22 and relay bank to control fans and heaters. Add LCD menu for manual override and EEPROM presets for summer/winter.',
    image: 'https://placehold.co/600x340/1F2937/f17a1e?text=Climate+Node',
    code: `cpp
if (humidity > 75) digitalWrite(FAN_RELAY, HIGH);
if (temp < 18) digitalWrite(HEATER_RELAY, HIGH);
`,
    deliverables: [
      'Panel photo with labeled relays',
      'LCD menu screenshot for mode switching',
      'EEPROM profile code snippet'
    ]
  },
  {
    title: 'LED Cube Animator',
    category: 'Arduino',
    summary: 'Solder and drive an 4x4x4 LED cube with multiplexing. Create animation frames and author a mini DSL to choreograph patterns.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=LED+Cube',
    code: `cpp
byte cube[4][4] = { /* frames */ };
for (int z=0; z<4; z++) {
  shiftOut(dataPin, clockPin, MSBFIRST, cube[z][row]);
}
`,
    deliverables: [
      'Cube wiring diagram screenshot',
      'Animation timeline image',
      'Arduino code for frame sequencing'
    ]
  },
  {
    title: 'MIDI Synth Shield',
    category: 'Arduino',
    summary: 'Read MIDI over UART and generate tones with the Mozzi synth library. Add potentiometer filters and OLED patch selector.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=MIDI+Synth',
    code: `cpp
if (mozziAnalogRead(POT_PIN) > 600) currentPatch = 2;
if (Serial.available()) handleMidi(Serial.read());
`,
    deliverables: [
      'Breadboard photo with DIN MIDI jack',
      'OLED patch menu screenshot',
      'Example MIDI-to-audio Arduino sketch'
    ]
  },
  {
    title: 'Energy Meter Logger',
    category: 'Arduino',
    summary: 'Use a non-invasive CT clamp to log AC current, compute RMS, and send readings over RS485/Modbus to a Pi gateway.',
    image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Energy+Logger',
    code: `cpp
double amps = emon.calcIrms(1480);
modbus.writeSingleRegister(0x0001, (int)(amps*100));
`,
    deliverables: [
      'Scope screenshot showing CT waveform',
      'Calibration spreadsheet screenshot',
      'Modbus register map snippet'
    ]
  },

  // OpenCV (7)
  {
    title: 'Mask Detection with OpenCV',
    category: 'OpenCV',
    summary: 'Build a face-mask detector using Haar cascades and overlay compliance badges. Export annotated frames and trigger GPIO when violations occur.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=OpenCV+Mask+Detector',
    code: `python
faces = detector.detectMultiScale(gray, 1.1, 4)
for x,y,w,h in faces:
    roi = gray[y:y+h, x:x+w]
    if model.predict(roi) == 0:
        cv2.putText(frame, "Mask", (x,y-10), font, 0.8, (0,255,0), 2)
`,
    deliverables: [
      'Annotated screenshot with mask/no-mask labels',
      'Confusion matrix image for validation set',
      'Python script using Haar + simple CNN'
    ]
  },
  {
    title: 'Multi-Object Tracker with Kalman + SORT',
    category: 'OpenCV',
    summary: 'Detect and track pedestrians with YOLOv8 and SORT to assign IDs. Handle occlusions and visualize motion trails.',
    image: 'https://placehold.co/600x340/1F2937/f17a1e?text=OpenCV+Tracker',
    code: `python
tracks = mot_tracker.update(detections)
for x1,y1,x2,y2,tid in tracks:
    cv2.rectangle(frame, (x1,y1), (x2,y2), color_map(tid), 2)
`,
    deliverables: [
      'Video frame screenshot with colored IDs',
      'Graph showing FPS vs resolution',
      'Tracking notebook with evaluation metrics'
    ]
  },
  {
    title: 'Lane Detection for Mini-RC',
    category: 'OpenCV',
    summary: 'Process dashcam feeds to detect road lanes using Canny + Hough transform. Convert to steering commands and publish to MQTT.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Lane+Detection',
    code: `python
edges = cv2.Canny(gray, 50, 150)
lines = cv2.HoughLinesP(edges, 1, np.pi/180, 40, minLineLength=50, maxLineGap=10)
`,
    deliverables: [
      'Overlay screenshot with detected lane lines',
      'Steering chart image comparing PID output',
      'MQTT topic map for steering commands'
    ]
  },
  {
    title: 'Barcode & QR Scanner',
    category: 'OpenCV',
    summary: 'Build a checkout-ready scanner using OpenCV + pyzbar, highlighting bounding boxes and pushing scans to a REST endpoint.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Barcode+Scanner',
    code: `python
from pyzbar.pyzbar import decode
codes = decode(frame)
for c in codes:
    cv2.rectangle(frame, c.rect, (0,255,0), 2)
`,
    deliverables: [
      'Frame screenshot with decoded QR text overlay',
      'HTTP request example for posting scans',
      'USB camera setup photo'
    ]
  },
  {
    title: 'Motion-Triggered CCTV DVR',
    category: 'OpenCV',
    summary: 'Use background subtraction to detect motion and record clips with pre/post buffers. Email snapshots and prune archive automatically.',
    image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Motion+DVR',
    code: `python
fgmask = backSub.apply(frame)
if cv2.countNonZero(fgmask) > 8000:
    writer.write(frame)
`,
    deliverables: [
      'Screenshot of masked motion regions',
      'Folder snapshot showing clipped MP4s',
      'Email alert template with inline JPG'
    ]
  },
  {
    title: 'Smart Traffic Analytics',
    category: 'OpenCV',
    summary: 'Analyze traffic density and classify vehicles with YOLOv8 + DeepSORT. Trigger redirection recommendations based on congestion heatmaps.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Traffic+Analytics',
    code: `python
results = model(frame)
counts = results.pandas().xyxy[0]['name'].value_counts()
if counts.get('car', 0) > 30:
    alert("Congestion detected")
`,
    deliverables: [
      'Dashboard screenshot with vehicle counts',
      'Heatmap overlay of congested areas',
      'Sample code for detection and counting'
    ]
  },
  {
    title: 'Pose Estimation Fitness Coach',
    category: 'OpenCV',
    summary: 'Use MediaPipe pose to count reps and provide angle-based feedback for squats and pushups.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Pose+Coach',
    code: `python
pose = mp_pose.Pose()
results = pose.process(frame_rgb)
if rep_detected(results.pose_landmarks):
    reps += 1
`,
    deliverables: [
      'Frame screenshot with pose landmarks',
      'Rep counter overlay example',
      'Snippet calculating joint angles'
    ]
  },

  // TensorFlow (7)
  {
    title: 'TinyML Vibration Classifier',
    category: 'TensorFlow',
    summary: 'Train a small CNN/LSTM on accelerometer data to classify machine states and deploy with TensorFlow Lite.',
    image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=TinyML+Vibration',
    code: `python
model = tf.keras.Sequential([
    tf.keras.layers.Conv1D(16, 5, activation='relu', input_shape=(200, 3)),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(4, activation='softmax')
])
`,
    deliverables: [
      'Training accuracy plot PNG',
      'Confusion matrix image',
      'TFLite converter snippet'
    ]
  },
  {
    title: 'Defect Detection on Conveyor',
    category: 'TensorFlow',
    summary: 'Build an object detection pipeline to flag surface defects on products moving on a conveyor belt using YOLOv8/TF Lite.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Defect+Detection',
    code: `python
preds = model(frame)
for det in preds:
    if det['score'] > 0.5:
        trigger_reject_gate()
`,
    deliverables: [
      'Inference frame showing defect boxes',
      'Metrics table (mAP) screenshot',
      'Edge deploy notes for Coral / Jetson'
    ]
  },
  {
    title: 'Audio Keyword Spotter',
    category: 'TensorFlow',
    summary: 'Train a small speech command recognizer and deploy to microcontrollers with DSP-friendly layers.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Keyword+Spotter',
    code: `python
spectrogram = audio_to_mel(audio)
pred = model.predict(spectrogram[None, ...])
`,
    deliverables: [
      'Spectrogram example image',
      'On-device accuracy report',
      'TFLite Micro code snippet'
    ]
  },
  {
    title: 'Predictive Maintenance RNN',
    category: 'TensorFlow',
    summary: 'Use sensor sequences to forecast bearing failures. Train an LSTM and expose a REST endpoint for predictions.',
    image: 'https://placehold.co/600x340/1F2937/f17a1e?text=Predictive+Maintenance',
    code: `python
model = tf.keras.Sequential([
    tf.keras.layers.LSTM(64),
    tf.keras.layers.Dense(1, activation='sigmoid')
])
`,
    deliverables: [
      'ROC curve PNG',
      'Serving endpoint example',
      'Feature scaling notebook'
    ]
  },
  {
    title: 'Document OCR Pipeline',
    category: 'TensorFlow',
    summary: 'Combine detection + recognition to extract text from scanned forms. Includes preprocessing and layout analysis.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Document+OCR',
    code: `python
import pytesseract
text = pytesseract.image_to_string(image)
`,
    deliverables: [
      'Sample OCR output screenshot',
      'Preprocessing before/after examples',
      'Deployment tips for CPU-only servers'
    ]
  },
  {
    title: 'AI Safety Helmet Detector',
    category: 'TensorFlow',
    summary: 'Train a detector to flag workers without helmets and send alerts to a dashboard with bounding boxes.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Helmet+Detector',
    code: `python
if det.class_id == NO_HELMET and det.score > 0.6:
    send_alert(det)
`,
    deliverables: [
      'Inference screenshot with labels',
      'Alert message template',
      'Edge TPU optimization snippet'
    ]
  },
  {
    title: 'Thermal Anomaly Detection',
    category: 'TensorFlow',
    summary: 'Use FLIR thermal camera data to spot overheating equipment with a lightweight CNN.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Thermal+Anomaly',
    code: `python
thermal = load_thermal_frame()
score = model.predict(thermal[None, ...])[0][0]
`,
    deliverables: [
      'Thermal frame visualization',
      'Threshold tuning notes',
      'Model architecture snippet'
    ]
  },

  // Python (7)
  {
    title: 'Async MQTT Fleet Monitor',
    category: 'Python',
    summary: 'Use asyncio and paho-mqtt to monitor hundreds of IoT nodes with backpressure and alerting.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Async+MQTT',
    code: `python
import asyncio, asyncio_mqtt as aiomqtt
async with aiomqtt.Client("broker") as client:
    async with client.messages() as messages:
        await client.subscribe("sensors/#")
        async for msg in messages:
            print(msg.topic, msg.payload)
`,
    deliverables: [
      'Dashboard screenshot showing live MQTT traffic',
      'Alert rule snippet',
      'Backpressure handling notes'
    ]
  },
  {
    title: 'Industrial OPC-UA Poller',
    category: 'Python',
    summary: 'Connect to PLCs via OPC-UA, poll tags, and push normalized data to TimescaleDB.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=OPC-UA+Poller',
    code: `python
from asyncua import Client
async with Client('opc.tcp://plc:4840') as client:
    temp = await client.get_node('ns=2;s=Temp').read_value()
`,
    deliverables: [
      'Schema diagram screenshot',
      'Sample query for Timescale',
      'Docker compose snippet'
    ]
  },
  {
    title: 'Edge AI Packaging Counter',
    category: 'Python',
    summary: 'Use OpenCV to count packages on a conveyor and send counts via REST + MQTT.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Packaging+Counter',
    code: `python
import cv2
if len(detections) > 0:
    total += len(detections)
`,
    deliverables: [
      'Counter overlay screenshot',
      'REST payload example',
      'MQTT topic map'
    ]
  },
  {
    title: 'Smart Attendance with QR',
    category: 'Python',
    summary: 'Scan QR badges for attendance, log to SQLite, and push daily summaries via email.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=QR+Attendance',
    code: `python
import sqlite3, qrcode
conn = sqlite3.connect('attend.db')
`,
    deliverables: [
      'Attendance dashboard screenshot',
      'QR badge sample image',
      'Daily summary email template'
    ]
  },
  {
    title: 'FastAPI Sensor Ingest',
    category: 'Python',
    summary: 'Build a FastAPI service to ingest IoT telemetry with validation and store it in PostgreSQL.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=FastAPI+Ingest',
    code: `python
from fastapi import FastAPI
app = FastAPI()
@app.post('/ingest')
async def ingest(payload: dict):
    return {'status': 'ok'}
`,
    deliverables: [
      'OpenAPI screenshot',
      'Pydantic model example',
      'psql schema snippet'
    ]
  },
  {
    title: 'Pandas ETL for IoT CSVs',
    category: 'Python',
    summary: 'Clean and aggregate CSV telemetry using Pandas, then export to Parquet and BigQuery.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Pandas+ETL',
    code: `python
import pandas as pd
df = pd.read_csv('telemetry.csv')
df.to_parquet('telemetry.parquet')
`,
    deliverables: [
      'Notebook screenshot showing ETL steps',
      'Schema comparison image',
      'BigQuery load command'
    ]
  },
  {
    title: 'IoT Alert Bot with Telegram',
    category: 'Python',
    summary: 'Send alerts to Telegram when sensor thresholds are exceeded using aiogram.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Telegram+Bot',
    code: `python
from aiogram import Bot, Dispatcher
bot = Bot(token=TOKEN)
await bot.send_message(chat_id, "Alert: temp too high")
`,
    deliverables: [
      'Bot conversation screenshot',
      'Alert formatting example',
      'Deployment checklist'
    ]
  },

  // IoT (7)
  {
    title: 'LoRa Soil Sensor Mesh',
    category: 'IoT',
    summary: 'Deploy LoRa soil moisture nodes with a central gateway to cover wide farmland and visualize data in Grafana.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=LoRa+Soil+Mesh',
    code: `cpp
// LoRa payload
struct Payload { float moisture; float temp; };
`,
    deliverables: [
      'Network diagram screenshot',
      'Grafana soil dashboard image',
      'LoRa payload struct snippet'
    ]
  },
  {
    title: 'Smart Factory Andon Board',
    category: 'IoT',
    summary: 'Build an Andon status board driven by MQTT to show production line health with color-coded alerts.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Andon+Board',
    code: `javascript
client.on('message', topic => updateBoard(topic));
`,
    deliverables: [
      'Andon board photo',
      'MQTT topic map screenshot',
      'Frontend snippet for board updates'
    ]
  },
  {
    title: 'Cold Chain Tracker',
    category: 'IoT',
    summary: 'Monitor temperature-sensitive shipments with GPS + temp sensors and alert on excursions.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Cold+Chain',
    code: `python
if temp > 8:
    send_sms(\"Cold chain break detected\")
`,
    deliverables: [
      'Route map screenshot',
      'Alert SMS example',
      'Device wiring photo'
    ]
  },
  {
    title: 'Industrial Safety Lockout',
    category: 'IoT',
    summary: 'IoT-enabled lockout/tagout with NFC badges and relay interlocks for maintenance safety.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Safety+Lockout',
    code: `cpp
if (badgeAuthorized(id)) unlockRelay();
`,
    deliverables: [
      'Lockout hardware photo',
      'NFC badge screenshot',
      'Firmware snippet for interlock'
    ]
  },
  {
    title: 'Smart City Air Node',
    category: 'IoT',
    summary: 'Low-power air quality node with NB-IoT uplink, pushing data to a public dashboard.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Smart+Air+Node',
    code: `cpp
nb.send(\"AQI:\", value);
`,
    deliverables: [
      'Deployment photo on street pole',
      'Dashboard screenshot',
      'NB-IoT payload example'
    ]
  },
  {
    title: 'Bluetooth Mesh Lighting',
    category: 'IoT',
    summary: 'BLE mesh lighting control with scene scheduling and occupancy detection.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=BLE+Mesh',
    code: `cpp
mesh.publish(\"lighting/zone1\", \"ON\");
`,
    deliverables: [
      'Lighting panel screenshot',
      'Mesh topology diagram',
      'Firmware publish snippet'
    ]
  },
  {
    title: 'Smart Parking Guidance',
    category: 'IoT',
    summary: 'Ultrasonic parking sensors + LED indicators with a web dashboard for occupancy.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Smart+Parking',
    code: `cpp
if (distance < 30) setLED(RED);
`,
    deliverables: [
      'Lot map screenshot with spots',
      'Ultrasonic wiring photo',
      'MQTT topics for occupancy'
    ]
  },

  // AI & Agentic (7)
  {
    title: 'Agentic Maintenance Planner',
    category: 'AI & Agentic',
    summary: 'Use an LLM agent to suggest maintenance tasks based on sensor logs and manuals.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Maintenance+Agent',
    code: `python
task = agent.plan(sensor_logs, manuals)
`,
    deliverables: [
      'Agent flow diagram',
      'Prompt template sample',
      'Integration code snippet'
    ]
  },
  {
    title: 'ChatOps for Factory Support',
    category: 'AI & Agentic',
    summary: 'Deploy a chat assistant that interfaces with PLC data and ticketing systems.',
    image: 'https://placehold.co/600x340/0f172a/f17a1e?text=ChatOps',
    code: `python
response = agent.chat(\"Status of Line 3?\")
`,
    deliverables: [
      'Chat transcript screenshot',
      'Backend API snippet',
      'Safety rails checklist'
    ]
  },
  {
    title: 'Vision Agent for Quality Checks',
    category: 'AI & Agentic',
    summary: 'Combine vision models with agent loops to decide pass/fail and re-inspection steps.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Vision+Agent',
    code: `python
decision = agent.evaluate(defect_logits)
`,
    deliverables: [
      'Decision tree diagram',
      'Sample output screenshot',
      'Safety policy prompt'
    ]
  },
  {
    title: 'LLM-powered Ops Runbooks',
    category: 'AI & Agentic',
    summary: 'Generate step-by-step runbooks from telemetry anomalies and historical fixes.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Ops+Runbooks',
    code: `python
runbook = agent.generate(anomaly_event)
`,
    deliverables: [
      'Runbook PDF sample',
      'Prompt tuning notes',
      'Integration snippet'
    ]
  },
  {
    title: 'RAG for Equipment Manuals',
    category: 'AI & Agentic',
    summary: 'RAG pipeline over PDF manuals to answer troubleshooting questions.',
    image: 'https://placehold.co/600x340/111827/f17a1e?text=Manual+RAG',
    code: `python
answer = rag.query(\"How to reset conveyor?\")
`,
    deliverables: [
      'Vector index stats screenshot',
      'Prompt example',
      'Chunking strategy notes'
    ]
  },
  {
    title: 'Energy Optimization Agent',
    category: 'AI & Agentic',
    summary: 'Agent suggests energy-saving actions based on load patterns and tariffs.',
    image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Energy+Agent',
    code: `python
suggestions = agent.optimize(load_profile)
`,
    deliverables: [
      'Energy savings chart',
      'Action plan example',
      'API integration snippet'
    ]
  },
  {
    title: 'AI Safety Checklist Builder',
    category: 'AI & Agentic',
    summary: 'Generate safety checklists for deployments using policy-aware prompts.',
    image: 'https://placehold.co/600x340/111827/4DA9E2?text=Safety+Checklist',
    code: `python
checklist = agent.create_checklist(requirements)
`,
    deliverables: [
      'Checklist screenshot',
      'Prompt template',
      'Usage instructions'
    ]
  }
];
