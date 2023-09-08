@echo off

REM Compiling test.cpp...
g++ -O3 -std=c++17 test.cpp -o test.exe

REM Running test.exe...
test.exe
IF %ERRORLEVEL% NEQ 0 (
    echo "test.exe failed!"
    exit /b 1
)

REM Starting Real tests...
g++ -O3 -std=c++17 main.cpp -o main.exe
main.exe

exit /b 0
