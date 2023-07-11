
describe('test api',()=>{
   
    it("GET call", () => {
     cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
          .its('status').should('equal', 200);
     });
     it("Post Call", () => {
        cy.request({
            method: 'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            body:   { title: "test Post",
                        body: "This is Post call",
                        userId:2     }
        }).its('status').should('equal',201);
        
  
        });
        it("Put Call", () => {
            cy.request({
                method: 'PUT',
                url:'https://jsonplaceholder.typicode.com/posts/1',
                body:   { title: "test PUT",
                            body: "This is PUT call",
                            userId:2,
                        id:1   }
            }).its('status').should('equal',200);
             
           
      
            });
            it("DELETE call", () => {
                cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
                     .its('status').should('equal', 200);
                });
   





})

  