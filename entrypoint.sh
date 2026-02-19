#!/bin/sh

echo "⏳ Attente du démarrage de MySQL..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done
echo "✅ MySQL est prêt"

sleep 2

echo "🚀 Démarrage avec nodemon..."
exec nodemon index.js