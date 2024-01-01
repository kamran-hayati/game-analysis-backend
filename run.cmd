@echo off

SET "OPT=%1%"

if "%OPT%"=="" (
	SET "OPT=develop"
	goto run
)

:run
npx strapi %OPT%
got end


:errno
echo "During the executiong process an error occured error code: '%errorlevel%'"

:end
REM may print someting!
pause;