@call "%RSVARS%"
@set PROJ_NAME=%2
@set AUX=.exe
@taskkill /im %PROJ_NAME%%AUX% -F
@IF NOT [%1]==[] CD %1
@set DIR_TEMP_EXEC=%cd%
@cd Win32/Debug/
@del %PROJ_NAME%.exe /q
@cd %DIR_TEMP_EXEC%
@msbuild %PROJ_NAME%.dproj /t:Build
@cd Win32/Debug/
@call %PROJ_NAME%.exe
