import React, { useState } from 'react';
import { 
  Cpu, 
  Eye, 
  ScanFace, 
  Activity, 
  Zap, 
  Code, 
  Server, 
  ChevronRight, 
  Github, 
  Linkedin, 
  Mail,
  ArrowRight,
  Wifi,
  Sun,
  ShieldCheck,
  Bot,
  Gamepad2,
  Globe,
  X,
  Phone,
  Wrench
} from 'lucide-react';

const SparkFlowPortfolio = () => {
  const [filter, setFilter] = useState('All');
  const [tutorialFilter, setTutorialFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const colors = {
    brandBlue: '#4DA9E2',
    brandOrange: '#f17a1e',
    darkBg: '#111827',
    cardBg: '#1F2937',
    textLight: '#F3F4F6',
    textGray: '#9CA3AF'
  };

  // Categories for filtering
  const categories = ['All', 'AI & CV', 'IoT & Automation', 'Robotics', 'Web & Apps'];
  const tutorialCategories = ['All', 'Raspberry Pi', 'Arduino', 'OpenCV', 'TensorFlow', 'Python', 'IoT', 'AI & Agentic'];

  const tutorials = [
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
  sudo ./pi-clone /dev/sda /dev/sd${i}
  sudo raspi-config nonint do_hostname "lab-pi-${i}"
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
      title: 'AR Marker Overlay with ArUco',
      category: 'OpenCV',
      summary: 'Detect ArUco markers and overlay 3D cubes for AR signage. Calibrate camera matrices and export printable marker sheets.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=ArUco+Overlay',
      code: `python
corners, ids, _ = cv2.aruco.detectMarkers(gray, dictionary)
cv2.aruco.drawAxis(frame, cameraMatrix, distCoeffs, rvec, tvec, 0.05)
`,
      deliverables: [
        'Frame screenshot with 3D cube overlay',
        'Marker sheet PDF preview',
        'Calibration chessboard image and YAML'
      ]
    },
    {
      title: 'Pose Estimation Fitness Coach',
      category: 'OpenCV',
      summary: 'Use MediaPipe pose to count reps for squats and pushups. Display angle calculations and audio cues for bad form.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=Pose+Coach',
      code: `python
angle = calculate_angle(hip, knee, ankle)
if angle < 80 and direction == "down":
    count += 1
`,
      deliverables: [
        'Overlay screenshot with joint angles',
        'CSV export screenshot of workout logs',
        'Audio cue code snippet using playsound'
      ]
    },

    // TensorFlow (7)
    {
      title: 'TF Lite Edge Image Classifier',
      category: 'TensorFlow',
      summary: 'Train a custom image classifier and convert to TF Lite for Pi/Android deployment. Benchmark with tflite-runtime and coral acceleration.',
      image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=TFLite+Classifier',
      code: `python
converter = tf.lite.TFLiteConverter.from_saved_model("model")
converter.optimizations = [tf.lite.Optimize.DEFAULT]
open("model.tflite","wb").write(converter.convert())
`,
      deliverables: [
        'Confusion matrix screenshot',
        'Benchmark table image FPS vs quantization',
        'Sample inference script on Raspberry Pi'
      ]
    },
    {
      title: 'Object Detection with TF OD API',
      category: 'TensorFlow',
      summary: 'Use TensorFlow Object Detection API to fine-tune SSD on a custom dataset. Export frozen graphs, run on GPU, and view detections with label maps.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=TF+Object+Detection',
      code: `python
pipeline_config = "ssd_mobilenet_v2.config"
model_dir = "exported-model"
model_main_tf2 --pipeline_config_path=$pipeline_config --model_dir=$model_dir
`,
      deliverables: [
        'TensorBoard screenshot of mAP improving',
        'Detection overlay image with labels',
        'Exported label_map.pbtxt sample'
      ]
    },
    {
      title: 'Text Sentiment Classifier',
      category: 'TensorFlow',
      summary: 'Tokenize reviews with Keras TextVectorization, train an LSTM sentiment model, and serve via FastAPI with batching.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=TF+Sentiment',
      code: `python
vectorizer = TextVectorization(max_tokens=20000, output_sequence_length=200)
model = Sequential([vectorizer, Embedding(20000, 64), LSTM(64), Dense(1, activation='sigmoid')])
`,
      deliverables: [
        'ROC curve screenshot',
        'FastAPI route code for /predict',
        'Postman screenshot testing payload'
      ]
    },
    {
      title: 'Time-Series Forecast with LSTM',
      category: 'TensorFlow',
      summary: 'Forecast energy load using sliding windows and stacked LSTMs. Evaluate MAPE and export ONNX for deployment.',
      image: 'https://placehold.co/600x340/1F2937/f17a1e?text=TF+Forecast',
      code: `python
dataset = tf.keras.preprocessing.timeseries_dataset_from_array(series[:-lookahead], series[lookahead:], sequence_length=48)
model = Sequential([LSTM(128), Dense(1)])
`,
      deliverables: [
        'Prediction vs actual plot screenshot',
        'ONNX export command snippet',
        'Notebook snippet for window generator'
      ]
    },
    {
      title: 'Recommender with Embeddings',
      category: 'TensorFlow',
      summary: 'Create a retrieval + ranking recommender using TensorFlow Recommenders with user/item embeddings and evaluate top-K accuracy.',
      image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=TF+Recsys',
      code: `python
user_model = tf.keras.Sequential([tf.keras.layers.StringLookup(vocabulary=users), tf.keras.layers.Embedding(len(users)+1, 32)])
task = tfrs.tasks.Retrieval(metrics=tfrs.metrics.FactorizedTopK(candidates=item_ds))
`,
      deliverables: [
        'Embedding projector screenshot',
        'Top-K evaluation table image',
        'SavedModel export snippet'
      ]
    },
    {
      title: 'GAN for Synthetic PCB Images',
      category: 'TensorFlow',
      summary: 'Train a DCGAN to generate PCB-like images for augmentation. Visualize training with grid outputs every N epochs.',
      image: 'https://placehold.co/600x340/111827/f17a1e?text=TF+GAN',
      code: `python
noise = tf.random.normal([batch_size, 100])
generated = generator(noise, training=True)
disc_loss = cross_entropy(real_output, generated_output)
`,
      deliverables: [
        'Epoch grid screenshot of generated boards',
        'Training loss chart',
        'Inference script to sample new boards'
      ]
    },
    {
      title: 'Transfer Learning with EfficientNet',
      category: 'TensorFlow',
      summary: 'Fine-tune EfficientNet-B0 on a 10-class dataset with mixed precision. Add early stopping, cosine decay, and export TF Lite.',
      image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=TF+Transfer+Learning',
      code: `python
base = tf.keras.applications.EfficientNetB0(include_top=False, pooling='avg')
model = tf.keras.Sequential([base, tf.keras.layers.Dense(10, activation='softmax')])
`,
      deliverables: [
        'Training curves screenshot',
        'TF Lite conversion command',
        'Inference notebook cell preview'
      ]
    },

    // Python (7)
    {
      title: 'FastAPI IoT Command Center',
      category: 'Python',
      summary: 'Build a FastAPI backend with JWT auth, MQTT bridge, and device registry. Ship with Docker Compose and Pydantic validation.',
      image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=FastAPI+IoT',
      code: `python
@app.post("/devices/{id}/command")
async def command(id: str, cmd: Command):
    await mqtt.publish(f"devices/{id}/cmd", cmd.json())
    return {"status": "queued"}
`,
      deliverables: [
        'OpenAPI docs screenshot',
        'Docker Compose YAML excerpt',
        'Sample MQTT bridge Python script'
      ]
    },
    {
      title: 'Data Pipeline with Pandas + Airflow',
      category: 'Python',
      summary: 'Create an ETL pipeline that ingests CSV/JSON, cleans with pandas, and schedules DAGs in Airflow. Add data-quality checks with Great Expectations.',
      image: 'https://placehold.co/600x340/111827/f17a1e?text=Python+ETL',
      code: `python
with DAG('etl', schedule='@hourly') as dag:
    extract = PythonOperator(task_id='extract', python_callable=fetch_raw)
    transform = PythonOperator(task_id='transform', python_callable=clean_dataset)
`,
      deliverables: [
        'Airflow graph view screenshot',
        'Great Expectations data docs preview',
        'Sample pandas cleaning notebook'
      ]
    },
    {
      title: 'Streamlit ML Dashboard',
      category: 'Python',
      summary: 'Serve a live model dashboard with Streamlit including upload, prediction, and SHAP plots. Containerize and add secrets via .env.',
      image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Streamlit+Dashboard',
      code: `python
uploaded = st.file_uploader("Upload CSV")
if uploaded:
    df = pd.read_csv(uploaded)
    st.pyplot(shap.plots.waterfall(explainer(df.iloc[0])))
`,
      deliverables: [
        'Dashboard screenshot with SHAP chart',
        'Dockerfile snippet for Streamlit',
        'Sample .env template for keys'
      ]
    },
    {
      title: 'Web Scraping Playbook',
      category: 'Python',
      summary: 'Use Playwright to scrape dynamic sites, store to SQLite, and expose data via a small Flask API. Handle rotating proxies and retries.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Python+Scraper',
      code: `python
async with async_playwright() as p:
    browser = await p.chromium.launch(headless=True)
    page = await browser.new_page()
    await page.goto(url, wait_until="networkidle")
`,
      deliverables: [
        'ERD screenshot of scraped tables',
        'Playwright timeline screenshot',
        'Flask route sample for paginated results'
      ]
    },
    {
      title: 'Async MQTT Fleet Manager',
      category: 'Python',
      summary: 'Monitor 100+ devices with asyncio-mqtt, store heartbeats, and trigger alerts on stale nodes. Add retry backoff and structured logging.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=MQTT+Fleet',
      code: `python
async with Client(BROKER) as client:
    async with client.filtered_messages("devices/+/heartbeat") as messages:
        await client.subscribe("devices/+/heartbeat")
        async for message in messages:
            log_heartbeat(message.topic, message.payload)
`,
      deliverables: [
        'Grafana screenshot for heartbeat counts',
        'Log sample with correlation IDs',
        'Alertmanager route config snippet'
      ]
    },
    {
      title: 'Automation CLI with Typer',
      category: 'Python',
      summary: 'Ship a CLI toolbox for devops tasks using Typer. Add subcommands for backups, deploys, and linting with rich progress bars.',
      image: 'https://placehold.co/600x340/1F2937/f17a1e?text=Python+CLI',
      code: `python
@app.command()
def deploy(env: str):
    spinner = Progress(SpinnerColumn(), TextColumn("{task.description}"))
    ...
`,
      deliverables: [
        'Terminal screenshot of CLI help',
        'Publish script to PyPI test index',
        'Example config file for environments'
      ]
    },
    {
      title: 'Testing Pyramid Workshop',
      category: 'Python',
      summary: 'Set up pytest with unit, integration, and end-to-end layers. Add fixtures for temporary files, httpx mocks, and coverage thresholds.',
      image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=Python+Testing',
      code: `python
@pytest.fixture
def client():
    with TestClient(app) as c:
        yield c
`,
      deliverables: [
        'Coverage report screenshot',
        'Sample failing test output image',
        'pytest.ini snippet enforcing min coverage'
      ]
    },

    // IoT (7)
    {
      title: 'MQTT Mesh for Campus Sensors',
      category: 'IoT',
      summary: 'Design a multi-hop MQTT mesh using ESP32 + Wi-Fi, bridging to a Pi broker with TLS. Includes topic design and offline buffering.',
      image: 'https://placehold.co/600x340/111827/f17a1e?text=MQTT+Mesh',
      code: `bash
mosquitto_pub -h broker.local -t "campus/node42/temp" -m 23.1 --cafile ca.crt --cert node.crt --key node.key
`,
      deliverables: [
        'Network diagram screenshot with hops',
        'Mosquitto ACL file snippet',
        'ESP32 buffering code for outages'
      ]
    },
    {
      title: 'ESPHome Smart Lighting',
      category: 'IoT',
      summary: 'Flash ESPHome firmware to control relays and dimmers, integrate with Home Assistant, and add sunrise/sunset automations.',
      image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=ESPHome+Lighting',
      code: `yaml
switch:
  - platform: gpio
    pin: 5
    name: "Ceiling Light"
`,
      deliverables: [
        'Home Assistant dashboard screenshot',
        'Wiring image for AC relay safety',
        'ESPHome YAML sample with effects'
      ]
    },
    {
      title: 'OTA Update Pipeline',
      category: 'IoT',
      summary: 'Create an OTA server for ESP32/STM32 nodes using HTTPS, signed binaries, and staged rollouts. Monitor success metrics.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=OTA+Pipeline',
      code: `bash
curl -X POST https://ota.local/upload -F firmware=@firmware.bin -F channel=beta
`,
      deliverables: [
        'OTA dashboard screenshot showing rollout',
        'Signing key generation steps',
        'Device-side code for version checks'
      ]
    },
    {
      title: 'Edge-to-Cloud with AWS IoT Core',
      category: 'IoT',
      summary: 'Provision certificates, attach policies, and stream telemetry to AWS IoT Core, then route to DynamoDB with rules engine.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=AWS+IoT+Core',
      code: `bash
aws iot create-thing --thing-name rover-01
aws iot attach-thing-principal --principal $CERT --thing-name rover-01
`,
      deliverables: [
        'AWS console screenshot of thing + shadow',
        'Rule SQL example sending to DynamoDB',
        'Device shadow JSON sample'
      ]
    },
    {
      title: 'Industrial Modbus Logger',
      category: 'IoT',
      summary: 'Poll PLC registers over Modbus RTU/TCP and store telemetry in TimescaleDB. Add Grafana panels for trends and alarm states.',
      image: 'https://placehold.co/600x340/1F2937/f17a1e?text=Modbus+Logger',
      code: `python
client = ModbusTcpClient("10.0.0.5")
rr = client.read_holding_registers(40001, 2)
`,
      deliverables: [
        'Register map screenshot',
        'Grafana trend screenshot',
        'Timescale hypertable creation SQL'
      ]
    },
    {
      title: 'BLE Beacon Tracker',
      category: 'IoT',
      summary: 'Use ESP32 in scanner mode to triangulate BLE beacons and push RSSI maps to a floor-plan overlay.',
      image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=BLE+Tracker',
      code: `cpp
BLEScanResults foundDevices = pBLEScan->start(scanTime, false);
for (int i = 0; i < foundDevices.getCount(); i++) { /* log RSSI */ }
`,
      deliverables: [
        'Floor plan overlay screenshot with dots',
        'ESP32 firmware snippet for scanning',
        'Heatmap matplotlib sample'
      ]
    },
    {
      title: 'Smart Parking Lot',
      category: 'IoT',
      summary: 'Deploy ultrasonic sensors per slot, push occupancy to MQTT, and drive LED signage. Includes enclosure tips and cable routing.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=Smart+Parking',
      code: `cpp
long duration = pulseIn(ECHO_PIN, HIGH);
int distance = duration * 0.034 / 2;
if (distance < 40) mqtt.publish("parking/slot1", "occupied");
`,
      deliverables: [
        'Lot map screenshot with live counts',
        'Enclosure photo for weatherproofing',
        'LED signage wiring diagram'
      ]
    },

    // AI & Agentic (8)
    {
      title: 'Voice Assistant on Raspberry Pi with Local LLM',
      category: 'AI & Agentic',
      summary: 'Create a wake-word driven assistant using Picovoice Porcupine + a 7B LLM running on the Pi with quantization. Add audio feedback and home control intents.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=Pi+Voice+Assistant',
      code: `python
if porcupine.process(pcm) >= 0:
    response = llm.generate(prompt=transcript)
    tts.play(response)
`,
      deliverables: [
        'Waveform screenshot on wake detection',
        'Home control intent map image',
        'Code for streaming mic to LLM with caching'
      ]
    },
    {
      title: 'Sensor-Orchestrating Agent with LangChain',
      category: 'AI & Agentic',
      summary: 'Wire LangChain agents to decide which sensor to query (temperature, camera, relay). Use tool-calling to execute Python functions and return summarized reports.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=LangChain+Tools',
      code: `python
tools = [get_temperature_tool, take_snapshot_tool, toggle_relay_tool]
agent = initialize_agent(tools, llm, agent=AgentType.OPENAI_FUNCTIONS)
`,
      deliverables: [
        'Sequence diagram screenshot of agent/tool calls',
        'Terminal transcript image of multi-tool run',
        'Tool schema code snippet'
      ]
    },
    {
      title: 'RAG for Maintenance Manuals',
      category: 'AI & Agentic',
      summary: 'Ingest PDF manuals into a vector store and expose a chat UI for technicians. Add source citations and safety guardrails.',
      image: 'https://placehold.co/600x340/1F2937/f17a1e?text=RAG+Maintenance',
      code: `python
docs = loader.load()
vectordb = Chroma.from_documents(docs, embedding=emb)
qa = ConversationalRetrievalChain.from_llm(llm, vectordb.as_retriever())
`,
      deliverables: [
        'Chat UI screenshot with citations',
        'Vector DB schema snippet',
        'Guardrail prompt template sample'
      ]
    },
    {
      title: 'Vision-Language Quality Inspector',
      category: 'AI & Agentic',
      summary: 'Combine OpenCV preprocessing with a vision-language model to score defects on product photos. Provide bounding boxes and textual rationales.',
      image: 'https://placehold.co/600x340/0f172a/4DA9E2?text=VL+Inspector',
      code: `python
prompt = [{"type": "text", "text": "Find scratches"}, {"type": "image_url", "image_url": url}]
resp = client.chat.completions.create(model="gpt-4o-mini", messages=[{"role":"user","content":prompt}])
`,
      deliverables: [
        'Inspection screenshot with boxes and scores',
        'REST response sample with rationale',
        'Preprocessing code for defect crops'
      ]
    },
    {
      title: 'Multi-Agent Ops Board',
      category: 'AI & Agentic',
      summary: 'Design a small ops board where planner, executor, and verifier agents coordinate deployments. Persist state in SQLite and visualize tasks in React.',
      image: 'https://placehold.co/600x340/111827/f17a1e?text=Multi+Agent+Ops',
      code: `python
planner = Agent("planner", tools=[deploy_tool])
verifier = Agent("verifier", tools=[log_tool])
board.run_cycle(ticket)
`,
      deliverables: [
        'Ops board UI screenshot',
        'SQLite schema diagram',
        'Agent handoff transcript image'
      ]
    },
    {
      title: 'Robot Arm Agent Bridge',
      category: 'AI & Agentic',
      summary: 'Expose robot arm actions (move, pick, place) as tools to an LLM agent. Add safety bounding boxes and dry-run simulator before execution.',
      image: 'https://placehold.co/600x340/1F2937/4DA9E2?text=Robot+Agent',
      code: `python
@tool
def move_joint(joint: int, angle: float):
    return robot.move_joint(joint, angle, dry_run=True)
`,
      deliverables: [
        'Simulation screenshot showing planned poses',
        'Safety envelope diagram',
        'Tool schema JSON sample'
      ]
    },
    {
      title: 'Agentic IoT Anomaly Handler',
      category: 'AI & Agentic',
      summary: 'Use anomaly scores from IoT sensors to prompt an agent that decides remediation steps (reset device, notify ops, escalate). Log all actions with audit trails.',
      image: 'https://placehold.co/600x340/0f172a/f17a1e?text=IoT+Anomaly+Agent',
      code: `python
if score > 0.9:
    plan = agent.run(f"Sensor {sensor_id} spiking to {score}. Decide action.")
`,
      deliverables: [
        'Alert screenshot with agent decision',
        'Audit log table snapshot',
        'Policy prompt template snippet'
      ]
    },
    {
      title: 'Guardrailed LLM for CV Pipelines',
      category: 'AI & Agentic',
      summary: 'Add guardrails to CV pipelines using JSON schemas and scorecards. Validate every model output before forwarding to downstream PLCs.',
      image: 'https://placehold.co/600x340/111827/4DA9E2?text=Guardrails+LLM',
      code: `python
schema = {"type":"object","properties":{"decision":{"enum":["ok","reject"]}}}
validated = guardrails.validate(output, schema=schema)
`,
      deliverables: [
        'Validation report screenshot',
        'Schema JSON file preview',
        'Example rejected output with reason'
      ]
    }
  ];

  const filteredTutorials = tutorialFilter === 'All'
    ? tutorials
    : tutorials.filter(t => t.category === tutorialFilter);

  const projects = [
    // --- FROM IMAGE 3 (Workshops & Environment) ---
    {
      title: 'Smart Watering System',
      category: 'IoT & Automation',
      description: 'Automated irrigation system using soil moisture sensors and Arduino to optimize water usage for agriculture.',
      img: '/smart-watering-system.png',
      tags: ['Arduino', 'IoT', 'Sensors']
    },
    {
      title: 'Street Traffic Automation',
      category: 'IoT & Automation',
      description: 'Intelligent traffic light control system that adapts signal timing based on real-time vehicle density.',
      img: '/0017.png',
      tags: ['Automation', 'Traffic Control']
    },
    {
      title: 'IoT Pipe Inspection Car',
      category: 'Robotics',
      description: 'Remote-controlled rover equipped with cameras and sensors for inspecting oil pipes and hazardous tunnels.',
      img: '/0018.png',
      tags: ['RC', 'Inspection', 'IoT']
    },
    {
      title: 'Smart Solar Umbrella',
      category: 'IoT & Automation',
      description: 'A solar-powered umbrella offering mobile charging ports and automated opening/closing based on sunlight.',
      img: '/0019.png',
      tags: ['Solar', 'Green Tech', 'Arduino']
    },

    // --- FROM IMAGE 1 (Security & AI) ---
    {
      title: 'Sanitation Gate (AI Mask)',
      category: 'AI & CV',
      description: 'Automatic sanitation gate with computer vision to enforce mask-wearing before granting entry.',
      img: '/0016.png',
      tags: ['Computer Vision', 'Safety', 'Raspberry Pi']
    },
    {
      title: 'Facial Recognition Door',
      category: 'AI & CV',
      description: 'Secure access control system using facial biometrics to unlock sliding doors for authorized personnel.',
      img: '/0015.png',
      tags: ['FaceID', 'Security', 'RFID']
    },
    {
      title: 'Autonomous Bot (PixyCam)',
      category: 'Robotics',
      description: 'Self-driving robot utilizing PixyCam for color-coded object tracking and obstacle avoidance.',
      img: '/00110.png',
      tags: ['PixyCam', 'Autonomous', 'Robotics']
    },
    {
      title: 'Voice-Activated Robotic Head',
      category: 'Robotics',
      description: 'Animatronic human head capable of voice interaction and facial expressions driven by servos.',
      img: '/0013.png',
      video: '/voice-activated-robotic-head.mp4',
      tags: ['Voice Rec', 'Animatronics', 'AI']
    },
    {
      title: '3D Scanning Bust',
      category: 'AI & CV',
      description: 'High-precision 3D scanning setup for digitizing physical busts into CAD-ready models.',
      img: '/0012.png',
      tags: ['3D Scanning', 'Modeling']
    },

    // --- FROM IMAGE 2 (The Big Grid) ---
    {
      title: 'Solar Panel Cleaning Bot',
      category: 'Robotics',
      description: 'Autonomous robot designed to travel along solar arrays, cleaning dust to maintain peak efficiency.',
      img: '/00126.png',
      tags: ['Solar', 'Robotics', 'Automation']
    },
    {
      title: 'Laser Cutting Machine',
      category: 'IoT & Automation',
      description: 'Custom-built CNC laser cutter for precise acrylic and wood fabrication prototyping.',
      img: '/00127.png',
      tags: ['CNC', 'Laser', 'Fabrication']
    },
    {
      title: 'Smart Buoy (LoRa)',
      category: 'IoT & Automation',
      description: 'Marine monitoring buoy transmitting water quality data over long distances using LoRaWAN.',
      img: '/0011.png',
      tags: ['LoRa', 'Marine', 'IoT']
    },
    {
      title: 'Maze Solving Robot',
      category: 'Robotics',
      description: 'Micro-mouse robot implementing flood-fill algorithms to solve physical mazes autonomously.',
      img: '/00125.png',
      tags: ['Algorithms', 'Robotics', 'Arduino']
    },
    {
      title: 'Horse Riding Helmet GPS',
      category: 'IoT & Automation',
      description: 'Safety helmet with integrated GPS and fall detection to alert emergency contacts during accidents.',
      img: '/00120.png',
      tags: ['GPS', 'Safety', 'Wearable']
    },
    {
      title: 'Automatic Control System',
      category: 'IoT & Automation',
      description: 'Centralized rack-mounted control units for large-scale facility automation (e.g., Mosque Amplifiers).',
      img: '/00121.png',
      tags: ['Industrial', 'Automation', 'Control']
    },
    {
      title: 'IoT Weather Station',
      category: 'IoT & Automation',
      description: 'Self-sustaining station monitoring wind, temp, and humidity, pushing data to the cloud.',
      img: '/00122.png',
      tags: ['Weather', 'IoT', 'Cloud']
    },
    {
      title: 'Vaccination Verification',
      category: 'Web & Apps',
      description: 'Digital kiosk for verifying vaccination status via QR codes for secure venue entry.',
      img: '/00124.png',
      tags: ['QR', 'HealthTech', 'Kiosk']
    },
    {
      title: 'Blind Navigation Wristband',
      category: 'IoT & Automation',
      description: 'Haptic feedback wristband using ultrasonic sensors to guide visually impaired users.',
      img: '/00118.png',
      tags: ['Accessibility', 'Ultrasonic', 'Wearable']
    },
    {
      title: 'Coin Operated Printer',
      category: 'IoT & Automation',
      description: 'Self-service printing station activated by coin insertion, integrated with printer APIs.',
      img: '/00123.png',
      tags: ['Automation', 'Payment', 'Hardware']
    },
    {
      title: 'Long Range RF Control',
      category: 'Robotics',
      description: 'High-power RF remote control system designed for long-distance drone or rover operation.',
      img: '/00116.png',
      tags: ['RF', 'Communication', 'Hardware']
    },
    {
      title: 'Web Home Automation',
      category: 'Web & Apps',
      description: 'Comprehensive web dashboard for controlling home appliances, lights, and locks remotely.',
      img: '/00115.png',
      tags: ['Web', 'IoT', 'Smart Home']
    },
    {
      title: 'Color Mixer Machine',
      category: 'IoT & Automation',
      description: 'Automated liquid dispensing system that mixes primary colors to create precise custom shades.',
      img: '/00114.png',
      tags: ['Fluidics', 'Automation', 'Arduino']
    },
    {
      title: 'Robotic Arm (4 DOF)',
      category: 'Robotics',
      description: '4-Degree-of-Freedom robotic arm programmable for pick-and-place industrial tasks.',
      img: '/00113.png',
      tags: ['Robotics', 'Servo', 'Kinematics']
    },
    {
      title: 'NFC Door Control',
      category: 'IoT & Automation',
      description: 'Contactless entry system using NFC tags and electromagnetic locks for secure access.',
      img: '/00112.png',
      tags: ['NFC', 'Security', 'Access Control']
    },
    
    // --- NEW WEB & APPS (Using Branded Placeholders) ---
    {
      title: 'MindArena',
      category: 'Web & Apps',
      description: 'Interactive cognitive training web application designed to improve memory and focus through gamified challenges.',
      img: '/mindarena.png',
      link: 'https://mindarena.onrender.com/',
      tags: ['React', 'Brain Training', 'Web App']
    },
    {
      title: 'SpareEye',
      category: 'Web & Apps',
      description: 'Accessibility-focused web platform assisting visually impaired users via AI-powered descriptive tools.',
      img: '/SpareEye.png',
      link: 'https://spareeye.onrender.com/',
      tags: ['Accessibility', 'AI', 'Web App']
    },
    {
      title: 'Volunteers Hub',
      category: 'Web & Apps',
      description: 'Community platform connecting volunteers with local organizations for event management and coordination.',
      img: 'https://placehold.co/600x400/1F2937/4DA9E2?text=Volunteers+Hub',
      link: 'https://volunteers-hub.onrender.com/',
      tags: ['Social Impact', 'Community', 'Web Platform']
    },
    {
      title: 'Connect-4',
      category: 'Web & Apps',
      description: 'Classic strategy board game implemented as a browser-based application with responsive logic.',
      img: '/connect-4.png',
      link: 'https://mjassim2030.github.io/Connect-4/',
      tags: ['Game Dev', 'JavaScript', 'Logic']
    },
    {
      title: 'Tic-Tac-Toe Lab',
      category: 'Web & Apps',
      description: 'Clean, modern implementation of the Tic-Tac-Toe game featuring minimax algorithm for AI opponents.',
      img: '/tic-tac-toe.png',
      link: 'https://mjassim2030.github.io/javascript-browser-game-tic-tac-toe-lab/',
      tags: ['Game Dev', 'Algorithms', 'Web']
    },
    {
      title: 'Circuit Simulator',
      category: 'Web & Apps',
      description: 'Web-based interface for visualizing data streams and controlling connected Arduino modules.',
      img: '/arduino-platform.png',
      link: 'https://arduino-platform.vercel.app',
      tags: ['IoT Dashboard', 'Arduino', 'Vercel']
    },
    {
      title: 'PS5 Controller Config',
      category: 'Web & Apps',
      description: 'Utility web tool for mapping buttons and testing input response for DualSense controllers.',
      img: '/ps5.png',
      link: 'https://sparkflow0.github.io/ps5-controller/',
      tags: ['Hardware Interface', 'Gamepad API', 'Tool']
    },
    {
      title: 'LPG Leak Detection',
      category: 'Web & Apps',
      description: 'Real-time safety dashboard monitoring gas sensor levels and triggering alerts for detected leaks.',
      img: '/lpg-leak.png',
      link: 'https://lpg-leak-detection.firebaseapp.com/',
      tags: ['Safety', 'IoT', 'Firebase']
    },
    {
      title: 'Waste Management System',
      category: 'Web & Apps',
      description: 'Smart city dashboard tracking waste bin fill-levels to optimize collection routes.',
      img: '/waste-management.png',
      link: 'https://waste-management-system-c9715.firebaseapp.com/',
      tags: ['Smart City', 'Analytics', 'Firebase']
    },
    {
      title: 'Solar Tracker',
      category: 'Web & Apps',
      description: 'Monitoring interface for solar panel efficiency, tracking voltage outputs and sunlight exposure.',
      img: '/solar-tracker.png',
      link: 'https://solar-tracker-2f8a7.firebaseapp.com/',
      tags: ['Green Energy', 'Data Viz', 'IoT']
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter) || p.category === filter);

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.darkBg, color: colors.textLight }}>
      {/* Navigation */}
      <nav className="border-b border-gray-800 backdrop-blur-md fixed w-full z-50 bg-opacity-90" style={{ backgroundColor: colors.darkBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <img 
                  src="/logo.png" 
                  alt="SparkFlow logo" 
                  className="h-12 w-auto"
                />
              </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#stats" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Impact</a>
                <a href="#tutorials" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Tutorials</a>
                <a href="#projects" className="hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Portfolio</a>
                <a href="#contact" className="bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full text-sm font-medium transition-all" style={{ backgroundColor: colors.brandOrange, color: colors.textLight }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandBlue }}></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: colors.brandOrange }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">Igniting Intelligence in</span>
                <span className="block mt-2" style={{ color: colors.brandBlue }}>Embedded Systems</span>
              </h1>
              <p className="mt-4 max-w-md mx-auto text-lg sm:text-xl lg:mx-0" style={{ color: colors.textGray }}>
                Spark Flow specializes in bridging the gap between advanced AI algorithms and rugged hardware. From Raspberry Pi computer vision to Arduino automation.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a href="#projects" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white transition-transform hover:scale-105" style={{ backgroundColor: colors.brandBlue }}>
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Hero Visual */}
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center relative">
               <div className="relative w-full max-w-lg aspect-square">
                  <div className="absolute inset-0 border-2 rounded-full opacity-20 animate-pulse" style={{ borderColor: colors.brandBlue }}></div>
                  <div className="absolute inset-8 border-2 rounded-full opacity-20" style={{ borderColor: colors.brandOrange }}></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700 z-20">
                    <Cpu className="w-16 h-16" style={{ color: colors.brandBlue }} />
                  </div>
                  <div className="absolute top-20 right-20 bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-700 z-10 animate-bounce">
                    <Eye className="w-8 h-8" style={{ color: colors.brandOrange }} />
                  </div>
                  <div className="absolute bottom-20 left-20 bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-700 z-10 animate-bounce">
                    <Activity className="w-8 h-8" style={{ color: colors.brandOrange }} />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-full p-2 border border-gray-700"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-full h-full bg-black">
              <video 
                src={activeVideo.video}
                poster={activeVideo.img}
                controls
                autoPlay
                muted
                playsInline
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <section id="stats" className="py-16 relative bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>Impact by the Numbers</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Cpu className="w-8 h-8 text-blue-400" />
                <h3 className="text-4xl font-bold text-white">45+</h3>
              </div>
              <p className="text-gray-400 font-medium">AI Models Deployed</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Server className="w-8 h-8 text-orange-400" />
                <h3 className="text-4xl font-bold text-white">120+</h3>
              </div>
              <p className="text-gray-400 font-medium">Hardware Integrations</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <ScanFace className="w-8 h-8 text-blue-400" />
                <h3 className="text-4xl font-bold text-white">99.8%</h3>
              </div>
              <p className="text-gray-400 font-medium">Recognition Accuracy</p>
            </div>
             <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
              <div className="flex items-center gap-4 mb-2">
                <Activity className="w-8 h-8 text-orange-400" />
                <h3 className="text-4xl font-bold text-white">5+</h3>
              </div>
              <p className="text-gray-400 font-medium">Years of R&D</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-20 bg-gray-950 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>
              50 Tutorials Across Pi, Arduino, CV, ML, and IoT
            </h2>
            <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Step-by-step builds with screenshots, wiring, and code
            </p>
            <p className="mt-4 text-lg" style={{ color: colors.textGray }}>
              Each tutorial includes the required assets: wiring photos/screenshots, image proofs, and starter code blocks so you can replicate the build end-to-end.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tutorialCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setTutorialFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    tutorialFilter === cat 
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial, idx) => (
              <div 
                key={idx}
                className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:border-gray-500 transition-all flex flex-col"
              >
                <div className="relative h-44 w-full overflow-hidden bg-gray-900 border-b border-gray-700">
                  <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold border border-gray-600 bg-gray-900 bg-opacity-80 text-gray-200 shadow">
                    <Bot className="w-3 h-3 text-orange-300" />
                    <span>{tutorial.category}</span>
                  </div>
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-white leading-tight">{tutorial.title}</h3>
                    <div className="bg-gray-900 p-1.5 rounded-lg border border-gray-700">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: colors.textGray }}>
                    {tutorial.summary}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm" style={{ color: colors.textLight }}>
                    {tutorial.deliverables.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-400">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-400 mb-2">Starter code</p>
                    <pre className="text-xs text-gray-200 whitespace-pre-wrap leading-relaxed">
{tutorial.code}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>
              Our Extensive Portfolio
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Innovation in Action
            </p>
            
            {/* Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                    ? 'bg-white text-gray-900 shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex flex-col h-full hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-2xl ${project.video ? 'cursor-pointer' : ''}`}
                onClick={() => project.video && setActiveVideo(project)}
              >
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={`Open ${project.title}`}
                  />
                )}
                
                {/* Image Area */}
                <div className="h-48 w-full relative overflow-hidden bg-gray-900 border-b border-gray-700">
                  <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-semibold border border-gray-600 bg-gray-900 bg-opacity-80 text-gray-200 shadow">
                    <Wrench className="w-3 h-3 text-orange-300" />
                    <span>DIY Build</span>
                  </div>
                  {project.size ? (
                    // Sprite Sheet Logic for Hardware Projects
                    <div 
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.img})`,
                        backgroundSize: project.size,
                        backgroundPosition: project.pos,
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  ) : project.img ? (
                    // Direct Image Logic for Web Apps
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    // Fallback Icon
                    <div className="w-full h-full flex items-center justify-center bg-gray-800">
                      <Code className="w-12 h-12 text-gray-600" />
                    </div>
                  )}
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                    <div className="bg-gray-900 p-1.5 rounded-lg border border-gray-700">
                       <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: colors.brandBlue }}>
                    {project.category}
                  </p>
                  
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: colors.textGray }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded text-[10px] font-semibold tracking-wide bg-gray-700 text-gray-300 border border-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="py-12 border-t border-b border-gray-800 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest mb-8" style={{ color: colors.textGray }}>Tech Stack</p>
          <div className="flex justify-center items-center flex-wrap gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold text-white flex items-center gap-2"><Cpu size={20}/> Raspberry Pi</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Zap size={20}/> Arduino</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Eye size={20}/> OpenCV</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Bot size={20}/> TensorFlow</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Code size={20}/> Python</span>
             <span className="text-xl font-bold text-white flex items-center gap-2"><Wifi size={20}/> IoT</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base font-semibold tracking-wide uppercase" style={{ color: colors.brandOrange }}>
              Contact Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Let’s build something smart together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-700 rounded-full p-3 border border-gray-600">
                  <Mail className="w-6 h-6" style={{ color: colors.brandOrange }} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg text-white font-semibold">sparkflow2030@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-700 rounded-full p-3 border border-gray-600">
                  <Phone className="w-6 h-6" style={{ color: colors.brandOrange }} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg text-white font-semibold">+973 3364 1412</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <input 
                    type="text"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <input 
                    type="email"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full rounded-lg bg-gray-900 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-blue-400"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <button 
                    type="submit"
                    className="px-6 py-3 rounded-lg text-white font-semibold shadow-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: colors.brandOrange }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 bg-black bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/logo.png" 
              alt="SparkFlow logo" 
              className="h-9 w-auto"
            />
            <p className="text-sm mt-2" style={{ color: colors.textGray }}>© 2025 Spark Flow. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SparkFlowPortfolio;
