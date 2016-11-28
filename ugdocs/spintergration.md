# Work Flow 
## Login 
### Notice that using this Login Attempt, the Orgnazation is transparent to user. 

1. Application Level Login

	**POST**

	```
https://api.stormpath.com/v1/applications/BbljOmoJyAlsURvgTcOqQ/loginAttempts
	```
	**RESPONSE**

	```
{
  "account": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg"
  }
}
```
From Account HREF, you can know all your resources

	```
{
  "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg",
  "username": "yuy0311",
  "email": "yuy0311@gmail.com",
  "givenName": "yang",
  "middleName": "",
  "surname": "yu",
  "fullName": "yang yu",
  "status": "ENABLED",
  "createdAt": "2016-11-21T07:00:49.844Z",
  "modifiedAt": "2016-11-21T07:03:14.432Z",
  "passwordModifiedAt": "2016-11-21T07:00:49.000Z",
  "emailVerificationStatus": "VERIFIED",
  "emailVerificationToken": null,
  "customData": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/customData"
  },
  "providerData": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/providerData"
  },
  "directory": {
    "href": "https://api.stormpath.com/v1/directories/Bcbc5d5TU8GDabPKJ7g5S"
  },
  "tenant": {
    "href": "https://api.stormpath.com/v1/tenants/B7meYg4MJam7dBsPhzhek"
  },
  "groups": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/groups"
  },
  "applications": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/applications"
  },
  "groupMemberships": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/groupMemberships"
  },
  "apiKeys": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/apiKeys"
  },
  "accessTokens": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/accessTokens"
  },
  "refreshTokens": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/refreshTokens"
  },
  "linkedAccounts": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/linkedAccounts"
  },
  "accountLinks": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/accountLinks"
  },
  "phones": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/phones"
  },
  "factors": {
    "href": "https://api.stormpath.com/v1/accounts/1pOS3YQPhXY4tJeiClHuAg/factors"
  }
}
```

## First Time Sign Up

1.  Create Org

	**POST**

	```
https://api.stormpath.com/v1/organizations
	```
	
2. Create Directory. 

	**POST**

	```
 https://api.stormpath.com/v1/directories
```

3. [Account Create Policy](https://docs.stormpath.com/rest/product-guide/latest/reference.html#account-creation-policy) 

	A Directory’s Account Creation Policy resource contains data and attributes that control what Stormpath does when an Account is created. This includes email verification and welcome emails.

	**POST**
	
	```
https://api.stormpath.com/v1/accountCreationPolicies/$DIRECTORY_ID
```



4. Create Group under Directoy (Shall be Bulk creations)

	**POST**
	
	```
	https://api.stormpath.com/v1/directories/$DIRECTORY_ID/groups
```

5. Create Account under Directory auto link with existed Group
	
	**POST**
	
	```
	https://api.stormpath.com/v1/directories/$DIRECTORY_ID/accounts 
```

6. Finally Org link with Directory. 

	***POST***

	```
https://api.stormpath.com/v1/organizationAccountStoreMappings
```



