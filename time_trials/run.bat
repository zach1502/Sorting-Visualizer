@echo off

REM Compiling test.cpp...
g++ -O3 -std=c++17 test.cpp -o test.exe

REM Running test.exe...
test.exe
IF %ERRORLEVEL% NEQ 0 (
    echo "test.exe failed!"
    goto loop
)
goto yes

:loop
echo "Do you want to run main.cpp? (y/n)"
set /p choice=
if %choice%==y goto yes
if %choice%==n goto no
goto loop

:no
echo "Exiting..."
exit /b 0

:yes
REM Starting Real tests...
g++ -O3 -std=c++17 main.cpp -o main.exe
main.exe

exit /b 0
