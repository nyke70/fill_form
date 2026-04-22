#!/bin/sh

if [ -n "$DB_HOST" ] && [ -n "$DB_PORT" ]; then
  echo "⏳ Attente du démarrage de MySQL..."
  while ! nc -z "$DB_HOST" "$DB_PORT"; do
    sleep 1
  done
  echo "✅ MySQL est prêt"
  sleep 2
fi

echo "🚀 Démarrage..."
exec node index.js