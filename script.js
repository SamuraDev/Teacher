document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Останавливает стандартную отправку формы

  const contact = document.getElementById('contact').value;
  const message = document.getElementById('message').value || 'Без дополнительного сообщения';

  if (contact === '') {
    alert('Пожалуйста, оставьте ваш контакт');
  } else {
    // Токен бота и ID пользователя
    const botToken = '7504006652:AAFUwSQzRKw3SF7J8sUtlsbbYRtaMq9ltyE';
    const chatId = '1902550654';

    // Текст сообщения, которое будет отправлено
    const text = `Новая заявка:\nКонтакт: ${contact}\nСообщение: ${message}`;

    // URL для отправки запроса
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Параметры запроса
    const params = {
      chat_id: chatId,
      text: text
    };

    // Отправляем данные через fetch
    fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Сообщение успешно отправлено!');
        // Очистим форму
        document.getElementById('contactForm').reset();
      } else {
        alert('Ошибка при отправке сообщения. Попробуйте снова.');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке данных. Проверьте интернет-соединение.');
    });
  }
});
