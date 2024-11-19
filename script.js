// Push notification uchun funksiyani sozlash
function submitName() {
    const name = document.getElementById('nameInput').value;
  
    if (name.trim() !== "") {
      // Push notification yuborish
      if (Notification.permission === "granted") {
        new Notification(`${name} I love you`);
      } else {
        // Agar push notificationga ruxsat berilmagan bo'lsa, ruxsat so'rash
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification(`${name} I love you`);
          } else {
            alert("Notification ruxsat berilmadi.");
          }
        });
      }
    } else {
      alert("Iltimos, ismingizni kiriting.");
    }
  }
  