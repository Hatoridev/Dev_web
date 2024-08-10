# Dev_web

Repository containing examples of web development using HTML, CSS, and JavaScript.

## How to Run

### Termux (Android):
1. **Open the Termux app**.
2. **Update and install necessary packages** by running the following commands:
   ```bash
   apt update && apt upgrade
   pkg install busybox
   pkg install git
   git clone https://github.com/Hatoridev/Dev_web.git
   cd Dev_web
   ```

3. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or aula02, aula03, aula04
   ```

4. **Start the web server**:
   ```bash
   busybox httpd -p 8000 -h .
   ```

5. **If you encounter "Address already in use" error**:
   - Identify the process using the port:
     ```bash
     lsof -i :8000
     ```
     **Example Output**:
     ```
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME
     busybox  12345  zyw     7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)
     ```
   - Kill the process using the port (replace `12345` with the actual PID):
     ```bash
     kill -9 12345
     ```
   - Retry starting the server:
     ```bash
     busybox httpd -p 8000 -h .
     ```

6. **View the web page**:
   - Open your browser and go to `http://localhost:8000` or `http://<your-device-ip>:8000`.

### Windows:
1. **Install Git**:
   - Download and install Git: [Git for Windows](https://gitforwindows.org/)

2. **Clone the repository** and navigate to the directory:
   ```bash
   git clone https://github.com/Hatoridev/Dev_web.git
   cd Dev_web
   ```

3. **Start a simple HTTP server** using a web server like [XAMPP](https://www.apachefriends.org/index.html) or [WampServer](https://www.wampserver.com/en/):
   - If using XAMPP:
     - Place the contents of the `aula01`, `aula02`, `aula03`, or `aula04` directories in the `htdocs` directory of your XAMPP installation.
     - Start Apache from the XAMPP control panel.
   - If using WampServer:
     - Place the contents of the `aula01`, `aula02`, `aula03`, or `aula04` directories in the `www` directory of your WampServer installation.
     - Start WampServer.

4. **If you encounter "Address already in use" error**:
   - Open Command Prompt and identify the process using the port:
     ```bash
     netstat -ano | findstr :8000
     ```
     **Example Output**:
     ```
     TCP    0.0.0.0:8000             0.0.0.0:0                 LISTENING       12345
     ```
   - Find the process ID (PID) and kill the process (replace `12345` with the actual PID):
     ```bash
     taskkill /PID 12345 /F
     ```
   - Retry starting the server using XAMPP or WampServer.

5. **View the web page**:
   - Open your browser and go to `http://localhost:8000`.

### Debian/Linux:
1. **Open the terminal** and execute the following commands to install necessary packages:
   ```bash
   sudo apt update && sudo apt upgrade
   sudo apt install busybox
   sudo apt install git
   git clone https://github.com/Hatoridev/Dev_web.git
   cd Dev_web
   ```

2. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or aula02, aula03, aula04
   ```

3. **Start the web server**:
   ```bash
   busybox httpd -p 8000 -h .
   ```

4. **If you encounter "Address already in use" error**:
   - Identify the process using the port:
     ```bash
     lsof -i :8000
     ```
     **Example Output**:
     ```
     COMMAND   PID    USER    FD   TYPE DEVICE SIZE/OFF NODE NAME
     busybox  12345  zyw     7u  IPv4  123456  0t0    TCP *:8000 (LISTEN)
     ```
   - Kill the process using the port (replace `12345` with the actual PID):
     ```bash
     kill -9 12345
     ```
   - Retry starting the server:
     ```bash
     busybox httpd -p 8000 -h .
     ```

5. **View the web page**:
   - Open your browser and go to `http://localhost:8000`.

## Languages

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="60" alt="HTML logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="60" alt="CSS logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" alt="JavaScript logo" />
</div>
