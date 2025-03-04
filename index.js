   import telebot
   # Initialize bot with your API token
   API_TOKEN = "7117516548:AAHK93XIFjv-cdajI0MXIBGck-QhpScBTMs"
   bot = telebot.TeleBot(7117516548:AAHK93XIFjv-cdajI0MXIBGck-QhpScBTMs
   # Start Command
   @bot.message_handler(commands=['start'])
   def send_welcome(message):
       bot.reply_to(message, "Welcome! Use /bonus to claim your daily bonus.")
   # Bonus Command
   @bot.message_handler(commands=['bonus'])
   def daily_bonus(message):
       user_id = message.chat.id
       # Logic to check if the user is eligible for a bonus
       bot.reply_to(message, "🎉 You have received 50 points! Check back tomorrow for more.")
   # Handle "Free Like" functionality
   @bot.message_handler(func=lambda msg: "Free Like" in msg.text)
   def free_like(message):
       bot.reply_to(message, "📗 Send the post link where you want likes.")
   # Handle user input for post links
   @bot.message_handler(func=lambda msg: "instagram.com" in msg.text)
   def handle_post_link(message):
       post_link = message.text
       bot.reply_to(message, "👍 Enter the number of likes you want (minimum: 100).")
   bot.polling()
   ￼Enter
