class Cancer{
    get Alphabet() { return $("//body/div[@id='__next']/div[contains(@class,'aem-page page spa page basicpage')]/div[contains(@class,'aem-Grid aem-Grid--12 aem-Grid--default--12')]/div[contains(@class,'aem-GridColumn aem-GridColumn--default--12 aem-GridColumn')]/main[@id='main-content']/div[contains(@class,'aem-Grid aem-Grid--12 aem-Grid--default--12')]/div[contains(@class,'aem-GridColumn aem-GridColumn--default--12 aem-GridColumn')]/div[contains(@class,'aem-Grid aem-Grid--12 aem-Grid--default--12')]/div[contains(@class,'aem-GridColumn aem-GridColumn--default--12 aem-GridColumn')]/div[contains(@class,'aem-Grid aem-Grid--12 aem-Grid--default--12')]/div[contains(@class,'aem-GridColumn aem-GridColumn--default--12 aem-GridColumn')]/div[contains(@class,'cmp-yspace cmp-yspace-top-md cmp-yspace-bottom-md')]/div[contains(@class,'cmp-column-control cmp-column-control__layoutType--TwoColumnStacked cmp-column-control__layoutWidth--12')]/div[contains(@class,'cmp-column-control__container')]/div[contains(@class,'container-child container-child')]/div[@id='dcalphabetfacet-a5a88484fc']/ul[contains(@class,'cmp-alphabet-facet--inner')]/li[contains(@class,'cmp-alphabet-facet--letter')]/div[contains(@class,'cmp-link')]/a[contains(@aria-label,'C. Find a disease or condition that starts with the letter C')]/span[1]");}
    get DisLink() {return $("//a[normalize-space()='Cancer']");}
    get ConfirmC() {return $("//h2[normalize-space()='C']");}
    
    get ConfirmC1() {return $("//p[normalize-space()='Calluses and corns']");}
    get DiagTre() {return $("//a[@id='et_genericNavigation_diagnosis-treatment']");}
    get DocDets() {return $("//a[@id='et_genericNavigation_doctors-departments']");}
    get Care() {return $("//a[@id='et_genericNavigation_care-at-mayo-clinic']");}
    get BookAppmt() {return $("//a[@id='et_linkAppointment_titlebar']");}
    get NewPat() {return $("//h2[normalize-space()='New Patients']");}
    get InsideUS() {return $("//p[normalize-space()='Inside of the U.S. (Including U.S. territories)']");}
    get Cont(){return $("//span[@role='text'][normalize-space()='Continue']");}
    //span[@role='text'][normalize-space()='Continue']
    get Yes(){return $("//label[@for='radiopi-is-patient-yes']//span[@class='subcopy']");}
    get Cont2(){return $("//button[@aria-label='Continue to the next question']");}
    //button[@aria-label='Continue to the next question']
    get NoCare() {return $("//div[normalize-space()='No']");}
    get FirstName(){return $("//input[@id='first-name']");}
    get LastName(){ return $("//input[@id='last-name']");}
    get DOB(){return $("//input[@id='dob']");}
    get Sex(){return $("//select[@id='pi-gender']");}
    get Email(){return $("//input[@id='piEmail']");}
    get Phone(){return $("//input[@id='phone_1']");}
    get NoInter(){return $("//div[normalize-space()='No']");}
    //div[normalize-space()='No']
    //div[normalize-space()='No']
    get Street(){return $("//input[@id='pi-street-address']");}
    get City(){return $("//input[@id='pi-city']");}
    get State(){return $("//select[@id='pi-state']");}
    get ZipCode(){return $("//input[@id='pi-zip-code']");}


    async openHomePage(){
        await browser.url("https://www.mayoclinic.org/");
        await browser.maximizeWindow();
        await $("//img[@alt='Mayo Clinic Home Page']").waitForDisplayed;
        console.log("Logo is displayed.")
        await expect(browser).toHaveTitle('Top-ranked Hospital in the Nation - Mayo Clinic');
        console.log("Title as expected")
        await $("//a[@id='button-9f068cbc04']//span[@role='text'][normalize-space()='Request appointment']").waitForDisplayed;
        console.log("Request Appointment option is visible")
    }

    async Choose(){
        //input[@id='search-input-globalsearch-a02e2c35b8']
        await $("//input[@id='search-input-globalsearch-a02e2c35b8']").waitForDisplayed;
        console.log("Search bar is available ");
        await this.Alphabet.click();

    }

    async Confirm(){
        await this.ConfirmC.waitForDisplayed();
        await this.ConfirmC1.waitForDisplayed();
        console.log("C related diseases visible");
        
    }
    
    async Select(){
        await this.DisLink.click();

    }

    async scrollDownSlowly(repeats, interval) {
        for (let i = 0; i < repeats; i++) {
            await browser.keys(['ArrowDown']);
            await browser.pause(interval); // Adjust for smoothness
        }
    }
    
    // Example usage: Scroll down 30 times with a 100ms interval
   async goToDiagnosis(){
    await this.DiagTre.click();
   }

   async goToDoc(){
    await this.DocDets.click();
   }
   
   async goToCare(){
    await this.Care.click();
   }

   async goToBookAppmt(){
    await this.BookAppmt.click();
   }

   async goToNewPat(){
    await this.NewPat.click();
   }
   
   async goToInsideUS(){
    await this.InsideUS.click();
   }

   async goToCont(){
    await this.Cont.click();  
   }
   async IAmPatient(){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.Yes.click();
    await browser.pause(10000); // Wait 10 seconds between actions

    await this.Cont2.click();
   } 

   async PrevCare(){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.NoCare.click();
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Cont2.click();

   }
   async PutName(finame, laname){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.FirstName.setValue(finame);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.LastName.setValue(laname);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Cont2.click();

   }

   async Dobgender(date){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.DOB.setValue(date);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Sex.click();
    await browser.keys("ArrowDown");
    await browser.keys("ArrowDown");
    await browser.keys("Enter");
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Cont2.click();
   }

   async Contact(mail,phone){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.Email.setValue(mail);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Phone.setValue(phone);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Cont2.click();
    

   }
   async NoInterpreter(){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.NoInter.click();
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.Cont2.click();
   }


   async Address(street,city,zip){
    // if (await browser.isDisplayed('//captcha-selector')) {
    //     console.log("Solve CAPTCHA manually to continue...");
    //     await browser.pause(30000); // Give yourself time to solve it
    // }
    
    await this.Street.setValue(street);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.City.setValue(city);
    await browser.pause(2000); // Wait 2 seconds between actions

    await this.State.click();
    await $("//option[@value='FL']").click();
    

    await this.ZipCode.setValue(zip);
    await browser.pause(2000); // Wait 2 seconds between actions


    await $("//button[@aria-label='Complete Section']").click();
   }

   get Desc(){ return $("//textarea[@id='primary-concern-additional-textarea-field']");}

    async Describe(text){
        await browser.pause(2000); // Wait 2 seconds between actions

        await $("//button[@aria-label='Start the Primary concern section. Step 2 of 4.']").click();
        await this.Desc.setValue(text);
        await browser.pause(2000); // Wait 2 seconds between actions

        await this.Cont2.click();
        await $("//button[@aria-label='Complete Section']").click();
    }
   


   





   


}
module.exports = new Cancer();