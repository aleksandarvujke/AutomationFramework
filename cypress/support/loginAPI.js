const loginAPI = () => {
    cy.request({ 
        method: 'POST', 
        url: 'https://api.cdtrfbgg54-sandvikab1-d1-public.model-t.cc.commerce.ondemand.com/authorizationserver/oauth/token', form:true, 
        body: { 
                grant_type: "password",
                scope: "",
                username: "aleksandar.vujetic@actumdigital.com",
                password: "Test123!",
                client_id: "mobile_android",
                client_secret: "secret"         
            }
           
        }) 
        .its('body') 
        .then(accessToken => {
            
            const startDate = new Date().getTime();
            const expireDate = startDate + accessToken.expires_in;

            const responseObject = new Map();
            responseObject.set("token", {
            "access_token":accessToken.access_token,
            "access_token_stored_at":startDate,
            "expires_at":expireDate,
            "granted_scopes":['basic openid'],
            "token_type":"bearer"})
            responseObject.set("userId","current")
             
            return responseObject;
            
            
       }).then((authObject) => {
        const objectConvertedToString = JSON.stringify(Object.fromEntries(authObject))
        cy.visit(Cypress.env('baseUrl'), {
            onBeforeLoad: (contentWindow) => {
                contentWindow.localStorage.setItem("spartacus⚿⚿auth", objectConvertedToString);
            }
        }) 
       
       })
    };
    Cypress.Commands.add('loginAPI', loginAPI); 