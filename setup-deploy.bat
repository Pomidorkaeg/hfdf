@echo off
echo Setting up GitHub Pages deployment...

REM Инициализация Git, если еще не инициализирован
if not exist .git (
    git init
)

REM Добавление удаленного репозитория
git remote add origin https://github.com/Pomidorkaeg/hfdf.git

REM Создание и переключение на ветку main
git checkout -b main

REM Добавление всех файлов
git add .

REM Создание первого коммита
git commit -m "Initial commit"

REM Отправка в репозиторий
git push -u origin main

echo Setup completed! Your site will be deployed automatically to GitHub Pages.
echo Please check the Actions tab in your GitHub repository to monitor the deployment.
echo Once deployed, your site will be available at: https://Pomidorkaeg.github.io/hfdf/ 