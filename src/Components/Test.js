import axios from "axios";

const Test = () =>{

    axios.post('https://dev.lucidits.com/LUCIDLicenseManagementAPI/V1/CreateOrganization',
    
    {
        "OrganizationDetails":{
            "OrganizationName": "LUCID",
            "ImageUrl": "",
            "Address":{
                "AddressLine1": "wwww",
                "AddressLine2": "wwwww",
                "AddressLine3": "123eee",
                "AreaCode": 03,
                "AreaName": "welo",
                "CityCode": 0,
                "CityName": "we",
                "StateCode": 0,
                "CountryCode": 0,
                "ZipCode": "123",
                "Landmark": "eee"
            },
            "ContactDetails":{
                "MobileCountryCode": "91",
                "MobileNo": "893839383",
                "TelephoneCountryCode": "233",
                "TelephoneAreaCode": "12",
                "TelephoneNo": "076353",
                "EmailId": "LUCID@its.com",
                "Website": "lucidpos.com"
            },
            "Status": 1
        },
        "PropertyDetails":{
            "PropertyName": "lucid",
            "ShortName": "lucid",
            "ImageUrl": "./images/lucid.jpg",
            "Address":{
                "AddressLine1": "12",
                "AddressLine2": "12",
                "AddressLine3": "12",
                "AreaCode": 0,
                "AreaName": "111",
                "CityCode": 0,
                "CityName": "12bbb",
                "StateCode": 0,
                "CountryCode": 0,
                "ZipCode": "333",
                "Landmark": "deee",
                "Latitude": 0,
                "Longitude": 0
            },
            "ContactDetails":{
                "MobileCountryCode": "23",
                "MobileNo": "32",
                "TelephoneCountryCode": "23",
                "TelephoneAreaCode": "32",
                "TelephoneNo": "323",
                "EmailId": "323@hhh.com",
                "Website": "lucid.com"
            },
            "Status": 1,
            "RegistrationDetails":[
                {
                    "RegistrationId": 0,
                    "RegistrationNumber": "121212",
                    "Status": 1
                }
            ],
            "YearEndSettings":{
                "OpeningFinancialMonth": 4,
                "StartDayOfTheMonth": 1
            },
            "SelectedModules":[
                {
                    "ModuleCode": "222",
                    "Features":[2],
                    "SubModules":[
                        {
                            "ModuleCode": "212",
                            "Features": [2]
                        }
                    ]
                }
            ]
        },
        "DefaultUsers":[
            {
                "UserId": "yuvi@lucidits.com",
                "Password": "123"
            }
        ],
        "SystemDetails":{
            "ApplicationName":"LUCID License Management",
            "ApplicationVersion":"1.0.0.0",
            "BrowserName":"Chrome",
            "BrowserVersion":"83",
            "DeviceId":"2",
            "DeviceType":"Desktop",
            "IP":"2409:4072:198:c9b1:95a:80d4:a728:36e",
            "Mac":"0210D6A869E8",
            "OPS":"5.0 (Windows NT 10.0; Win64; x64) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/83.0.4103.97 Safari\/537.36",
            "Source":"React App",
            "SystemName":"EC2AMAZ-EVPTFRH",
            "SystemTimeZoneId":1
        }
    }, {"Content-Type": "application/json"

    }





    ).then((response)=>{
        console.log(response.data)
    }).catch((error)=>{
        console.log(error);
    })
}