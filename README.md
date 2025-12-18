# 🎥 Video Call Rooms App (React + ZEGOCLOUD)

A simple and modern **video calling web application** built with **React, Tailwind CSS, React Router**, and **ZEGOCLOUD UIKit**. Users can join a video call room by entering a Room ID, and instantly connect with others in the same room.

---

## 🚀 Features

* 🔗 Join video calls using a **Room ID**
* ⚡ Real-time video & audio calling (Group Call)
* 🎨 Beautiful and responsive UI using **Tailwind CSS**
* 🧭 Client-side routing with **React Router v6**
* 💤 Code splitting using **React.lazy**
* 📞 Powered by **ZEGOCLOUD Prebuilt UIKit**

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Video SDK:** ZEGOCLOUD UIKit Prebuilt

---

## 📁 Project Structure

```
src/
│── pages/
│   ├── Home.jsx        # Join room UI
│   └── Room.jsx        # Video call room
│
│── App.jsx             # App routes
│── main.jsx            # App entry point
```

---

## 🧩 How It Works

### 🏠 Home Page

* User enters a **Room ID**
* On submit, user is navigated to:

  ```
  /room/:roomId
  ```

### 🎥 Room Page

* `roomId` is extracted using `useParams()`
* A **ZEGOCLOUD Kit Token** is generated
* User joins the room using `ZegoUIKitPrebuilt.joinRoom()`
* Multiple users with the same Room ID can join the same call

---

## 🔑 Environment & Security

⚠️ **Important:**

This project currently uses:

```js
appID
serverSecret
```

directly in the frontend **for development/testing purposes only**.

❌ Do **NOT** expose `serverSecret` in production.

✅ Recommended for production:

* Generate Kit Token on a **secure backend server**
* Send token to frontend via API

---

## ▶️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

Open: `http://localhost:5173`

---

## 📦 Dependencies

```json
react
react-router-dom
tailwindcss
@zegocloud/zego-uikit-prebuilt
```

<!-- --- -->

<!-- ## 🌟 Future Improvements

* 🔐 Secure token generation via backend
* 👤 Username input before joining
* 🔗 Copy room invite link button
* 🌙 Dark mode
* 🎭 One-on-one call mode -->

<!-- ---

## 📄 License -->

This project is for learning and demonstration purposes.

---

## 🙌 Acknowledgements

* [ZEGOCLOUD](https://www.zegocloud.com/)
* React & Tailwind CSS community

---

### 💡 Author

**Yash**

Happy Coding 🚀
