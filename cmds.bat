@ECHO OFF
ECHO opening project in vscode
code .
ECHO running backend
start cmd /k "echo Backend && cd backend && nodemon index.js"
ECHO running frontend
start cmd /k "echo Frontend && cd frontend && ng serve -o"
PAUSE