    def update_balance(user_id, points):
        c.execute('SELECT balance FROM users WHERE user_id = ?', (user_id,))
        result = c.fetchone()
        if result:
            c.execute('UPDATE users SET balance = balance + ? WHERE user_id = ?', (points, user_id))
        else:
            c.execute('INSERT INTO users (user_id, balance) VALUES (?, ?)', (user_id, points))
        conn.commit()
    
