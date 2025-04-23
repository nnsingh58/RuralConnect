// Add to App component
const [notifications, setNotifications] = useState([]);

const addNotification = (message) => {
  setNotifications([...notifications, message]);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.showNotification('RuralConnect', {
        body: message,
        icon: '/icon.png'
      });
    });
  }
};