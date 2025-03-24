@echo off
echo Setting up GitHub Pages deployment...

REM Проверяем наличие Git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git first.
    pause
    exit /b 1
)

REM Инициализируем Git репозиторий если его нет
if not exist .git (
    git init
)

REM Добавляем удаленный репозиторий
git remote remove origin
git remote add origin https://github.com/Pomidorkaeg/hfdf.git

REM Создаем и переключаемся на ветку gh-pages
git checkout -b gh-pages

REM Добавляем все файлы
git add .

REM Создаем коммит
git commit -m "Initial deployment to GitHub Pages"

REM Отправляем изменения
git push -u origin gh-pages --force

echo Deployment setup completed!
echo Please check your repository settings to enable GitHub Pages.
pause 