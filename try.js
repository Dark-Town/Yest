    import sqlite3
    conn = sqlite3.connect('users.db')
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY,
            balance INTEGER DEFAULT 0,
            last_bonus TIMESTAMP
        )
    ''')
    conn.commit()
    ￼Enter
