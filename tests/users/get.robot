*** Settings ***
Library         REST                            localhost:8273  ssl_verify=false
Suite setup     Set headers and assume schema   ${CURDIR}/json/headers.json
Suite teardown  Rest instances                  ${OUTPUTDIR}/instances.json

*** Keywords ***
Set headers and assume schema
    [Arguments]         ${headers}
    Set headers         ${headers}
    Expect response     ${CURDIR}/schemas/response_status.json

*** Test Cases ***
Get found
    GET             /users/1                    timeout=3.0
    Object          response body               {"id": 1, "name": "foo" }
